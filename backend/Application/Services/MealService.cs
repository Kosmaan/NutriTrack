using Application.Interfaces;
using Domain;
using WebApiContracts;
using WebApiContracts.Mappers;
namespace Application.Services
{
    public class MealService
    {
        private readonly IMealRepository _mealRepository;
        private readonly IFileRepository _fileRepository;

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
            var mealCheck = _mealRepository.GetMeal(id);

            if (mealCheck == null)
            {
                throw new Exception("Meal doesn't exist!");
            }

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
            var mealCheck = _mealRepository.GetMeal(id);

            if (mealCheck == null)
            {
                throw new Exception("Meal doesn't exist!");
            }

            return _mealRepository.DeleteMeal(id);
        }
    }
}
