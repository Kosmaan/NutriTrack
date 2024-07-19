USE [master]
GO
/****** Object:  Database [CentricSummerPractice]    Script Date: 7/19/2024 10:11:11 AM ******/
CREATE DATABASE [CentricSummerPractice]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'CentricSummerPractice', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.SQLEXPRESS\MSSQL\DATA\CentricSummerPractice.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'CentricSummerPractice_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.SQLEXPRESS\MSSQL\DATA\CentricSummerPractice_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT, LEDGER = OFF
GO
ALTER DATABASE [CentricSummerPractice] SET COMPATIBILITY_LEVEL = 160
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [CentricSummerPractice].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [CentricSummerPractice] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [CentricSummerPractice] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [CentricSummerPractice] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [CentricSummerPractice] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [CentricSummerPractice] SET ARITHABORT OFF 
GO
ALTER DATABASE [CentricSummerPractice] SET AUTO_CLOSE ON 
GO
ALTER DATABASE [CentricSummerPractice] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [CentricSummerPractice] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [CentricSummerPractice] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [CentricSummerPractice] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [CentricSummerPractice] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [CentricSummerPractice] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [CentricSummerPractice] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [CentricSummerPractice] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [CentricSummerPractice] SET  ENABLE_BROKER 
GO
ALTER DATABASE [CentricSummerPractice] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [CentricSummerPractice] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [CentricSummerPractice] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [CentricSummerPractice] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [CentricSummerPractice] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [CentricSummerPractice] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [CentricSummerPractice] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [CentricSummerPractice] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [CentricSummerPractice] SET  MULTI_USER 
GO
ALTER DATABASE [CentricSummerPractice] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [CentricSummerPractice] SET DB_CHAINING OFF 
GO
ALTER DATABASE [CentricSummerPractice] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [CentricSummerPractice] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [CentricSummerPractice] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [CentricSummerPractice] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
ALTER DATABASE [CentricSummerPractice] SET QUERY_STORE = ON
GO
ALTER DATABASE [CentricSummerPractice] SET QUERY_STORE (OPERATION_MODE = READ_WRITE, CLEANUP_POLICY = (STALE_QUERY_THRESHOLD_DAYS = 30), DATA_FLUSH_INTERVAL_SECONDS = 900, INTERVAL_LENGTH_MINUTES = 60, MAX_STORAGE_SIZE_MB = 1000, QUERY_CAPTURE_MODE = AUTO, SIZE_BASED_CLEANUP_MODE = AUTO, MAX_PLANS_PER_QUERY = 200, WAIT_STATS_CAPTURE_MODE = ON)
GO
USE [CentricSummerPractice]
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
