using Domain;
using System.Runtime.CompilerServices;

namespace WebApiContracts.Mappers
{
    public static class ChangeDetailsDTOMapper
    {
        public static ChangeDetails ToEntity(this ChangeDeatilsDTO dto)
        {
            return new ChangeDetails
            {
                First_Name = dto.First_Name,
                Last_Name = dto.Last_Name,
                Height = dto.Height,
                NewEmail = dto.NewEmail,
                OldEmail = dto.OldEmail
            };
        }
    }
}
