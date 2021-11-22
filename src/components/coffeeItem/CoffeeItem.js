import React, {useState} from 'react';
import s from './coffee_item.module.css'
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import itemActions from "../../redux/actions/items";

const CoffeeItem = (props) => {

    const dispatch = useDispatch()

    const [inBasket, setInBasket] = useState(false)

    const handleClickAdd = event => {
        dispatch(itemActions.addItemToBasket({
            id: props.id,
            img: null,
            name: props.name,
            price:props.price,
            volumeInMl:props.volumeInMl,
            inBasket: true
        }))
    }

    const handleClickRemove = event =>{
        dispatch(itemActions.removeFromBasket(props.id))
    }

    console.log("From ITEM", props)

    return (
        <div className={s.item}>
            <div className={s.context}>
                {/*<img className={s.item_img} src={props.image} alt="img"/>*/}
                <img src="https://i.ibb.co/LNrJ4Ys/coffee1.jpg" />
                <h1 className={s.item_title}>{props.name}</h1>
                <p className={s.volume}>{props.volumeInMl} ml</p>
                <h3>{props.price}$</h3>

                <NavLink className={s.btn} to={`coffee/${props.id}`}>
                    <button className={s.btn_buy}>Show</button>
                </NavLink>
                {props.inBasket  ?
                    <NavLink className={s.btn} to={'basket'}>
                        <button onClick={handleClickRemove} className={s.btn_buy}>Remove</button>
                    </NavLink>:
                <NavLink className={s.btn} to={'basket'}>
                    <button onClick={handleClickAdd} className={s.btn_buy}>Add to Basket</button>
                </NavLink>

                }
            </div>

        </div>
    );
};

export default CoffeeItem;
