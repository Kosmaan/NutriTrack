using Domain;

namespace Application.Interfaces
{
    public interface IMealPlanRepository
    {
        bool AddMealPlan(MealPlan mealPlan, Guid id);
        bool AddPlanList(List<PlanList> planList);
        MealPlan GetMealPlan(Guid id);
        bool DeleteMealPlan(Guid id);
        bool UpdateMealPlan(MealPlan mealPlan);
        IEnumerable<MealPlan> GetAllMealPlans();
    }
}