using Microsoft.AspNetCore.Http;

namespace WebApiContracts
{
    public class MealDTO
    {
        public Guid id {  get; set; }
        public int Calories { get; set; }
        public int Carbs { get; set; }
        public int Fats { get; set; }
        public int Protein { get; set; }
        public String Title { get; set; }
        public String Description { get; set; }
        public int Category { get; set; }
        public string Photo {  get; set; }
        
        public IFormFile file { get; set; }
    }
}
