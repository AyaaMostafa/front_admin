using AutoMapper;
using Azure;
using Coder.Application.DTOs;
using Coder.Application.Helpers;
using Coder.Application.IServices;
using Coder.Domain.Entities;
using Coder.Domain.Interfaces;

namespace Coder.Application.Services
{
    public class CodeTypeSequenceService : ICodeTypeSequenceService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private readonly ICurrentUserService _currentUserService;


        public CodeTypeSequenceService(IUnitOfWork unitOfWork, IMapper mapper, ICurrentUserService currentUserService)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _currentUserService = currentUserService;
        }

        public async Task<ApiResponse<CodeTypeSequenceDto>> CreateAsync(CreateCodeTypeSequenceDto dto)
        {
            try
            {
                var codeType = await _unitOfWork.CodeTypes.GetByIdAsync(dto.CodeTypeId);
                if (codeType == null)
                    return ApiResponse<CodeTypeSequenceDto>.BadRequest("Code Type does not exist");

                var exists = await _unitOfWork.CodeTypeSequences
                    .AnyAsync(x => x.CodeTypeId == dto.CodeTypeId);
                if (exists)
                    return ApiResponse<CodeTypeSequenceDto>.Conflict("Sequence already exists for this Code Type");

                if (dto.MinValue >= dto.MaxValue)
                    return ApiResponse<CodeTypeSequenceDto>.BadRequest("MinValue must be less than MaxValue");

                if (dto.StartWith < dto.MinValue || dto.StartWith > dto.MaxValue)
                    return ApiResponse<CodeTypeSequenceDto>.BadRequest("StartWith must be between MinValue and MaxValue");

               
                int currentValue = dto.CurrentValue + dto.StartWith;

                if (currentValue > dto.MaxValue)
                    return ApiResponse<CodeTypeSequenceDto>.BadRequest($"CurrentValue ({dto.CurrentValue}) + StartWith ({dto.StartWith}) exceeds MaxValue ({dto.MaxValue})");

                string currentValueStr = currentValue.ToString();
                int currentLength = currentValueStr.Length;

                int zerosCount = dto.IsCycling - currentLength;
                if (zerosCount < 0)
                    zerosCount = 0;

                string finalSequence = new string('0', zerosCount) + currentValueStr;

                var entity = _mapper.Map<CodeTypeSequence>(dto);
                entity.CurrentValue = currentValue;

                var result = await _unitOfWork.CodeTypeSequences.AddAsync(entity);
                var resultDto = _mapper.Map<CodeTypeSequenceDto>(result);

                return ApiResponse<CodeTypeSequenceDto>.Created(
                    resultDto,
                    $"Code Type Sequence created successfully with SequenceValue: {finalSequence} (CurrentValue: {currentValue})");
            }
            catch (Exception ex)
            {
                return ApiResponse<CodeTypeSequenceDto>.InternalServerError(ex.Message);
            }
        }

        public async Task<ApiResponse<CodeTypeSequenceDto>> GetByIdAsync(int id)
        {
            try
            {
                var entity = await _unitOfWork.CodeTypeSequences.GetByIdAsync(id);
                if (entity == null)
                    return ApiResponse<CodeTypeSequenceDto>.NotFound("Code Type Sequence not found");

                var dto = _mapper.Map<CodeTypeSequenceDto>(entity);
                return ApiResponse<CodeTypeSequenceDto>.Success(dto);
            }
            catch (Exception ex)
            {
                return ApiResponse<CodeTypeSequenceDto>.InternalServerError(ex.Message);
            }
        }

        public async Task<ApiResponse<List<CodeTypeSequenceDto>>> GetAllAsync()
        {
            try
            {
                var entities = await _unitOfWork.CodeTypeSequences.GetAllAsync();
                var dtos = _mapper.Map<List<CodeTypeSequenceDto>>(entities);
                return ApiResponse<List<CodeTypeSequenceDto>>.Success(dtos);
            }
            catch (Exception ex)
            {
                return ApiResponse<List<CodeTypeSequenceDto>>.InternalServerError(ex.Message);
            }
        }

        public async Task<ApiResponse<CodeTypeSequenceDto>> GetByCodeTypeAsync(int codeTypeId)
        {
            try
            {
                var codeType = await _unitOfWork.CodeTypes.GetByIdAsync(codeTypeId);
                if (codeType == null)
                    return ApiResponse<CodeTypeSequenceDto>.NotFound("Code Type not found");

                var entity = await _unitOfWork.CodeTypeSequences
                    .FirstOrDefaultAsync(x => x.CodeTypeId == codeTypeId);
                if (entity == null)
                    return ApiResponse<CodeTypeSequenceDto>.NotFound("Code Type Sequence not found for this Code Type");

                var dto = _mapper.Map<CodeTypeSequenceDto>(entity);
                return ApiResponse<CodeTypeSequenceDto>.Success(dto);
            }
            catch (Exception ex)
            {
                return ApiResponse<CodeTypeSequenceDto>.InternalServerError(ex.Message);
            }
        }

        public async Task<ApiResponse<CodeTypeSequenceDto>> UpdateAsync(int id, UpdateCodeTypeSequenceDto dto)
        {
            try
            {
                var entity = await _unitOfWork.CodeTypeSequences.GetByIdAsync(id);
                if (entity == null)
                    return ApiResponse<CodeTypeSequenceDto>.NotFound("Code Type Sequence not found");

                if (dto.MinValue >= dto.MaxValue)
                    return ApiResponse<CodeTypeSequenceDto>.BadRequest("MinValue must be less than MaxValue");

                if (dto.StartWith < dto.MinValue || dto.StartWith > dto.MaxValue)
                    return ApiResponse<CodeTypeSequenceDto>.BadRequest("StartWith must be between MinValue and MaxValue");

                if (dto.CurrentValue < dto.MinValue || dto.CurrentValue > dto.MaxValue)
                    return ApiResponse<CodeTypeSequenceDto>.BadRequest("CurrentValue must be between MinValue and MaxValue");

                _mapper.Map(dto, entity);
                var result = await _unitOfWork.CodeTypeSequences.UpdateAsync(entity);
                var resultDto = _mapper.Map<CodeTypeSequenceDto>(result);

                return ApiResponse<CodeTypeSequenceDto>.Success(resultDto, "Code Type Sequence updated successfully");
            }
            catch (Exception ex)
            {
                return ApiResponse<CodeTypeSequenceDto>.InternalServerError(ex.Message);
            }
        }

        public async Task<ApiResponse<CodeTypeSequenceDto>> DeleteAsync(int id)
        {
            try
            {
                var entity = await _unitOfWork.CodeTypeSequences.GetByIdAsync(id);
                if (entity == null)
                    return ApiResponse<CodeTypeSequenceDto>.NotFound("Code Type Sequence not found");

                var result = await _unitOfWork.CodeTypeSequences.DeleteAsync(entity);
                if (!result)
                    return ApiResponse<CodeTypeSequenceDto>.BadRequest("Failed to delete Code Type Sequence");

                return ApiResponse<CodeTypeSequenceDto>.Success(null, "Code Type Sequence deleted successfully");
            }
            catch (Exception ex)
            {
                return ApiResponse<CodeTypeSequenceDto>.InternalServerError(ex.Message);
            }
        }

        public async Task<ApiResponse<object>> GetNextSequenceValueAsync(int codeTypeId)
        {
            try
            {
                var codeType = await _unitOfWork.CodeTypes.GetByIdAsync(codeTypeId);
                if (codeType == null)
                    return ApiResponse<object>.NotFound("Code Type not found");

                var sequence = await _unitOfWork.CodeTypeSequences
                    .FirstOrDefaultAsync(x => x.CodeTypeId == codeTypeId);
                if (sequence == null)
                    return ApiResponse<object>.NotFound("Code Type Sequence not found");

                var nextValue = sequence.CurrentValue + 1;

                if (nextValue > sequence.MaxValue)
                {
                    if (sequence.IsCycling > 0)
                    {
                        nextValue = sequence.MinValue + sequence.StartWith;
                    }
                    else
                    {
                        return ApiResponse<object>.BadRequest(
                            $"Sequence has reached its maximum value ({sequence.MaxValue}). Enable cycling to continue.");
                    }
                }

                string nextValueStr = nextValue.ToString();
                int nextLength = nextValueStr.Length;

                int zerosCount = sequence.IsCycling - nextLength;
                if (zerosCount < 0)
                    zerosCount = 0;

                string finalSequence = new string('0', zerosCount) + nextValueStr;

                sequence.CurrentValue = nextValue;
                await _unitOfWork.CodeTypeSequences.UpdateAsync(sequence);

                return ApiResponse<object>.Success(
                    new
                    {
                        value = nextValue,
                        formattedValue = finalSequence,
                        codeTypeId = codeTypeId
                    },
                    "Next sequence value retrieved successfully");
            }
            catch (Exception ex)
            {
                return ApiResponse<object>.InternalServerError(ex.Message);
            }
        }
    }
}