import { DECREMENT, START, STOP, FINISH, RESET, NEW_TIME } from "./actions_type";
import { defaultState } from "../default_state";

// Дефолтний стан.
const stateDefault = {
    time:0,
    start:false,
    finish:false
}

// Редюсер таймера.
export function TimerReducer(state = defaultState(stateDefault, 'timerState'), action){
    switch (action.type) {
        
        case DECREMENT:
            return { ...state, time: state.time - 1 };
        
        case NEW_TIME:
            return { ...state, time: action.payload };
        
        case START:
            return {...state, start:true, finish:false};

        case STOP:
            return {...state, start:false, finish:false};

        case FINISH:
            return { ...state, finish: true };
        
        case RESET:
            return {...state, finish:false, start:false, time:0};

        default:
            return state
    }
}

