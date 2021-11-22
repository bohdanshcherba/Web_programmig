import {useDispatch, useSelector} from "react-redux";
import itemActions from "../redux/actions/items";
import React, {useEffect, useState} from "react";
import Catalog from "../pages/Catalog/Catalog";
import coffee1 from "../img/coffee1.jpg";
import coffee2 from "../img/coffee2.jpg";
import coffee3 from "../img/coffee3.jpg";
import coffee4 from "../img/coffee4.jpg";
import coffee5 from "../img/coffee5.jpg";
import coffee6 from "../img/coffee6.jpg";

const CatalogContainer = () => {
    const dispatch = useDispatch()
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


    let data = useSelector(state => state.items.results)
    let isLoading = useSelector(state => state.items.isLoading)

    console.log(data)


    const [kindSort, setKindSort] = useState("price")
    const [typeSort, setTypeSort] = useState("desc")
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
    const [foundItems, setFoundItems] = useState([])
    const [filteredItems, setFilteredItems] = useState([])


    return (

    <Catalog isLoad={isLoading} coffees={data} Sort={Sort}
             setKindSort={setKindSort}
             setTypeSort={setTypeSort} />
    )
}
export default CatalogContainer

