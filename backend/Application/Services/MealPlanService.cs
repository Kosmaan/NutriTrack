using Application.Interfaces;
using Domain;
using WebApiContracts;
using WebApiContracts.Mappers;

namespace Application.Services
{
    public class MealPlanService
    {
        private IMealPlanRepository _mealPlanRepository;

        public MealPlanService(IMealPlanRepository mealPlanRepository)
        {
            _mealPlanRepository = mealPlanRepository;
        }

        public bool AddMealPlan(MealPlanDTO mealPlanDTO, Guid id)
        {
            var result1 = _mealPlanRepository.AddMealPlan(mealPlanDTO.ToEntity(), id);
            var result2 = _mealPlanRepository.AddPlanList(mealPlanDTO.ToPlanList(id));
            return result1 && result2;
        }

        public MealPlanDTO GetMealPlan(Guid id)
        {
            var mealPlan = _mealPlanRepository.GetMealPlan(id);
            var mealPlanDTO = mealPlan.ToDTO();

            return mealPlanDTO;
        }

        public bool DeleteMeal(Guid id)
        {
            return _mealPlanRepository.DeleteMealPlan(id);
        }

        public IEnumerable<MealPlanDTO> GetAllMealPlans()
        {
            var mealPlans = _mealPlanRepository.GetAllMealPlans();
            return mealPlans.Select(mealPlan => mealPlan.ToDTO());
        }

        public bool UpdateMealPlan(MealPlanDTO mealPlan)
        {
            return _mealPlanRepository.UpdateMealPlan(mealPlan.ToEntity());
        }
    }
}