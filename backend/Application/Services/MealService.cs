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

        public bool addMeal(Meal meal,Guid id)
        {
           
            return _mealRepository.addMeal(meal, id);
        }

        public bool UpdateMeal(MealDTO meal)
        {
            return _mealRepository.UpdateMeal(meal.ToEntity());
       
        }

        public MealDTO GetMealById(Guid id)
        {
            var meal = _mealRepository.GetMeal(id);
            var file = _fileRepository.GetFile(id.ToString().ToUpper());
            var mealDTO = meal.ToDTO();
            mealDTO.Photo = file.FirstOrDefault().Path;

            return mealDTO;

        }

        public IEnumerable<MealDTO> GetAllMeals()
        {
            var meals  = _mealRepository.GetAllMeals();
            return meals.Select(x => x.ToDTO());

        }
        public bool DeleteMeal(Guid id)
        {
            return _mealRepository.DeleteMeal(id);
        }
    }
}
