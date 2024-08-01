namespace Domain
{
    public class UserData
    {
        public string First_Name { get; set; }
        public string Last_Name { get; set; }
        public string Gender { get; set; }
        public DateTime Birth_Date { get; set; }
        public int Height { get; set; }

        public Guid User_id { get; set; }

        public Guid Current_Plan {  get; set; }
    }
}
