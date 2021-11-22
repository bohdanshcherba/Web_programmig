import './App.css';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import React, {useState} from "react";
import AppHeader from "./components/Header/AppHeader";
import Footer from "./components/footer/Footer";
import ItemPage from "./pages/ItemPage/ItemPage";
import HomeContainer from "./containers/Home";
import CatalogContainer from "./containers/Catalog";
import Basket from "./pages/Basket/basket";

function App() {


    const [redirect, setRedirect] = useState(false)


    return (
        <BrowserRouter>
            <div className='App'>
                <AppHeader setRedirect={setRedirect}/>
                {redirect ? (<Redirect push to="/catalog"/>) : null}

                <Route exact path="/" render={() => <HomeContainer/>}/>
                <Route path="/catalog" render={() => <CatalogContainer/> }/>
                <Route path="/basket" render={() => <Basket/> }/>
                <Route path="/coffee/:id" render={() => <ItemPage />}/>

                <Footer/>

            </div>
        </BrowserRouter>
    );
}

export default App;
