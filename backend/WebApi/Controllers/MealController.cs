using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

using Application.Services;
using Domain;
using WebApiContracts;
using WebApiContracts.Mappers;
namespace WebApi.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class MealController : ControllerBase
    {
        private MealService _mealService;
        private FileService _fileService;
        public MealController(MealService mealService, FileService fileService)
        {
            _mealService = mealService;
            _fileService = fileService;
        }

      

        [HttpPost]
        [AllowAnonymous]
        public bool AddMeal([FromForm] MealDTO meal)
        {
            Guid id = Guid.NewGuid();
            _fileService.SaveFile(meal.file, id);
            return _mealService.addMeal(meal.ToEntity(), id);
        }


        [HttpGet]
        [AllowAnonymous]
        public MealDTO GetMealById([FromQuery] Guid id)
        {
            return _mealService.GetMealById(id);
        }

        [HttpGet]
        [AllowAnonymous]
        public IEnumerable<MealDTO> GetAllMeals()
        {
            return _mealService.GetAllMeals();
        }

        [HttpPost]
        [AllowAnonymous]
        public bool UpdateMeal([FromBody] MealDTO dto)
        {
            return _mealService.UpdateMeal(dto);
        }

        [HttpDelete]
        [AllowAnonymous]
        public bool DeleteMeal([FromQuery] Guid id)
        {
            return _mealService.DeleteMeal(id);
        }
    }
}