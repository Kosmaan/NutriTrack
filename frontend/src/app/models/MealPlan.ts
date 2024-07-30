import {DayDTO} from "./DayDTO"
export interface MealPlan{
    meal_Plan_Id: String,
    description: String,
    title: String,
    photo : String,
    meals : DayDTO[]

}