USE [master]
GO
/****** Object:  Database [CentricSummerPractice]    Script Date: 7/19/2024 10:11:11 AM ******/
CREATE DATABASE [CentricSummerPractice]
GO
/****** Object:  Schema [SummerPractice]    Script Date: 7/19/2024 10:11:12 AM ******/
CREATE SCHEMA [SummerPractice]
GO
/****** Object:  Table [SummerPractice].[Category]    Script Date: 7/19/2024 10:11:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [SummerPractice].[Category](
	[category_id] [uniqueidentifier] NOT NULL,
	[category_string] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_Categories] PRIMARY KEY CLUSTERED 
(
	[category_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [SummerPractice].[file]    Script Date: 7/19/2024 10:11:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [SummerPractice].[file](
	[FileName] [nvarchar](50) NOT NULL,
	[Path] [nvarchar](250) NOT NULL,
 CONSTRAINT [PK_FileName] PRIMARY KEY CLUSTERED 
(
	[FileName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [SummerPractice].[Meal]    Script Date: 7/19/2024 10:11:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [SummerPractice].[Meal](
	[Meal_Id] [uniqueidentifier] NOT NULL,
	[Title] [nvarchar](50) NOT NULL,
	[Published_Date] [datetime] NOT NULL,
	[Carbs] [real] NOT NULL,
	[Proteins] [real] NOT NULL,
	[Fats] [real] NOT NULL,
	[Description] [nvarchar](200) NOT NULL,
	[Photo] [nvarchar](100) NULL,
 CONSTRAINT [PK_Meal] PRIMARY KEY CLUSTERED 
(
	[Meal_Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [SummerPractice].[MealCategory]    Script Date: 7/19/2024 10:11:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [SummerPractice].[MealCategory](
	[Meal_Id] [uniqueidentifier] NOT NULL,
	[Category_Id] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [SummerPractice].[MealPlan]    Script Date: 7/19/2024 10:11:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [SummerPractice].[MealPlan](
	[MealPlan_Id] [uniqueidentifier] NOT NULL,
	[Description] [nvarchar](300) NULL,
	[Title] [nvarchar](100) NULL,
	[Photo] [nvarchar](100) NULL,
 CONSTRAINT [PK_MealPlan] PRIMARY KEY CLUSTERED 
(
	[MealPlan_Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [SummerPractice].[PlanList]    Script Date: 7/19/2024 10:11:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [SummerPractice].[PlanList](
	[Meal_Id] [uniqueidentifier] NOT NULL,
	[Plan_Id] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [SummerPractice].[User_Credentials]    Script Date: 7/19/2024 10:11:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [SummerPractice].[User_Credentials](
	[User_id] [uniqueidentifier] NOT NULL,
	[Email] [nvarchar](50) NOT NULL,
	[Password] [nvarchar](256) NOT NULL,
	[Role] [nvarchar](50) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[User_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [SummerPractice].[User_Data]    Script Date: 7/19/2024 10:11:12 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [SummerPractice].[User_Data](
	[First_Name] [nvarchar](50) NULL,
	[Last_Name] [nvarchar](50) NULL,
	[Height] [int] NULL,
	[Gender] [nvarchar](50) NULL,
	[Birth_Date] [date] NULL,
	[User_id] [uniqueidentifier] NOT NULL,
 CONSTRAINT [PK_User_Data] PRIMARY KEY CLUSTERED 
(
	[User_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [SummerPractice].[Meal] ADD  DEFAULT (newid()) FOR [Meal_Id]
GO
ALTER TABLE [SummerPractice].[User_Credentials] ADD  DEFAULT (newid()) FOR [User_id]
GO
ALTER TABLE [SummerPractice].[MealCategory]  WITH CHECK ADD FOREIGN KEY([Category_Id])
REFERENCES [SummerPractice].[Category] ([category_id])
GO
ALTER TABLE [SummerPractice].[MealCategory]  WITH CHECK ADD FOREIGN KEY([Meal_Id])
REFERENCES [SummerPractice].[Meal] ([Meal_Id])
GO
ALTER TABLE [SummerPractice].[PlanList]  WITH CHECK ADD FOREIGN KEY([Meal_Id])
REFERENCES [SummerPractice].[Meal] ([Meal_Id])
GO
ALTER TABLE [SummerPractice].[PlanList]  WITH CHECK ADD FOREIGN KEY([Plan_Id])
REFERENCES [SummerPractice].[MealPlan] ([MealPlan_Id])
GO
ALTER TABLE [SummerPractice].[User_Data]  WITH CHECK ADD FOREIGN KEY([User_id])
REFERENCES [SummerPractice].[User_Credentials] ([User_id])
GO
USE [master]
GO
ALTER DATABASE [CentricSummerPractice] SET  READ_WRITE 
GO
