using Domain;

namespace Application.Interfaces
{
    public interface IMealPlanRepository
    {
        bool AddMealPlan(MealPlan mealPlan, Guid id);
        MealPlan GetMealPlan(Guid id);
        bool DeleteMealPlan(Guid id);
        bool UpdateMealPlan(MealPlan mealPlan);
        IEnumerable<MealPlan> GetAllMealPlans();
    }
}