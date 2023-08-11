import './timer.css';

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ReactAudioPlayer from 'react-audio-player';

import TimerDisplay from '../timer-display/timer_display';
import TimerControls from '../timer_controls/timer_controls';

import {  stopAction } from '../../my_redux';


//Аудіо-файли.
// import audio_mp3 from '../../audio/mp3/budilnik.mp3';
import audio_ogg from '../../audio/alt/budilnik.ogg';
import audio_m4r from '../../audio/alt/budilnik.m4r';
import audio_wav from '../../audio/alt/budilnik.wav';
// Анмація будильника gif.
import icon from '../../image/gif/icon_3.gif';
import settings from '../../image/svg/settings/player_settings_icon.svg'
import Settings from '../settings/settings';

export default function Timer() {
    
     // Функція яка змінює стан.
    const dispatch = useDispatch()

    // Отримуємо стан таймера.
    const finish = useSelector(state => state.timer.finish)
    const start = useSelector(state => state.timer.start);

    // Отримуємо стан налаштувань таймера.
    const stateSettings = useSelector(state => state.settings);
    const {loop, volume, controls, src } = stateSettings;

    // Локальний стан модалки.
    const [openSettings, setOpenSettings] = useState(false)

     // Функція клік стоп аудіо.
    const clickStop = () =>{
        dispatch(stopAction ())
    }

    // Функція клік відкрити/закрити модалку.
    const clickOpenSettings = () =>{
        setOpenSettings(openSettings ? false : true);
        openSettings && localStorage.setItem('timerSettingsState', JSON.stringify(stateSettings))
    }

    return(

        <>
        <div className="container-stopwatch">

            <button type="button" 
                className='settings-btn'
                onClick={clickOpenSettings}>
                    <img src={settings} alt='settings'/>
            </button>

            <TimerDisplay/>

            <TimerControls />

            <div className='wraper_audio'>
                {finish 
                        && 
                    start 
                        && 
                    <>
                        <ReactAudioPlayer className='audio-player'
                            children={
                                <>
                                    <source src={src.src} type="audio/mp3" />
                                    <source src={audio_ogg} type="audio/ogg" />
                                    <source src={audio_m4r} type="audio/m4r" />
                                    <source src={audio_wav} type="audio/wav" />
                                </>
                            } 
                            autoPlay={true} 
                            controls={controls}
                            loop={loop}
                            volume={volume}/>

                        <img className='img-audio' src={icon} alt='icon'
                        onClick={clickStop}/>
                    </>
                    }
            </div>

            <h3 className='audio__title'>
                <span className='logo__green'>V</span>
                <span className='logo__green'>B</span>
                <span className='audio__title-logo'>Timer</span>
            </h3>

            <Settings  flag={openSettings}/>

        </div>
        </>
    )
}


