using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain
{
    public  class Meal
    {
        public String id;
        public int Calories { get; set; }
        public int Carbo {  get; set; }
        public int Fats { get; set; }
        public int Protein  { get; set; }
        public String Title { get; set; }
        public String Description { get; set; }
        public int Category { get; set; }
        public DateTime Published_Date { get; set; }
        
    }
}
