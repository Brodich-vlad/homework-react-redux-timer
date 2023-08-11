// Стан.
import { store } from './store';
// Action таймера.
import { decrementAction, startAction, stopAction, finishAction,  resetAction, newTimeAction } from './timer_reducer/create_actions';

// Action користувацьких налаштувань таймера.
import { controlChangeAction, loopChangeAction, changeSrcAction, addUserSrcAction, changeValumeAction } from './user_settings_reducer/create_actions';

export {
    // Стан.
    store,

    // Action таймера.
    decrementAction,
    startAction,
    stopAction,
    finishAction,
    resetAction,
    newTimeAction,

    // Action користувацьких налаштувань таймера.
    controlChangeAction,
    loopChangeAction,
    changeSrcAction,
    addUserSrcAction,
    changeValumeAction
}