import './my_volume_input.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeValumeAction } from '../../../my_redux';

export default function MyVolumeInput(){
   // Функція яка змінює стан.
   const dispatch = useDispatch()

    // Отримуємо стан налаштувань таймера.
   const volume = useSelector(state => state.settings.volume);

    // Функція зміни гучності.
    const changeValume = (ev) => {
        dispatch(changeValumeAction(Number(ev)))
    }
    return(
        <>
            <h3 className='title_volume'>Volume :</h3>
            <div className="slidecontainer">
                <input type="range" 
                    min="0" 
                    max="1" 
                    step={.1} 
                    value={volume} 
                    className="slider"
                    onChange={(ev) => {
                        changeValume(ev.target.value)
                    }}/>
            </div> 
            <p className='text_volume'>{volume*100} %</p>

        </>
    )
}