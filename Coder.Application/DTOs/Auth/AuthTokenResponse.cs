using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Coder.Application.DTOs.Auth
{
    public class AuthTokenResponse
    {
        public string UserCode { get; set; }
        public string Token { get; set; }
        public List<string> Roles { get; set; }
        public Dictionary<string, string> Claims { get; set; }
        public DateTime? ExpiresOn { get; set; }
        public string EmployeeName { get; set; }
        public List<string> Permissions { get; set; }
        public int GenderId { get; set; }
    }
}
