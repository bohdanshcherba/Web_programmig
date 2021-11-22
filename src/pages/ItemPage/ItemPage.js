import React, {useEffect, useState} from 'react';
import {useParams, useHistory, NavLink} from 'react-router-dom';
import s from "./itemPage.module.css";
import {useDispatch, useSelector} from "react-redux";
import itemActions from "../../redux/actions/items";

const ItemPage = () => {
    let {id} = useParams();


    const dispatch = useDispatch()

    dispatch(itemActions.fetchItems)

    let data = useSelector(state => state.items.data)


    const [coffee, setItem] = useState(data.find(item => item.id == id))


    console.log("FROM ONE ITEM PAGE", data)
    data.find(item => console.log(item.id))
    return (
        <div className={s.page}>
            <div className={s.item}>
                <div className={s.context}>
                    <img src="https://i.ibb.co/LNrJ4Ys/coffee1.jpg"/>
                    <h1 className={s.item_title}>{coffee.name}</h1>
                    <p className={s.volume}>{coffee.volumeInMl} ml</p>
                    <h3>{coffee.price}$</h3>

                </div>

            </div>

        </div>
    );
}

export default ItemPage;
