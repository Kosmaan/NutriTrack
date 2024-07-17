using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Application;
using Application.Interfaces;
using Dapper;

using Domain;
using Infrastructure.Interfaces;
namespace Infrastructure.Repositories
{
    public class MealRepository : IMealRepository
    {
        private readonly IDatabaseContext _databaseContext;
        public MealRepository(IDatabaseContext databaseContext)  
        {
            this._databaseContext = databaseContext;
        }
        



        public async Task<bool> addMeal(Meal meal)
        {
            var query = "INSERT INTO [SummerPractice].[Meal] ([Title], [Description], [Carbs], [Proteins], [Fats], [Published_Date]) VALUES (@Title, @Description, @Carbs, @Proteins, @Fats, @Date)";
            var parameters = new DynamicParameters();

            parameters.Add("Title", meal.Title, DbType.String);
            parameters.Add("Description", meal.Description, DbType.String);
            parameters.Add("Carbs", meal.Carbo, DbType.Int16);
            parameters.Add("Proteins", meal.Protein, DbType.Int16);
            parameters.Add("Fats", meal.Fats, DbType.Int16);
            parameters.Add("Date",DateTime.Now,DbType.DateTime);
         
            var connection = _databaseContext.GetDbConnection();
            var result = await connection.ExecuteAsync(query, parameters, _databaseContext.GetDbTransaction());
            return result != 0;
        }
    }
}
