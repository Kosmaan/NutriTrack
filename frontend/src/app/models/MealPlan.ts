import {DayDTO} from "./DayDTO"
export interface MealPlan{
    description: String,
    title: String,
    photo : String,
    meals : DayDTO[]

}