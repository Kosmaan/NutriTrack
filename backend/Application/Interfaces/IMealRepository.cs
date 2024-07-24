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
        bool addMeal(Meal meal, Guid id);
        Meal GetMeal(Guid id);
        bool DeleteMeal(Guid id);
        bool UpdateMeal(Meal meal);
        IEnumerable<Meal> GetAllMeals();

    }
}
