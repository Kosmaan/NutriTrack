﻿using Dapper;
using System.Data;

using Application.Interfaces;
using Domain;
using Infrastructure.Interfaces;
using Microsoft.AspNetCore.Components;
using System.Transactions;
using System.ComponentModel.DataAnnotations;

namespace Infrastructure.Repositories
{
    public class AuthenticationRepository : IAuthenticationRepository
    {
        private readonly IDatabaseContext _databaseContext;

        public AuthenticationRepository(IDatabaseContext databaseContext)
        {
            this._databaseContext = databaseContext;
        }

        public UserCredentials GetUserCredentials(string email)
        {
            var sql = "SELECT [User_id], [Password], [Email], [Role] FROM [SummerPractice].[User_Credentials] WHERE [Email] = @Email";

            var connection = _databaseContext.GetDbConnection();
            var parametersData = new DynamicParameters();
            parametersData.Add("Email", email, DbType.String);
            var users = connection.Query<UserCredentials>(sql, parametersData);
            return users.FirstOrDefault();
        }
        public UserCredentials GetUser(string email)
        {
            var sql = "SELECT [User_id], [Password], [Email], [Role] FROM [SummerPractice].[User_Credentials] WHERE [Email] = @Email";
            var parameters = new DynamicParameters();

            parameters.Add("Email", email, DbType.String);

            var connection = _databaseContext.GetDbConnection();
            var users = connection.Query<UserCredentials>(sql, parameters);
            return users.FirstOrDefault();
        }
        public bool RegisterUser(UserCredentials credentials, UserData data, UserWeight weight)
        {
            var query = "INSERT INTO [SummerPractice].[User_Credentials] ([Password], [Email], [Role]) VALUES (@Password, @Email, @Role)";
            var query2 = "INSERT INTO [SummerPractice].[User_Data] ([First_Name], [Last_Name], [Height], [Gender], [Birth_Date], [User_id]) VALUES (@First_Name, @Last_Name, @Height, @Gender, @Birth_Date, @User_id)";
            var query3 = "INSERT INTO [SummerPractice].[Weight] ([Weight], [User_id], [Measurement_Date]) VALUES (@Weight, @User_id, @date)";
            var parametersCredentials = new DynamicParameters();
            var parametersData = new DynamicParameters();
            var parametersWeight = new DynamicParameters();

            parametersCredentials.Add("Password", credentials.Password, DbType.String);
            parametersCredentials.Add("Email", credentials.Email, DbType.String);
            parametersCredentials.Add("Role", credentials.Role, DbType.String);

            var connection = _databaseContext.GetDbConnection();
            var result1 = connection.Execute(query, parametersCredentials, _databaseContext.GetDbTransaction());

            if (result1 == 0)
            {
                return false;
            }

            var User_id = GetUserCredentials(credentials.Email).User_Id;

            parametersData.Add("First_Name", data.First_Name, DbType.String);
            parametersData.Add("Last_Name", data.Last_Name, DbType.String);
            parametersData.Add("Height", data.Height, DbType.Int32);
            parametersData.Add("Gender", data.Gender, DbType.String);
            parametersData.Add("Birth_Date", data.Birth_Date, DbType.Date);
            parametersData.Add("User_id", User_id, DbType.Guid);

            var result2 = connection.Execute(query2, parametersData, _databaseContext.GetDbTransaction());

            if (result2 == 0)
            {
                return false;
            }
            var date = DateTime.Now;
            parametersWeight.Add("Weight", weight.Weight, DbType.Decimal);
            parametersWeight.Add("User_id", User_id, DbType.Guid);
            parametersWeight.Add("date", date, DbType.Date);

            var result3 = connection.Execute(query3, parametersWeight, _databaseContext.GetDbTransaction());

            return result3 != 0;
        }

        public bool GiveUserAdminRights(string email)
        {
            var sql = "UPDATE [SummerPractice].[User_Credentials] SET [Role] = 'admin' WHERE [Email] = @Email";

            var connection = _databaseContext.GetDbConnection();
            var result = connection.Execute(sql, new { Email = email });
            return result != 0;
        }

        public bool ChangePassword(Guid User_Id, string Password)
        {
            var query = "UPDATE [SummerPractice].[User_Credentials] SET [Password] = @Password WHERE [User_id] = @User_Id";

            var parameters = new DynamicParameters();

            parameters.Add("User_id", User_Id, DbType.Guid);
            parameters.Add("Password", Password, DbType.String);

            var connection = _databaseContext.GetDbConnection();
            var result = connection.Execute(query, parameters);

            return result != 0;
        }

        public bool ChangeDetails(Guid User_id, ChangeDetails details)
        {
            var queryEmail = "UPDATE [SummerPractice].[User_Credentials] SET [Email] = @NewEmail WHERE [User_id] = @User_Id";
            var queryDetails = "UPDATE [SummerPractice].[User_Data] SET [First_Name] = @First_Name, [Last_Name] = @Last_Name, [Height] = @Height WHERE [User_id] = @User_Id";

            var parametersEmail = new DynamicParameters();
            var parametersDetails = new DynamicParameters();

            parametersEmail.Add("User_Id", User_id, DbType.Guid);
            parametersEmail.Add("NewEmail", details.NewEmail, DbType.String);

            parametersDetails.Add("User_Id", User_id, DbType.Guid);
            parametersDetails.Add("First_Name", details.First_Name, DbType.String);
            parametersDetails.Add("Last_Name", details.Last_Name, DbType.String);
            parametersDetails.Add("Height", details.Height, DbType.String);

            var connection = _databaseContext.GetDbConnection();

            var result1 = connection.Execute(queryEmail, parametersEmail);
            var result2 = connection.Execute(queryDetails, parametersDetails);

            return result1 != 0 && result2 != 0;
        }

        public bool DeleteUser(Guid User_id)
        {
            var queryCredentials = "DELETE FROM [SummerPractice].[User_Credentials] WHERE [User_Id] = @User_id";
            var queryData = "DELETE FROM [SummerPractice].[User_Data] WHERE [User_Id] = @User_id";
            var queryWeight = "DELETE FROM [SummerPractice].[Weight] WHERE [User_Id] = @User_id";

            var parameters = new DynamicParameters();

            parameters.Add("User_Id", User_id, DbType.Guid);

            var connection = _databaseContext.GetDbConnection();

            var resultWeight = connection.Execute(queryWeight, parameters);
            var resultData = connection.Execute(queryData, parameters);
            var resultCredentials = connection.Execute(queryCredentials, parameters);

            return resultWeight != 0 && resultData != 0 && resultCredentials != 0;
        }

        public bool ChangeCurrentPlan(Guid Plan_id, String email)
        {

            var queryDetails = "UPDATE [SummerPractice].[User_Data] SET [Current_Plan] = @PlanId WHERE [User_id] = @User_Id";

            var parametersEmail = new DynamicParameters();
            var parametersDetails = new DynamicParameters();
            var id = GetUserCredentials(email).User_Id;
            parametersDetails.Add("User_Id", id , DbType.Guid);
            parametersDetails.Add("PlanId", Plan_id, DbType.Guid);

            var connection = _databaseContext.GetDbConnection();

            var result = connection.Execute(queryDetails, parametersDetails);

            return result != 0;
        }

        public UserData GetUserData(string email)
        {
            var sql = "SELECT * FROM [SummerPractice].[User_Data] WHERE [User_Id] = @User_Id";

            var connection = _databaseContext.GetDbConnection();
            var parametersDetails = new DynamicParameters();

            parametersDetails.Add("User_Id", GetUserCredentials(email).User_Id, DbType.Guid);
             

            var result = connection.Query<UserData>(sql, parametersDetails);
            return result.FirstOrDefault();
        }

        public IEnumerable<UserWeight> GetUserWeight(string email)
        {
            var sql = "SELECT * FROM [SummerPractice].[Weight] WHERE [User_id] = @User_Id";

            var connection = _databaseContext.GetDbConnection();
            var parametersDetails = new DynamicParameters();
            var id = GetUserCredentials(email).User_Id;
            parametersDetails.Add("User_Id", id, DbType.Guid);


            var result = connection.Query<UserWeight>(sql, parametersDetails);
            return result;
        }

        public bool AddUserWeight(UserWeight weight)
        {
            var query = "INSERT INTO [SummerPractice].[Weight] ([Weight], [Measurement_Date], [User_Id]) VALUES (@Weight, @Measurement_Date, @User_Id)";
           
  
            var parameters= new DynamicParameters();
            

            parameters.Add("Weight", weight.Weight, DbType.Int16);
            parameters.Add("Measurement_Date", weight.Measurement_Date, DbType.Date);
            parameters.Add("User_Id", weight.User_Id, DbType.Guid);

            var connection = _databaseContext.GetDbConnection();
            var result1 = connection.Execute(query, parameters, _databaseContext.GetDbTransaction());
            return result1 != 0;
        }
        public bool ContactUs(ContactUs contact)
        {
            var query = "INSERT INTO [SummerPractice].[Contact_us] ([Email], [First_Name], [Last_Name], [Phone_Number], [Description]) VALUES (@Email, @First_name, @Last_Name, @Phone_Number, @Description)";
            var parameters = new DynamicParameters();

            parameters.Add("Email", contact.Email, DbType.String);
            parameters.Add("First_Name", contact.First_Name, DbType.String);
            parameters.Add("Last_Name", contact.Last_Name, DbType.String);
            parameters.Add("Phone_Number", contact.Phone_Number, DbType.String);
            parameters.Add("Description", contact.Description, DbType.String);

            var connection = _databaseContext.GetDbConnection();
            var result = connection.Execute(query, parameters);

            return result != 0;
        }
    }
}