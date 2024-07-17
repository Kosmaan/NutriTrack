using Application.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


using Domain;
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
    }
}
