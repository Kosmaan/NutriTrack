using Application.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


using Domain;
using WebApiContracts;
using WebApiContracts.Mappers;
using Microsoft.AspNetCore.Http;
namespace Application.Services
{
    public class MealService
    {

        private IMealRepository _mealRepository;
        private IFileRepository _fileRepository;

        public MealService(IMealRepository mealRepository, IFileRepository fileRepository) 
        {
            _mealRepository = mealRepository;
            _fileRepository = fileRepository;
        }

        public async Task<bool> addMeal(Meal meal,Guid id)
        {
           
            return await _mealRepository.addMeal(meal, id);
        }

        public async Task<bool> UpdateMeal(MealDTO meal)
        {
            return await _mealRepository.UpdateMeal(meal.ToEntity());
       
        }

        public async Task<MealDTO> GetMealById(Guid id)
        {
            var meal = await _mealRepository.GetMeal(id);
            var file = _fileRepository.GetFile(id.ToString().ToUpper());
            var mealDTO = meal.ToDTO();
            mealDTO.Photo = file.Result.FirstOrDefault().Path;

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
