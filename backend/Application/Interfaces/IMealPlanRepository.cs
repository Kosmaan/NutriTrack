using Domain;
using WebApiContracts;

namespace Application.Interfaces
{
    public interface IMealPlanRepository
    {
        bool UpdateMealPlan(MealPlan mealPlan);
        bool UpdatePlanList(PlanList mealPlanList);
        bool AddMealPlan(MealPlan mealPlan, Guid id);
        IEnumerable<PlanList> GetDays(Guid id);
        IEnumerable<PlanList> GetAllDays();
        bool AddPlanList(List<PlanList> planList);
        MealPlan GetMealPlan(Guid id);
        bool DeleteMealPlan(Guid id);
       
        IEnumerable<MealPlan> GetAllMealPlans();
        
    }
}