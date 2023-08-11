import classes from './my_options_list.module.css';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactAudioPlayer from 'react-audio-player';

import { createIdKey } from '../../../methods';

import audio_mp3 from '../../../audio/mp3/anthemUkraine.mp3';

import { changeSrcAction, addUserSrcAction } from '../../../my_redux';


export default function MyOptionsList(){
    // Функція яка змінює стан.
    const dispatch = useDispatch();

    // Отримуємо стан.
    const checkSrc = useSelector(state => state.settings.src);
    const {volume, audioList }= useSelector(state => state.settings);

    // Стан інпутів.
    const [inputTitle, setInputTitle] = useState('');
    const [inputSrc, setInputSrc] = useState('');

    // Стан випадаючий списків.
    const [dropListOn, setDropListOn] = useState(false);
    const [dropSubListOn, setDropSubListOn] = useState(false);

    // Випадаючий список.
    const clickDropBtn = () =>{
        setDropListOn(!dropListOn)
        setInputTitle('')
        setInputSrc('')
    }

    // Випадаючий список додатковий.
    const clickSubDropBtn = () =>{
        setDropSubListOn(!dropSubListOn)
        setInputTitle('')
        setInputSrc('')
    }

    // Клік обрати мелодію таймера.
    const clickItem = (id) =>{
        dispatch(changeSrcAction(id))
    }

    // Назва та посилання на пісню.
    const changeValue = (id,item) =>{
        if(id === 'title'){
            setInputTitle(item)
        }
        else if(id === 'src'){
            setInputSrc(item) 
        }
        else return
    }

    // Клік зберегти пісню.
    const clickSave = () =>{
        const newObj = {
            id:createIdKey(),
            title:inputTitle,
            src:inputSrc,
        }

        dispatch(addUserSrcAction(newObj))
        setInputTitle('')
        setInputSrc('')
    }


    const createAudioItem = (data) =>{
        const newArr = data.map(({id, title, src},i)=>{
            return(
                <li className={
                    checkSrc.id === id 
                    ?
                    [classes.drop_list_item, classes._chek].join(' ')
                    :
                    classes.drop_list_item
                } key={createIdKey(i)}
                    onClick={()=>{
                        clickItem(id)
                    }}>
                    <h3 className={classes.drop_list_item_title}>{title}</h3>

                    {checkSrc.id === id && <ReactAudioPlayer 
                        className={classes.drop_list_item_player}
                        controls={true}
                        volume= {volume}
                        children={
                            <>
                              <source src={src} type="audio/mp3"/>
                              <source src={audio_mp3} type="audio/mp3"/>
                            </>
                        }
                        
                    />}

                </li>
            )
        })
        return newArr
    }


    return(
        <ul className={classes.options_list}>
            <li className={dropListOn 
                ? 
                classes.list_drop_btn 
                :
                [classes.list_drop_btn, classes._on ].join(' ')
            } 
            onClick={clickDropBtn}>
               Choose a timer ringtone
            </li>
            <li>
                <ul className={dropListOn 
                    ? 
                    [classes.drop_list,classes._on].join(' ')
                    : 
                    classes.drop_list
                    }>
                    {createAudioItem(audioList)}

                    <li>
                        <div
                        className={dropSubListOn 
                                    ? 
                                classes.list_sub_drop_btn 
                                    :
                                [classes.list_sub_drop_btn, classes._on ].join(' ')
                                } 
                            type='button'
                            onClick={clickSubDropBtn}>
                                Add your ringtone
                            </div>

                        <div 
                            className={dropSubListOn
                                    ? 
                                [classes.drop_sub_list,classes._on].join(' ')
                                    : 
                                classes.drop_sub_list
                        }>
                            <input className={classes.sub_list_item} type="text" placeholder='Title' 
                                value={inputTitle}
                                onChange={(ev)=>{
                                    changeValue('title', ev.target.value)
                                }}/>
                            <input className={classes.sub_list_item} type="text" placeholder='https:// my_audio.mp3'
                                value={inputSrc}
                                onChange={(ev)=>{
                                    changeValue('src', ev.target.value)
                                }}/>

                            {inputTitle !== '' 
                                && 
                                inputSrc !== '' 
                                && 
                                <button className={classes.sub_list_btn}  type='button' onClick={clickSave}>Save</button>}

                        </div>
                    </li>
                </ul>
            </li>
            <li>

            </li>

        </ul>
    )
}