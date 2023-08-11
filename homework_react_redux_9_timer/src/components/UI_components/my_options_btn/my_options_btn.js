import classes from'./my_options_btn.module.css';

export default function MyOptionsBtn({check, callback}){

    return(
        <div className={classes.btn_options} onClick={
            ()=>{callback()}
        }>

            <div className={check
                ?
                classes.option__highlight
                :
                [classes.option__highlight, classes._check].join(' ')}>
            </div>

            <div className={classes.options_container}>

                <span 
                    className={check 
                        ? 
                        [classes.option_btn, classes._on ].join(' ')
                        :
                        classes.option_btn
                        }> 
                        On
                </span>
                <span
                    className={check 
                        ? 
                        classes.option_btn
                        :
                        [classes.option_btn, classes._off].join(' ')
                    }>
                        Off
                </span>
            </div>
        </div>
    )
}