using Application.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


using Domain;
using WebApiContracts;
using WebApiContracts.Mappers;
namespace Application.Services
{
    public class MealService
    {

        private IMealRepository _mealRepository;
        public MealService(IMealRepository mealRepository) 
        {
            _mealRepository = mealRepository;
        }

        public async Task<bool> addMeal(Meal meal)
        {
            return await _mealRepository.addMeal(meal);
        }

        public async Task<bool> UpdateMeal(MealDTO meal)
        {
            return await _mealRepository.UpdateMeal(meal.ToEntity());
       
        }

        public async Task<MealDTO> GetMealById(Guid id)
        {
            var meal = await _mealRepository.GetMeal(id);

            var mealDTO = meal.ToDTO();

            return mealDTO;

        }

        public async Task<IEnumerable<MealDTO>> GetAllMeals()
        {
            var meals  = await _mealRepository.GetAllMeals();
            return meals.Select(x => x.ToDTO());

        }
        public async Task<bool> DeleteMeal(Guid id)
        {
            return await _mealRepository.DeleteMeal(id);
        }
    }
}
