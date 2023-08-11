import Contacts from '../contacts/contacts';
import classes from './Footer.module.css';

export default function Footer(){
    return(
        <footer className={classes.footer}>
            <div className={classes.footer__wrapper} >
                
                <Contacts/>
        
                <p className={classes.footer__date}>11 August 2023</p>
            </div>
        </footer>
    )
}