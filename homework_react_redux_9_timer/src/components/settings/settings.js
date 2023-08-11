import './settings.css';
import { useDispatch, useSelector } from 'react-redux';

import { controlChangeAction, loopChangeAction } from '../../my_redux';

import MyOptionsBtn from '../UI_components/my_options_btn';
import MyOptionsList from '../UI_components/my_options_list';
import MyVolumeInput from '../UI_components/my_volume_input';


export default function Settings({flag}){
    // Функція яка змінює стан.
    const dispatch = useDispatch()

      // Отримуємо стан налаштувань таймера.
    const { loop, controls } = useSelector(state => state.settings);
    
    // Змінює стан контрольної панелі.
    const checkControlsChange = () => {
        dispatch(controlChangeAction())
    }
    // Змінює стан повторення мелодії.
    const checkLoopChange = () =>{
        dispatch(loopChangeAction())   
    }

    return(
        <ul className={flag ? 'settings _show': 'settings'}>

            <li className='settings_item'>
                <MyOptionsList/>
            </li>

            <li className='settings_item'>
                <h3  className='settings_item_title'>Control panel :</h3>
                <MyOptionsBtn
                    check={controls} 
                    callback={checkControlsChange}/>
            </li>

            <li className='settings_item'>
                <h3 className='settings_item_title'>Auto repeat :</h3>
                <MyOptionsBtn 
                    check={loop}
                    callback={checkLoopChange}/>
            </li>
            <div className='settings_item'>

                <MyVolumeInput/>  
            
            </div>
            
        </ul>
    )
}