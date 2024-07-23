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

        public static UserData ToUserData(this SignupDTO dto)
        {
            return new UserData
            {
                First_Name = dto.First_Name,
                Last_Name = dto.Last_Name,
                Height = dto.Height,
                Gender = dto.Gender,
                Birth_Date = dto.BirthDay,
            };
        }
        public static UserWeight ToUserWeight(this SignupDTO dto)
        {
            return new UserWeight
            {
                Weight = dto.Weight,
            };
        }
    }
}
