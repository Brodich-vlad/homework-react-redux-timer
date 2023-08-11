import { CONTROL, LOOP, CHANGE_SRC, ADD_USER_SRC, CHANGE_VALUME } from "./actions_type";
import { defaultState } from "../default_state";

//Аудіо-файли.
import audio_mp3 from '../../audio/mp3/budilnik.mp3';

import budilnik_iphone_mp3 from '../../audio/mp3/budilnika-iphone.mp3';
import audio_1_mp3 from '../../audio/mp3/budilnik-1.mp3';
import audio_2_mp3 from '../../audio/mp3/budilnik-2.mp3';
import anthemUkraine from '../../audio/mp3/anthemUkraine.mp3';

// Дефолтний стан.anthemUkraine
const stateDefault = {
    src: { id:1, title:'Anthem of Ukraine', src:anthemUkraine },
    audioList:[
        { 
            id:1, 
            title:'Anthem of Ukraine', 
            src:anthemUkraine 
        },
        {
            id:2,
            title:'Melody 1',
            src:audio_mp3,
        },
        {
            id:3,
            title:'Budilnik Iphone',
            src:budilnik_iphone_mp3,
        },
        {
            id:4,
            title:'Melody 2',
            src:audio_1_mp3,
        },
        {
            id:5,
            title:'Melody 3',
            src:audio_2_mp3,
        }
    ],
    autoPlay: true,
    controls: false,
    loop: true,
    volume: 0.3,
}

// Редюсер таймера.
export function UserSettingsReducer(state = defaultState(stateDefault, 'timerSettingsState'), action){
    switch (action.type) {
        
        case CHANGE_VALUME:
            return { ...state, volume:  action.payload };
        
        case ADD_USER_SRC:
            return { ...state, audioList:[...state.audioList,action.payload]};

        case CHANGE_SRC:
            return { ...state, src: state.audioList.find(e => e.id === action.payload)};

        case CONTROL:
            return { ...state, controls:!state.controls };

        case LOOP:
            return { ...state, loop:!state.loop };

        default:
            return state
    }
}