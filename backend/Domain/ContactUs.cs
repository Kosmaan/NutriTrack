using System.ComponentModel.DataAnnotations;

namespace Domain
{
    public class ContactUs
    {
        public string Email { get; set; }
        public string First_Name { get; set; }
        public string Last_Name { get; set; }
        public string Phone_Number { get; set; }
        public string Description { get; set; }
    }
}
