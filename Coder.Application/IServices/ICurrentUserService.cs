using Coder.Application.DTOs.Auth;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Coder.Application.IServices
{
    public interface ICurrentUserService
    {
        string GetUserId();
        string GetUserName();
        string GetToken();
        void SetUserContext(AuthTokenResponse authResponse);
    }
}
