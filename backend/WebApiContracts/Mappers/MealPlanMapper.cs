using Domain;

namespace WebApiContracts.Mappers
{
    public static class MealPlanMapper
    {
        public static MealPlan ToEntity(this MealPlanDTO mealPlanDTO)
        {
            return new MealPlan
            {
                Meal_Plan_Id = mealPlanDTO.Meal_Plan_Id,
                Description = mealPlanDTO.Description,
                Title = mealPlanDTO.Title,
            };
        }

        public static MealPlanDTO ToDTO(this MealPlan entity)
        {
            return new MealPlanDTO
            {
                Meal_Plan_Id = entity.Meal_Plan_Id,
                Description = entity.Description,
                Title = entity.Title,
            };
        }
    }
}