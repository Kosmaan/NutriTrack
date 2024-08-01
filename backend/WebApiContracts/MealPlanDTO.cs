using Microsoft.AspNetCore.Http;

namespace WebApiContracts
{
    public class MealPlanDTO
    {
        public Guid Meal_Plan_Id { get; set; }
        public string? Description { get; set; }
        public string? Title { get; set; }
        public IFormFile? Photo { get; set; }
        public List<DayDTO>? Meals {  get; set; }
    }
}