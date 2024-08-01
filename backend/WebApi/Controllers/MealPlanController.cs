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
        [Authorize(Policy = IdentityData.AdminUserPolicyName)]
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

        [HttpGet]
        [AllowAnonymous]
        public IEnumerable<Category> GetPlanCategories([FromQuery] Guid plan_id)
        {
            return _mealPlanService.GetPlanCategories(plan_id);
        }

        [HttpDelete]
        [Authorize(Policy = IdentityData.AdminUserPolicyName)]
        public bool DeleteMealPlanById([FromQuery] Guid id)
        {
            return _mealPlanService.DeleteMealPlan(id);
        }

        [HttpPut]
        [Authorize(Policy = IdentityData.AdminUserPolicyName)]
        public bool UpdateMeal([FromForm] MealPlanDTO mealPlan)
        {
            
            _fileService.UpdateFile(mealPlan.Photo, mealPlan.Meal_Plan_Id);
            return _mealPlanService.UpdateMealPlan(mealPlan);
        }
    }
}