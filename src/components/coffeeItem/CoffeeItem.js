import React from 'react';
import s from './coffee_item.module.css'
import {NavLink} from "react-router-dom";

const CoffeeItem = (props) => {


    return (
        <div className={s.item}>
            <div className={s.context}>
                <img className={s.item_img} src={props.image} alt="img"/>
                {/*<img src="https://i.ibb.co/LNrJ4Ys/coffee1.jpg" />*/}
                <h1 className={s.item_title}>{props.name}</h1>
                <p className={s.volume}>{props.volumeInMl} ml</p>
                <h3>{props.price}$</h3>

                <NavLink className={s.btn} to={`coffee/${props.id}`}>
                    <button className={s.btn_buy}>Buy</button>
                </NavLink>
            </div>

        </div>
    );
};

export default CoffeeItem;
