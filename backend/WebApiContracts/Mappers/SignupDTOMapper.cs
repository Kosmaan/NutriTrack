using Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebApiContracts.Mappers
{
    public static class SignupDTOMapper
    {
        public static UserCredentials ToUserCredentials(this SignupDTO dto)
        {
            return new UserCredentials
            {
                Email = dto.Email,
                Password = dto.Password,
                Role = "user"
            };
        }
    }
}
