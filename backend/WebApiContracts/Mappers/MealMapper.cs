using Domain;

namespace WebApiContracts.Mappers
{
    public static class MealMapper
    {

        public static Meal   ToEntity(this MealDTO dto)
        {
            return new Meal
            {

                Calories = dto.Calories,
                Carbo = dto.Carbo,
                Fats = dto.Fats,
                Protein = dto.Protein,
                Title = dto.Title,
                Description = dto.Description,
                Category = dto.Category,
                };
        } 

    }
}
