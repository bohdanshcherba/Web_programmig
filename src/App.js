import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';

import AppHeader from "./components/Header/AppHeader";
import Home from './pages/Home/Home'
import Footer from "./components/footer/Footer";
import Catalog from './pages/Catalog/Catalog'

import coffee1 from "./img/coffee1.jpg";
import coffee2 from "./img/coffee2.jpg";
import coffee3 from "./img/coffee3.jpg";
import coffee4 from "./img/coffee4.jpg";
import coffee5 from "./img/coffee5.jpg";
import coffee6 from "./img/coffee6.jpg";

function App() {
    let data = [
        {
            img: coffee1,
            name: 'Latte',
            price: 50,
            volumeInMl: 250
        },
        {
            img: coffee2,
            name: 'Americano',
            price: 50,
            volumeInMl: 250
        },
        {
            img: coffee3,
            name: 'Cacao',
            price: 50,
            volumeInMl: 250
        },
        {
            img: coffee4,
            name: 'Iced Caramel Macchiato',
            price: 50,
            volumeInMl: 250
        },
        {
            img: coffee5,
            name: 'Mocha',
            price: 50,
            volumeInMl: 250
        },
        {
            img: coffee6,
            name: 'Coffee',
            price: 50,
            volumeInMl: 250
        },

    ]

    return (
        <BrowserRouter>
            <div className='App'>
                <AppHeader />

                <Route exact path="/" render={() => <Home coffees = {data}/>}/>
                <Route path="/catalog" render={() => <Catalog coffees = {data} /> }/>

                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
