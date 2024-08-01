using System.Threading.Channels;

namespace Domain
{
    public class PlanList
    {
        public Guid Meal_Id { get; set; }
        public Guid Plan_Id { get; set; }
        public int Day {  get; set; }
        public int Meal_Time { get; set; }

        public PlanList(Guid meal_Id, Guid plan_Id, int day, int meal_time)
        {
            Meal_Id = meal_Id;
            Plan_Id = plan_Id;
            Day = day;
            Meal_Time = meal_time;
        }
    }
}
