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
        public async Task<bool> AddMeal([FromForm] MealDTO meal)
        {
            _fileService.SaveFile(meal.file);
           return await _mealService.addMeal(meal.ToEntity());
        }


        [HttpPost]
        [AllowAnonymous]
        public async Task<MealDTO> GetMealById([FromQuery] Guid id)
        {
            return await _mealService.GetMealById(id);
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<IEnumerable<MealDTO>> GetAllMeals()
        {
            return await _mealService.GetAllMeals();
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<bool> UpdateMeal([FromBody] MealDTO dto)
        {
            return await _mealService.UpdateMeal(dto);
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<bool> DeleteMeal([FromQuery] Guid id)
        {
            return await _mealService.DeleteMeal(id);
        }
    }
}