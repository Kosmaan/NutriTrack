using Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Interfaces
{
    public interface IMealRepository
    {
         Task<bool> addMeal(Meal meal);
         Task<Meal> GetMeal(Guid id);
        Task<bool> DeleteMeal(Guid id);
        Task<bool> UpdateMeal(Meal meal);
        Task<IEnumerable<Meal>> GetAllMeals();

    }
}
