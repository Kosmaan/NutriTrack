import { Meal } from "./Meal";

export interface DayWithMeals{
    day: number,
    breakfast:  Meal,
    lunch:  Meal,
    dinner: Meal

}