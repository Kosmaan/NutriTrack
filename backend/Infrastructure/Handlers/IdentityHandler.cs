using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

using Application.Interfaces;
using Domain;

namespace Infrastructure.Handlers
{
    public class IdentityHandler: IIdentityHandler
    {
        private readonly IConfiguration _configuration;
        private const int TokenLifetime = 15;

        public IdentityHandler(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public string GenerateToken(User user)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var now = DateTime.Now;
            var expiry = DateTime.Now.AddMinutes(TokenLifetime);

            var jwtBearerAuthenticatedClient = new JwtBearerClient
            {
                IsAuthenticated = true,
                AuthenticationType = JwtBearerDefaults.AuthenticationScheme,
                Name = "SummerPracticeAC"
            };

            var token = tokenHandler.WriteToken(tokenHandler.CreateToken(new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(jwtBearerAuthenticatedClient, new List<Claim>
                {
                    new(JwtRegisteredClaimNames.Name, "SummerPracticeAC"),
                    new("admin",user.Role == "admin" ? "true" : "false")
                }),
                Expires = expiry,
                Issuer = _configuration.GetSection("JwtSettings:Issuer").Value!,
                Audience = _configuration.GetSection("JwtSettings:Audience").Value!,
                SigningCredentials = new SigningCredentials
                (
                    new SymmetricSecurityKey(Encoding.UTF8.GetBytes(this._configuration.GetSection("JwtSettings:SecurityKey").Value!)), 
                    SecurityAlgorithms.HmacSha512Signature
                ),
                IssuedAt = now,
                NotBefore = now
            }));
            return token;
        }
    }
}
