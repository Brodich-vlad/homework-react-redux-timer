import './timer_display.css';

import { useSelector } from 'react-redux';

import { secConvertMin } from '../../methods';

import InputDisplay from '../input_display/input_display';

export default function TimerDisplay() {
    
    // Отримуємо стан таймера.
    const {finish, time, start } = useSelector(state => state.timer);

     // Отримуємо стан налаштувань таймера.
    const {volume, loop, controls } = useSelector(state => state.settings)

    //Функція виводу секунд.
    const showSec = (res) =>{
        const s = secConvertMin(res).sec
      return  s < 10 ? `0${s}`: s
    }

    return(
        <div className="stopwatch-display">
            <div className='settings_display'>

                <span className='settings_display_item'>
                    ♫ Vol : {volume*100} %</span>
                <span className='settings_display_item'>
                    ♫ ↻ : 
                    {loop 
                        ? 
                        <span className='green'> on</span>
                        :
                        <span className='red'> off</span>}
                </span>
                <span  className='settings_display_item'>
                    ♫ Сontrol panel : 
                    {controls
                        ?  
                        <span className='green'> on</span>
                        :
                        <span className='red'> off</span>}
                </span>
               
            </div>

            { start 
                ?  
            <div className={!finish ? 'display-result': 'display-result _twink'}>
     
                <span className='result-minut'>
                    {secConvertMin(time).min}
                </span>

                <span className={finish ? 'mark': 'mark twinkle'}>:</span>


                    <span className='result-second'>
                    {showSec(time)
                }</span>
            </div>
                :
            <InputDisplay/>
            }
        </div>
    )
}