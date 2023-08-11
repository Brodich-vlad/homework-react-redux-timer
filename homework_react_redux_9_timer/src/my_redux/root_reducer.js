import { combineReducers } from "redux";
import { TimerReducer } from './timer_reducer/timer_reducer';
import { UserSettingsReducer } from './user_settings_reducer/user_settings_reducer';


export const rootReuser = combineReducers({
    timer: TimerReducer,
    settings: UserSettingsReducer,
})