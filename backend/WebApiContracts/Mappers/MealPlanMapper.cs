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

        public static MealPlanSend ToSend(MealPlan plan, IEnumerable<PlanList> days, string photo)
        {
           
            var dayDTOs = days
            .GroupBy(pl => pl.Day)
            .Select(g => new WebApiContracts.DayDTO
            {
                Day = g.Key,
                Breakfast = g.FirstOrDefault(pl => pl.Meal_Time == 1)?.Meal_Id ?? Guid.Empty,
                Lunch = g.FirstOrDefault(pl => pl.Meal_Time == 2)?.Meal_Id ?? Guid.Empty,
                Dinner = g.FirstOrDefault(pl => pl.Meal_Time == 3)?.Meal_Id ?? Guid.Empty
            }).ToList();
            return new MealPlanSend
            {
                Meal_Plan_Id = plan.Meal_Plan_Id,
                Description = plan.Description,
                Title = plan.Title,
                Photo = photo,
                Meals = dayDTOs
            };
        }

        public static List<MealPlanSend> ToSend(IEnumerable<MealPlan> mealPlans, IEnumerable<PlanList> planLists, IEnumerable<FileDetails> files)
        {

            var mealPlanSends = mealPlans.Select(mp => new WebApiContracts.MealPlanSend
            {
                Meal_Plan_Id = mp.Meal_Plan_Id,
                Description = mp.Description,
                Title = mp.Title,
                Photo = files.FirstOrDefault(fd => fd.FileName == mp.Meal_Plan_Id.ToString().ToUpper())?.Path,
                Meals = planLists
               .Where(pl => pl.Plan_Id == mp.Meal_Plan_Id)
               .GroupBy(pl => pl.Day)
               .Select(g => new WebApiContracts.DayDTO
               {
                   Day = g.Key,
                   Breakfast = g.FirstOrDefault(pl => pl.Meal_Time == 1)?.Meal_Id ?? Guid.Empty,
                   Lunch = g.FirstOrDefault(pl => pl.Meal_Time == 2)?.Meal_Id ?? Guid.Empty,
                   Dinner = g.FirstOrDefault(pl => pl.Meal_Time == 3)?.Meal_Id ?? Guid.Empty
               }).ToList()
            }).ToList();

            return mealPlanSends;
        }

        public static MealPlanDTO ToDTO(this MealPlan plan)
        {
            return new MealPlanDTO
            {
                Meal_Plan_Id = plan.Meal_Plan_Id,
                Description = plan.Description,
                Title = plan.Title,

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