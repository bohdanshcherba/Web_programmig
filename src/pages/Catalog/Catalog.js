import React from 'react';
import s from "./catalog.module.css";
import CoffeeItem from "../../components/coffeeItem/CoffeeItem";
import FilterForm from "../../components/filter_form/FilterForm";

const Catalog = (props) => {

    let coffees = props.coffees
    console.log(coffees)
    return (
        <div>
            <FilterForm {...props}/>

            {coffees.length === 0 ? <div className={s.not_found}><p>Apply the correct filters</p></div> :

                <div className={s.items}>
                    {
                        coffees.map(((item) => (
                            <CoffeeItem key={item.id} image={item.img} name={item.name} price={item.price}
                                        volumeInMl={item.volumeInMl} />)))
                    }
                </div>
            }
        </div>
    );
};

export default Catalog;
