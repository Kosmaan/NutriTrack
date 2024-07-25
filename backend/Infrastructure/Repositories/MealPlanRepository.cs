using System.Collections.Generic;
using System.Data;
using Application.Interfaces;
using Dapper;
using Domain;
using Infrastructure.Interfaces;

namespace Infrastructure.Repositories
{
    public class MealPlanRepository : IMealPlanRepository
    {
        private readonly IDatabaseContext _databaseContext;
        public MealPlanRepository(IDatabaseContext databaseContext)
        {
            _databaseContext = databaseContext;
        }

        public bool AddMealPlan(MealPlan mealPlan, Guid id)
        {
            var query = "INSERT INTO [SummerPractice].[Meal_Plan] ([Meal_Plan_Id], [Description], [Title]) VALUES (@Meal_Plan_Id, @Description, @Title)";
            var parameters = new DynamicParameters();

            parameters.Add("Meal_Plan_Id", id, DbType.Guid);
            parameters.Add("Description", mealPlan.Description, DbType.String);
            parameters.Add("Title", mealPlan.Title, DbType.String);

            var connection = _databaseContext.GetDbConnection();
            var result = connection.Execute(query, parameters, _databaseContext.GetDbTransaction());

            return result != 0;
        }

        public MealPlan GetMealPlan(Guid id)
        {
            var query = "SELECT * FROM [SummerPractice].[Meal_Plan] WHERE [Meal_Plan_Id] = @Meal_Plan_Id";
            var parameters = new DynamicParameters();

            parameters.Add("Meal_Plan_Id", id, DbType.Guid);

            var connection = _databaseContext.GetDbConnection();
            var result = connection.Query<MealPlan>(query, parameters);

            return result.FirstOrDefault();
        }

        public IEnumerable<MealPlan> GetAllMealPlans()
        {
            var query = "SELECT * FROM [SummerPractice].[Meal_Plan]";
            var connection = _databaseContext.GetDbConnection();
            var result = connection.Query<MealPlan>(query);
            return result;
        }

        public bool DeleteMealPlan(Guid id)
        {
            var query = "DELETE FROM [SummerPractice].[Meal_Plan] WHERE [Meal_Plan_Id] = @Meal_Plan_Id";
            var parameters = new DynamicParameters();

            parameters.Add("Meal_Plan_Id", id, DbType.Guid);

            var connection = _databaseContext.GetDbConnection();
            var result = connection.Execute(query, parameters);

            return result != 0;
        }

        public bool UpdateMealPlan(MealPlan mealPlan)
        {
            var query = "UPDATE [SummerPractice].[Meal_Plan] SET [Description] = @Description, [Title] = @Title WHERE [Meal_Plan_Id] = @Meal_Plan_Id";
            var parameters = new DynamicParameters();

            parameters.Add("Meal_Plan_Id", mealPlan.Meal_Plan_Id, DbType.Guid);
            parameters.Add("Description", mealPlan.Description, DbType.String);
            parameters.Add("Title", mealPlan.Title, DbType.String);

            var connection = _databaseContext.GetDbConnection();
            var result = connection.Execute(query, parameters, _databaseContext.GetDbTransaction());

            return result != 0;
        }
    }
}