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
        public MealController(MealService mealService)
        {
            _mealService = mealService;
        }

      

        [HttpPost]
        [AllowAnonymous]
        public async Task<bool> AddMeal([FromBody] MealDTO meal)
        {
            return await _mealService.addMeal(meal.ToEntity());
        }
    }
}