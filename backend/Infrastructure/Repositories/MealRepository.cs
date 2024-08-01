using System.Data;
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


        public bool addMeal(Meal meal, Guid id)
        {
            var query = "INSERT INTO [SummerPractice].[Meal] ( [Meal_Id], [Title], [Description], [Calories], [Carbs], [Proteins], [Fats], [Published_Date]) VALUES (@Id, @Title, @Description, @Calories, @Carbs, @Proteins, @Fats, @Date)";
            var parameters = new DynamicParameters();
            parameters.Add("Id", id,DbType.Guid);
            parameters.Add("Title", meal.Title, DbType.String);
            parameters.Add("Description", meal.Description, DbType.String);
            parameters.Add("Calories", meal.Calories, DbType.Int16);
            parameters.Add("Carbs", meal.Carbs, DbType.Int16);
            parameters.Add("Proteins", meal.Proteins, DbType.Int16);
            parameters.Add("Fats", meal.Fats, DbType.Int16);
            parameters.Add("Date",DateTime.Now,DbType.DateTime);
            
            var connection = _databaseContext.GetDbConnection();
            var result = connection.Execute(query, parameters, _databaseContext.GetDbTransaction());

            var queryCategory = "INSERT INTO [SummerPractice].[Meal_Category] ( [Meal_id], [Category_id]) VALUES (@Id, @Category)";
            var parametersCategory = new DynamicParameters(); 
            parametersCategory.Add("Id", id,DbType.Guid);
            parametersCategory.Add("Category", meal.Category, DbType.Int16);

            var resultCategory = connection.Execute(queryCategory,parametersCategory, _databaseContext.GetDbTransaction());
            return result != 0 && resultCategory != 0;
        }

        public bool DeleteMeal(Guid id)
        {
            var queryMealCategory = "DELETE FROM  [SummerPractice].[Meal_Category] WHERE Meal_Id = @Id";
            var queryMeal = "DELETE FROM  [SummerPractice].[Meal] WHERE Meal_Id = @Id";
            var parameters = new DynamicParameters();
            parameters.Add("Id", id);

            var query = "SELECT * FROM [SummerPractice].[Plan_List] WHERE Meal_Id = @Id";
            var connection = _databaseContext.GetDbConnection();
            var planlist = connection.Execute(query, parameters, _databaseContext.GetDbTransaction());
            if (planlist == -1)
            {
                var result1 = connection.Execute(queryMealCategory, parameters, _databaseContext.GetDbTransaction());
                var result2 = connection.Execute(queryMeal, parameters, _databaseContext.GetDbTransaction());
                return result1 != 0 && result2 != 0;
            }
            else throw new Exception("Meal is curently in a meal plan");
            return false;
        }

        public IEnumerable<Meal> GetAllMeals()
        {
            var query = "SELECT m.Meal_Id, m.Title, m.Published_Date, m.Calories, m.Carbs, m.Proteins, m.Fats, m.Description, mc.Category_id FROM [SummerPractice].[Meal] AS m JOIN [SummerPractice].[Meal_Category] AS mc ON m.Meal_Id = mc.Meal_id";
            var connection = _databaseContext.GetDbConnection();
            var result = connection.Query<Meal>(query);
            return result;
        }

        public Meal GetMeal(Guid id)
        {
            var query = "SELECT m.Meal_Id, m.Title, m.Published_Date, m.Calories, m.Carbs, m.Proteins, m.Fats, m.Description, mc.Category_id FROM [SummerPractice].[Meal] AS m JOIN [SummerPractice].[Meal_Category] AS mc ON m.Meal_Id = mc.Meal_id WHERE Meal_Id = @Id";
            var parameters = new DynamicParameters();
            parameters.Add("Id", id);

            var connection = _databaseContext.GetDbConnection();
            var result = connection.Query<Meal>(query, parameters);
            return result.FirstOrDefault();
        }

        public bool UpdateMeal(Meal meal)
        {
            var query = "UPDATE [SummerPractice].[Meal] SET [Title] = @Title, [Description] = @Description, [Calories] = @Calories, [Carbs] = @Carbs, [Proteins] = @Proteins, [Fats] = @Fats, [Published_Date] = @Date WHERE Meal_Id = @Id ";
            var parameters = new DynamicParameters();

            parameters.Add("Id", meal.Meal_Id);
            parameters.Add("Title", meal.Title, DbType.String);
            parameters.Add("Description", meal.Description, DbType.String);
            parameters.Add("Calories", meal.Calories, DbType.Int16);
            parameters.Add("Carbs", meal.Carbs, DbType.Int16);
            parameters.Add("Proteins", meal.Proteins, DbType.Int16);
            parameters.Add("Fats", meal.Fats, DbType.Int16);
            parameters.Add("Date", DateTime.Now, DbType.DateTime);

            var connection = _databaseContext.GetDbConnection();
            var result = connection.Execute(query, parameters, _databaseContext.GetDbTransaction());
            return result != 0;

        }
    }
}
