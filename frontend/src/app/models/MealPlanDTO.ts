import {DayDTO} from "./DayDTO"
export interface MealPlanDTO{
    description: String,
    title: String,
    photo : File,
    meals : DayDTO[]

}