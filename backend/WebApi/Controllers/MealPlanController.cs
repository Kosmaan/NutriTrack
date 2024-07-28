using Application.Services;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WebApiContracts;
using WebApiContracts.Mappers;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class MealPlanController : Controller
    {
        private readonly MealPlanService _mealPlanService;
        private readonly FileService _fileService;

        public MealPlanController(MealPlanService mealPlanService, FileService fileService)
        {
            _mealPlanService = mealPlanService;
            _fileService = fileService;
        }

        [HttpPost]
        [AllowAnonymous]
        public bool AddMealPlan([FromForm] MealPlanDTO mealPlan)
        {
            Guid id = Guid.NewGuid();
            _fileService.SaveFile(mealPlan.Photo, id);
            return _mealPlanService.AddMealPlan(mealPlan, id);
        }

        [HttpGet]
        [AllowAnonymous]
        public MealPlanSend GetMealPlanById([FromQuery] Guid id)
        {
            return _mealPlanService.GetMealPlan(id);
        }

        [HttpGet]
        [AllowAnonymous]
        public IEnumerable<MealPlanSend> GetAllMealPlans()
        {
            return _mealPlanService.GetAllMealPlans();
        }

        [HttpDelete]
        [AllowAnonymous]
        public bool DeleteMealPlanById([FromQuery] Guid id)
        {
            return _mealPlanService.DeleteMealPlan(id);
        }

        [HttpPut]
        [AllowAnonymous]
        public bool UpdateMeal([FromForm] MealPlanDTO mealPlan)
        {
            _fileService.UpdateFile(mealPlan.Photo, mealPlan.Meal_Plan_Id);
            return _mealPlanService.UpdateMealPlan(mealPlan);
        }
    }
}