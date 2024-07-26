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

        public static List<PlanList> ToPlanList(this MealPlanDTO mealPlanDTO, Guid id)
        {
            List<PlanList> meals = new List<PlanList>();
            foreach (var meal in mealPlanDTO.Meals)
            {
                PlanList newPlanList1 = new(meal.Breakfast, id, meal.Day, 1);
                PlanList newPlanList2 = new(meal.Lunch, id, meal.Day, 2);
                PlanList newPlanList3 = new(meal.Dinner, id, meal.Day, 3);
                meals.Add(newPlanList1);
                meals.Add(newPlanList2);
                meals.Add(newPlanList3);
            }
            return meals;
        }
    }
}