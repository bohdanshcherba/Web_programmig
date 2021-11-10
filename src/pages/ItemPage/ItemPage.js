import React,{useState} from 'react';
import {useParams, useHistory, NavLink} from 'react-router-dom';
import s from "./itemPage.module.css";

const ItemPage = (props)=> {
    const { id } = useParams();



    const [coffee,setItem] = useState(props.items.find(item => item.id == id));

    console.log(coffee)
    return (
        <div className={s.page}>
            <div className={s.item}>
                <div className={s.context}>
                    <img className={s.item_img} src={coffee.img} alt=""/>
                    <h1 className={s.item_title}>{coffee.name}</h1>
                    <p className={s.volume}>{coffee.volumeInMl} ml</p>
                    <h3>{coffee.price}$</h3>


                </div>

            </div>

        </div>
    );
}

export default ItemPage;
