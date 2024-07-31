import {DayDTO} from "./DayDTO"
export interface MealPlan{
    meal_Plan_Id: string,
    description: string,
    title: string,
    photo : string,
    meals : DayDTO[]

}