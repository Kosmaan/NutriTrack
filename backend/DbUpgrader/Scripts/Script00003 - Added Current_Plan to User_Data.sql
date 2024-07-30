ALTER TABLE [SummerPractice].[User_Data]
ADD
[Current_Plan] UNIQUEIDENTIFIER NULL,
FOREIGN KEY ([Current_Plan]) REFERENCES [SummerPractice].[Meal_Plan]([Meal_Plan_Id]);
GO