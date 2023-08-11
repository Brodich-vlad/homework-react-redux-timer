import './input_display.css';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { secConvertMin, minConvertSec } from '../../methods';

import { newTimeAction } from '../../my_redux';



export default function InputDisplay() {
    
    // Функція яка змінює стан.
    const dispatch = useDispatch();
    
   // Отримуємо стан.
    const result = useSelector(state => state.timer.time);

    // Локальний стан з інпутів.
    const [minut, setMinut] = useState(secConvertMin(result).min);
    const [second, setSecond] = useState(secConvertMin(result).sec);

    // Змінюемо загальний стейт.
    useEffect(()=>{
        dispatch(newTimeAction(minConvertSec({min:minut,sec:second})));
    },[minut,second,dispatch])

    // Функція зміни локального стану хвилин.
    const changeMin = (val)=>{
        if(val && val > -1 && val <=60){
            setMinut(val)
        }else return
    }
    // Функція зміни локального стану секунд.
    const changeSec = (val)=>{
        if(val && val > -1 && val <= 60){
            setMinut(secConvertMin(result).min)
            setSecond(val) 
        }else return
    }

    return(
        <div className='display-input'>

            <input className='input_min' type="number" 
                value={secConvertMin(result).min}
                onChange={(ev)=>{changeMin(ev.target.value)}}/> 
            <span className='mark_input'>:</span> 

            <label htmlFor='sec' 
                className={secConvertMin(result).sec < 10
                    ?
                'label_sec'
                    : 
                'label_sec _hiden'}>
          
                <span>0</span>

                <input id='sec' className='input_sec' type="number" 
                
                value={secConvertMin(result).sec}
                onChange={(ev)=>{changeSec(ev.target.value)}}/>  
            </label>
        </div>
    )
}