import React from 'react';
import s from "./catalog.module.css";
import CoffeeItem from "../../components/coffeeItem/CoffeeItem";
import FilterForm from "../../components/filter_form/FilterForm";
import loader from "../../components/loader.module.css";

const Catalog = (props) => {

    let coffees = props.coffees
    console.log(coffees)
    return (
        <div>
            <FilterForm {...props}/>
            {props.isLoad ? <div className={loader.screen}>
                    <div className={loader.loader}>Loading...</div>
                </div> :
                <div>
                    {coffees.length === 0 ? <div className={s.not_found}><p>Apply the correct filters</p></div> :

                        <div className={s.items}>
                            {
                                coffees.map(((item) => (
                                    <CoffeeItem key={item.id} id={item.id} image={item.img} name={item.name}
                                                price={item.price}
                                                volumeInMl={item.volumeInMl}/>)))
                            }
                        </div>
                    }
                </div>}
        </div>
    );
}
;

export default Catalog;
