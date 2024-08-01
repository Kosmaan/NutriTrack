namespace WebApiContracts
{
    public class DayDTO
    {
        public int Day { get; set; }
        public Guid Breakfast { get; set; }
        public Guid Lunch { get; set; }
        public Guid Dinner { get; set; }
    }
}


/*
[
  {
    "Day": 1,
    "Breakfast": "BA8B1C27-ECC4-4603-AC0B-12E85AC0A9CB",
    "Lunch": "9411A46D-6F2E-42D2-8104-34CBFEBF130B",
    "Dinner": "10E8BA7A-41C9-4175-A903-552D64EDCA44"
  },
  {
    "Day": 2,
    "Breakfast": "D178AC50-2A65-4462-8FA9-9F34BEEE824F",
    "Lunch": "95A4183B-0D96-4FFF-A4D2-BD0B688535FC",
    "Dinner": "55647245-C51F-4E88-8EBD-203623661117"
  }
]

 */