import React from 'react';
import s from "./catalog.module.css";
import CoffeeItem from "../../components/coffeeItem/CoffeeItem";
import FilterForm from "../../components/filter_form/FilterForm";

const Catalog = (props) => {

    let coffees = props.coffees

    return (
        <div>
            <FilterForm/>
            <div className={s.items}>
                {
                    coffees.map(((item) => (
                        <CoffeeItem image={item.img} name={item.name} price={item.price}
                                    volumeInMl={item.volumeInMl}/>)))
                }
            </div>
        </div>
    );
};

export default Catalog;
