using Domain;

namespace WebApiContracts.Mappers
{
    public static class MealMapper
    {
        public static Meal ToEntity(this MealDTO dto)
        {
            return new Meal
            {
                Meal_Id = dto.id,
                Calories = dto.Calories,
                Carbs = dto.Carbs,
                Fats = dto.Fats,
                Protein = dto.Protein,
                Title = dto.Title,
                Description = dto.Description,
                Category = dto.Category,
                };
        }

        public static MealDTO ToDTO(this Meal entity)
        {
            return new MealDTO
            {
                id = entity.Meal_Id,
                Calories = entity.Calories,
                Carbs = entity.Carbs,
                Fats = entity.Fats,
                Protein = entity.Protein,
                Title = entity.Title,
                Description = entity.Description,
                Category = entity.Category,
                
            };
        }

    }
}
