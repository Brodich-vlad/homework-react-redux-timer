import { CONTROL, LOOP, CHANGE_SRC, ADD_USER_SRC, CHANGE_VALUME } from "./actions_type";

// Функції створення обектів екшенів.

export const changeValumeAction = (payload) => {
    return {
        type:CHANGE_VALUME,
         payload:payload
    }
}

export const controlChangeAction = () => {
    return {
        type:CONTROL,
    }
}

export const loopChangeAction = () => {
    return {
        type:LOOP,
    }
}

export const changeSrcAction = (payload) => {
    return {
        type:CHANGE_SRC,
         payload:payload
    }
}

export const addUserSrcAction = (payload) => {
    return {
        type:ADD_USER_SRC,
         payload:payload
    }
}
