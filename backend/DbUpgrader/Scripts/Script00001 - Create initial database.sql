CREATE DATABASE [CentricSummerPractice];
GO

USE [CentricSummerPractice];
GO

CREATE SCHEMA SummerPractice;
GO

CREATE TABLE [SummerPractice].[User_Credentials] (
	User_id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
	Email NVARCHAR(50) NOT NULL,
	Password NVARCHAR(256) NOT NULL,
	Role NVARCHAR(50) NOT NULL
);
GO

CREATE TABLE [SummerPractice].[User_Data] (
	First_Name NVARCHAR(50) NULL,
	Last_Name NVARCHAR(50) NULL,
	Height INT NULL,
	Gender NVARCHAR(50) NULL,
	Birth_Date DATE NULL,
	User_id UNIQUEIDENTIFIER PRIMARY KEY NOT NULL,
	FOREIGN KEY ([User_id]) REFERENCES [SummerPractice].[User_Credentials]([User_id])
);
GO

CREATE TABLE [SummerPractice].[Weight](
	Weight DECIMAL(10, 2) NOT NULL,
	Measurement_Date DATE NOT NULL,
	User_id UNIQUEIDENTIFIER NOT NULL,
	FOREIGN KEY ([User_id]) REFERENCES [SummerPractice].[User_Credentials]([User_id])
);
GO

CREATE TABLE [SummerPractice].[Meal](
	Meal_Id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
	Title NVARCHAR(50) NOT NULL,
	Published_Date DATETIME NOT NULL,
	Carbs REAL NOT NULL,
	Proteins REAL NOT NULL,
	Fats REAL NOT NULL,
	Description NVARCHAR(200) NOT NULL,
	Photo NVARCHAR(100) NULL
);
GO

CREATE TABLE [SummerPractice].[file](
	FileName NVARCHAR(50) PRIMARY KEY NOT NULL,
	Path NVARCHAR(250) NOT NULL
);
GO

CREATE TABLE [SummerPractice].[Category](
	Category_id UNIQUEIDENTIFIER PRIMARY KEY NOT NULL,
	Category_String NVARCHAR(50) NOT NULL
);
GO

CREATE TABLE [SummerPractice].[Meal_Category](
	Meal_id UNIQUEIDENTIFIER NOT NULL,
	Category_id UNIQUEIDENTIFIER NOT NULL,
	FOREIGN KEY ([Meal_id]) REFERENCES [SummerPractice].[Meal]([Meal_Id]),
	FOREIGN KEY ([Category_id]) REFERENCES [SummerPractice].[Category]([Category_id])
);
GO

CREATE TABLE [SummerPractice].[Meal_Plan](
	Meal_Plan_Id UNIQUEIDENTIFIER PRIMARY KEY NOT NULL,
	Description NVARCHAR(300) NOT NULL,
	Title NVARCHAR(100) NOT NULL,
	Photo NVARCHAR(100) NOT NULL
);
GO

CREATE TABLE [SummerPractice].[Plan_List](
	Meal_Id UNIQUEIDENTIFIER NOT NULL,
	Plan_Id UNIQUEIDENTIFIER NOT NULL,
	FOREIGN KEY ([Meal_Id]) REFERENCES [SummerPractice].[Meal]([Meal_Id]),
	FOREIGN KEY ([Plan_Id]) REFERENCES [SummerPractice].[Meal_Plan]([Meal_Plan_Id])
);
GO