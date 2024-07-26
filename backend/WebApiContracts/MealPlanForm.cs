using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Nodes;
using System.Threading.Tasks;

namespace WebApiContracts
{
    public class MealPlanForm
    {
        public Guid Meal_Plan_Id { get; set; }
        public string? Description { get; set; }
        public string? Title { get; set; }
        public IFormFile? Photo { get; set; }
        public IEnumerable<DayDTO> MealsJSON { get; set; }
    }
}
