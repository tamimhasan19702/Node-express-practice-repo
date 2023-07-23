import { DECREMENT, INCREMENT } from "./constant"


export const incrementCounter = () => {
    return {
    type: INCREMENT
    }
}
export const decrementCounter = () => {
    return {
    type: DECREMENT
    }
}
export const RESET = () => {
    return {
    type: INCREMENT
    }
}