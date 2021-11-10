import './App.css';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import React, {useState, useEffect} from "react";
import AppHeader from "./components/Header/AppHeader";
import Home from './pages/Home/Home'
import Footer from "./components/footer/Footer";
import Catalog from './pages/Catalog/Catalog'
import ItemPage from "./pages/ItemPage/ItemPage";
import coffee1 from "./img/coffee1.jpg";
import coffee2 from "./img/coffee2.jpg";
import coffee3 from "./img/coffee3.jpg";
import coffee4 from "./img/coffee4.jpg";
import coffee5 from "./img/coffee5.jpg";
import coffee6 from "./img/coffee6.jpg";
import sharesApi from "./api/api";

function App() {

    const coffees = [
        {
            id: 1,
            img: coffee1,
            name: 'Latte',
            price: 44,
            volumeInMl: 300
        },
        {
            id: 2,

            img: coffee2,
            name: 'Americano',
            price: 86,
            volumeInMl: 200
        },
        {
            id: 3,

            img: coffee3,
            name: 'Cacao',
            price: 56,
            volumeInMl: 75
        },
        {
            id: 4,

            img: coffee4,
            name: 'Iced Caramel Macchiato',
            price: 43,
            volumeInMl: 100
        },
        {
            id: 5,

            img: coffee5,
            name: 'Mocha',
            price: 32,
            volumeInMl: 300
        },
        {
            id: 6,

            img: coffee6,
            name: 'Coffee',
            price: 55,
            volumeInMl: 120
        },
        {
            id: 7,

            img: coffee6,
            name: 'Coffee',
            price: 70,
            volumeInMl: 200
        },
    ]

    const [data, setData] = useState(coffees)
    const [searchItem, setSearchItem] = useState('')
    const [foundItems, setFoundItems] = useState([])
    const [filteredItems, setFilteredItems] = useState([])
    const [redirect, setRedirect] = useState(false)
    const [kindSort, setKindSort] = useState("price")
    const [typeSort, setTypeSort] = useState("desc")
    const [countItems, setCountItems] = useState(3)
    const [isLoad,setLoad] = useState(false)


    // const Search = () => {
    //
    //     useEffect(() => {
    //         console.log(sharesApi.searchCoffee(searchItem))
    //         const results = sharesApi.searchCoffee(searchItem)
    //         setFoundItems(results);
    //
    //     }, []);
    //
    // }


    // useEffect(() => {
    //     Search()
    // }, )

    const Search = async () => {
        let response = await sharesApi.searchCoffee(searchItem)
        // response = await response.json()
        console.log(response.data)
        setFoundItems(response.data)
    }

    const Sort = () => {


        if (kindSort === 'price' && typeSort === 'desc') {
            console.log("PRICE DESC")

            const results = foundItems.sort(
                (first, second) => second.price - first.price);
            setFilteredItems(results);


        }
        if (kindSort === 'price' && typeSort === 'asc') {
            console.log("PRICE ASC")

            const results = foundItems.sort(
                (first, second) => first.price - second.price);
            setFilteredItems(results);

        }
        if (kindSort === 'volume' && typeSort === 'desc') {
            console.log("VOLUME DESC")

            const results = foundItems.sort(
                (first, second) => second.volumeInMl - first.volumeInMl);
            setFilteredItems(results);


        }
        if (kindSort === 'volume' && typeSort === 'asc') {
            console.log("VOLUME ASC")

            const results = foundItems.sort(
                (first, second) => first.volumeInMl - second.volumeInMl);
            setFilteredItems(results);
        }


    }

    useEffect(() => {
        setLoad(true)
        sharesApi.getAll().then(({ data }) => {
            console.log(data);
            setData(data)
            setLoad(false)
        });
    }, []);




    return (
        <BrowserRouter>
            <div className='App'>
                <AppHeader Search={Search} setRedirect={setRedirect} setSearchItem={setSearchItem}
                           searchItem={searchItem}/>
                {redirect ? (<Redirect push to="/catalog"/>) : null}


                    <Route exact path="/"
                           render={() => <Home isLoad={isLoad} coffees={data} countItems={countItems} setCountItems={setCountItems}/>}/>
                    <Route path="/catalog"
                    render={() => <Catalog isLoad={isLoad} coffees={foundItems} Sort={Sort} setKindSort={setKindSort}
                    setTypeSort={setTypeSort}/>}/>

                    <Route path="/coffee/:id" render={() => <ItemPage items={data}/>}/>


                <Footer/>

            </div>
        </BrowserRouter>
    );
}

export default App;
