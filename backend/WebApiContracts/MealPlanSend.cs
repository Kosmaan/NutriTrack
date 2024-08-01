using Microsoft.AspNetCore.Http;

namespace WebApiContracts
{
    public class MealPlanSend
    {
        public Guid Meal_Plan_Id { get; set; }
        public string? Description { get; set; }
        public string? Title { get; set; }
        public string? Photo { get; set; }
        public List<DayDTO>? Meals { get; set; }
    }
}