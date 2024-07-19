﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;
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

        public async Task<bool> DeleteMeal(Guid id)
        {
            var query = "DELETE FROM  [SummerPractice].[Meal] WHERE Meal_Id = @Id";
            var parameters = new DynamicParameters();
            parameters.Add("Id", id);

            var connection = _databaseContext.GetDbConnection();
            var result = await connection.ExecuteAsync(query, parameters, _databaseContext.GetDbTransaction());
            return result != 0;
        }

        public async Task<IEnumerable<Meal>> GetAllMeals()
        {
            var query = "SELECT * FROM [SummerPractice].[Meal]";
            var connection = _databaseContext.GetDbConnection();
            var result = await connection.QueryAsync<Meal>(query);
            return result;
        }

        public async Task<Meal> GetMeal(Guid id)
        {
            var query = "SELECT * FROM [SummerPractice].[Meal] WHERE Meal_Id = @Id";
            var parameters = new DynamicParameters();
            parameters.Add("Id", id);

            var connection = _databaseContext.GetDbConnection();
            var result = await connection.QueryAsync<Meal>(query, parameters);
            return result.FirstOrDefault();
        }

        public async Task<bool> UpdateMeal(Meal meal)
        {
            var query = "UPDATE [SummerPractice].[Meal] SET [Title] = @Title, [Description] = @Description, [Carbs] = @Carbs, [Proteins] = @Proteins, [Fats] = @Fats, [Published_Date] = @Date WHERE Meal_Id = @Id ";
            var parameters = new DynamicParameters();

            parameters.Add("Id", meal.Meal_Id);
            parameters.Add("Title", meal.Title, DbType.String);
            parameters.Add("Description", meal.Description, DbType.String);
            parameters.Add("Carbs", meal.Carbo, DbType.Int16);
            parameters.Add("Proteins", meal.Protein, DbType.Int16);
            parameters.Add("Fats", meal.Fats, DbType.Int16);
            parameters.Add("Date", DateTime.Now, DbType.DateTime);

            var connection = _databaseContext.GetDbConnection();
            var result = await connection.ExecuteAsync(query, parameters, _databaseContext.GetDbTransaction());
            return result != 0;

        }
    }
}
