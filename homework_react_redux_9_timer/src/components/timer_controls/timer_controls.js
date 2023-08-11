import './timer_controls.css';

import { useEffect,  useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Імпорт функцій створення Actions.
import { decrementAction, startAction, stopAction, finishAction, resetAction } from '../../my_redux';

export default function TimerControls() {

    // Функція яка змінює стан.
    const dispatch = useDispatch()

    // Отримуємо стан таймера.
    const stateTimer = useSelector(state => state.timer);
    const { start, time } = stateTimer;
    
    // Функція змінює стан лічильника.
    const decrementTimer = useCallback(() => {
        dispatch(decrementAction())
    },[dispatch]);

    // Слідкуємо за станом лічильника.
    useEffect(() => {
        // Зміна стану якщо лічильник = 0
        if(time <= 0){
            dispatch(finishAction())
            return
        }
        // Додавання setInterval після натиску старт.
        const timeoutFunction = start && setInterval(decrementTimer, 1000)
        // Видалення setInterval після зупинки таймера.
        !start && clearInterval(timeoutFunction)
        // Видалення setInterval після розмонтування.
        return () => clearInterval(timeoutFunction);

    }, [dispatch, decrementTimer, time, start]);
    

    // Зберігаємо стан таймера в localStorage
    useEffect(() => {
        localStorage.setItem('timerState', JSON.stringify(stateTimer))
    }, [stateTimer]);
    
    // Функція клік старт.
    const clickStart = () =>{
        dispatch(startAction())
       
    }
    // Функція клік стоп.
    const clickStop = () =>{
        dispatch(stopAction ())
    }

    // Функція клік ресет.
    const clickReset = () =>{
        dispatch(resetAction())
    }

    return (
        <div className="stopwatch-control">

            <button type='button'
                className='control-btn'    
                onClick={clickStart}
                disabled={time <= 0 ? true : false}>
                Start
            </button>

            <button type='button'
                className='control-btn'
                onClick={clickStop}>
                Stop
            </button>

            <button type='button'
                className='control-btn'
                onClick={clickReset}
                disabled={start ? true : false}>
                Reset
            </button>

        </div>
    )
}