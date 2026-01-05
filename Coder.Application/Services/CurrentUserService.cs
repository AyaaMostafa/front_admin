using Coder.Application.DTOs.Auth;
using Coder.Application.IServices;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Coder.Application.Services
{
    public class CurrentUserService : ICurrentUserService
    {
        private readonly IHttpContextAccessor _httpContextAccessor;
        private static string _currentUserId;
        private static string _currentUserName;
        private static string _currentToken;

        public CurrentUserService(IHttpContextAccessor httpContextAccessor)
        {
            _httpContextAccessor = httpContextAccessor;
        }

        public string GetUserId()
        {
            // Try to get from claims first
            var claim = _httpContextAccessor?.HttpContext?.User?.FindFirst("UserId");
            if (!string.IsNullOrEmpty(claim?.Value))
                return claim.Value;

            // Fall back to stored value
            return _currentUserId;
        }

        public string GetUserName()
        {
            var claim = _httpContextAccessor?.HttpContext?.User?.FindFirst("UserCode");
            if (!string.IsNullOrEmpty(claim?.Value))
                return claim.Value;

            return _currentUserName;
        }

        public string GetToken()
        {
            var authHeader = _httpContextAccessor?.HttpContext?.Request?.Headers["Authorization"].ToString();
            if (!string.IsNullOrEmpty(authHeader) && authHeader.StartsWith("Bearer "))
                return authHeader.Substring("Bearer ".Length).Trim();

            return _currentToken;
        }

        public void SetUserContext(AuthTokenResponse authResponse)
        {
            _currentUserId = authResponse.UserCode;
            _currentUserName = authResponse.EmployeeName;
            _currentToken = authResponse.Token;
        }
    }
}