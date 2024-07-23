using Dapper;
using System.Data;

using Application.Interfaces;
using Domain;
using Infrastructure.Interfaces;
using Microsoft.AspNetCore.Components;
using System.Transactions;

namespace Infrastructure.Repositories
{
    public class AuthenticationRepository: IAuthenticationRepository
    {
        private readonly IDatabaseContext _databaseContext;

        public AuthenticationRepository(IDatabaseContext databaseContext)
        {
            this._databaseContext = databaseContext;
        }

        public Task<IEnumerable<UserCredentials>> GetUser(string email)
        {
            var sql = "SELECT [User_id], [Password], [Email], [Role] FROM [SummerPractice].[User_Credentials] WHERE [Email] = @Email";

            var connection = _databaseContext.GetDbConnection();
            var users = connection.QueryAsync<UserCredentials>(sql, new {Email = email});
            return users;
        }

        public async Task<bool> RegisterUser(UserCredentials credentials, UserData data, UserWeight weight)
        {
            var query = "INSERT INTO [SummerPractice].[User_Credentials] ([Password], [Email], [Role]) VALUES (@Password, @Email, @Role)";
            var query2 = "INSERT INTO [SummerPractice].[User_Data] ([First_Name], [Last_Name], [Height], [Gender], [Birth_Date], [User_id]) VALUES (@First_Name, @Last_Name, @Height, @Gender, @Birth_Date, @User_id)";
            var query3 = "INSERT INTO [SummerPractice].[Weight] ([Weight], [User_id]) VALUES (@Weight, @User_id)";
            var parametersCredentials = new DynamicParameters();
            var parametersData = new DynamicParameters();
            var parametersWeight = new DynamicParameters();

            parametersCredentials.Add("Password", credentials.Password, DbType.String);
            parametersCredentials.Add("Email", credentials.Email, DbType.String);
            parametersCredentials.Add("Role", credentials.Role, DbType.String);

            var connection = _databaseContext.GetDbConnection();
            var result1 = await connection.ExecuteAsync(query, parametersCredentials, _databaseContext.GetDbTransaction());

            if (result1 == 0)
            {
                return false;
            }

            var User_id = GetUser(credentials.Email).Result.FirstOrDefault().User_Id;

            parametersData.Add("First_Name", data.First_Name, DbType.String);
            parametersData.Add("Last_Name", data.Last_Name, DbType.String);
            parametersData.Add("Height", data.Height, DbType.Int32);
            parametersData.Add("Gender", data.Gender, DbType.String);
            parametersData.Add("Birth_Date", data.Birth_Date, DbType.Date);
            parametersData.Add("User_id", User_id, DbType.Guid);

            var result2 = await connection.ExecuteAsync(query2, parametersData, _databaseContext.GetDbTransaction());

            if (result2 == 0)
            {
                return false;
            }

            parametersWeight.Add("Weight", weight.Weight, DbType.Decimal);
            parametersWeight.Add("User_id", User_id, DbType.Guid);

            var result3 = await connection.ExecuteAsync(query3, parametersWeight, _databaseContext.GetDbTransaction());

            return result3 != 0;
        }

        public async Task<bool> GiveUserAdminRights(string email)
        {
            var sql = "UPDATE [SummerPractice].[User_Credentials] SET [Role] = 'admin' WHERE [Email] = @Email";

            var connection = _databaseContext.GetDbConnection();
            var result = await connection.ExecuteAsync(sql, new { Email = email });
            return result != 0;
        }
    }
}
