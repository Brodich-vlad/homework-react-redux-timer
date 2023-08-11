import './app.css';
import Footer from '../footer/footer';
import Header from '../header/header';
import Main from '../main/main';


export default function App() {
    
    return (
        <div className='main_page'>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
}