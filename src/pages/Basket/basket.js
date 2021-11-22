import FilterForm from "../../components/filter_form/FilterForm";
import loader from "../../components/loader.module.css";
import s from "../Catalog/catalog.module.css";
import CoffeeItem from "../../components/coffeeItem/CoffeeItem";
import React from "react";
import {useSelector} from "react-redux";

const Basket = () => {
    let data = useSelector(state => state.items.basket)
    let isLoad = useSelector(state => state.items.isLoading)

    console.log("FROM BASKET PAGE", data)

    return (
        <div>

            {isLoad ? <div className={loader.screen}>
                    <div className={loader.loader}>Loading...</div>
                </div> :
                <div>
                    {data.length === 0 ? <div className={s.not_found}>
                            <p>No items</p>
                        </div> :

                        <div className={s.items}>
                            {
                                data.map(((item) => (
                                    <CoffeeItem key={item.id} id={item.id} image={item.img} name={item.name}
                                                price={item.price}
                                                volumeInMl={item.volumeInMl} inBasket={item.inBasket}/>)))
                            }
                        </div>
                    }
                </div>}
        </div>
    );
};

export default Basket;
