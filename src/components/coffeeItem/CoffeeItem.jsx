import React from 'react';
import s from './coffee_item.module.css'

const CoffeeItem = (props) => {
    return (
        <div className={s.item}>
            <div className={s.context}>
                <img className={s.item_img} src={props.image} alt=""/>
                <h1 className={s.item_title}>{props.name}</h1>
                <p className={s.volume}>{props.volumeInMl} ml</p>
                <h3>{props.price}$</h3>
                <button className={s.btn_buy}>Buy</button>
            </div>

        </div>
    );
};

export default CoffeeItem;
