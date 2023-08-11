import { DECREMENT, START, STOP, FINISH, RESET, NEW_TIME } from "./actions_type";

// Функції створення обектів екшенів.

export const decrementAction = () => {
    return {
        type:DECREMENT,
    }
}


export const newTimeAction = (payload) => {
    return {
        type:NEW_TIME,
        payload:payload
    }
}

export const startAction = () => {
    return {
        type:START,
    }
}

export const stopAction = () => {
    return {
        type:STOP,
    }
}

export const finishAction = () => {
    return {
        type:FINISH,
    }
}

export const resetAction = () => {
    return {
        type:RESET,
    }
}