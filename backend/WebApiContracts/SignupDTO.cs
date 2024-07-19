using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebApiContracts
{
    public  class SignupDTO
    {
        public string Email { get; set; }
        public string Password { get; set; }
        public String Gender   { get; set; }
        public DateOnly BirthDay { get; set; }
        public int Height { get; set; }
        public int Weight { get; set; }

    }
}
