import { Provider } from 'react-redux';

import Timer from '../timer/timer';


// Отримуємо стан та передаємо в провайдер всім компонентам.
import { store } from '../../my_redux';

export default function Main() {
    
    return(
        <main className='main'>
            <Provider store={store}>
                <Timer/>
            </Provider>
        </main>
    )
}