import { Day } from "./Day"
import { Hour } from "./Hour"
export interface Forecastday{
    date:string,
    day:Day
    hour:Hour[]
}