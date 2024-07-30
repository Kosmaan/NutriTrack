using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Application.Services;
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
        [Authorize(Policy = IdentityData.AdminUserPolicyName)]
        public bool AddMeal([FromForm] MealDTO meal)
        {
            Guid id = Guid.NewGuid();
            _fileService.SaveFile(meal.file, id);
            return _mealService.addMeal(meal.ToEntity(), id);
        }


        [HttpGet]
        [Authorize(Policy = IdentityData.AdminUserPolicyName)]
        public MealDTO GetMealById([FromQuery] Guid id)
        {
            return _mealService.GetMealById(id);
        }

        [HttpGet]
        [Authorize(Policy = IdentityData.AdminUserPolicyName)]
        public IEnumerable<MealDTO> GetAllMeals()
        {
            return _mealService.GetAllMeals();
        }

        [HttpPost]
        [Authorize(Policy = IdentityData.AdminUserPolicyName)]
        public bool UpdateMeal([FromForm] MealDTO dto)
        {
            return _mealService.UpdateMeal(dto);
        }

        [HttpDelete]
        [Authorize(Policy = IdentityData.AdminUserPolicyName)]
        public bool DeleteMeal([FromQuery] Guid id)
        {
            return _mealService.DeleteMeal(id);
        }
    }
}