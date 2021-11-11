import React from 'react';
import s from './Home.module.css'
import CoffeeItem from "../../components/coffeeItem/CoffeeItem";
import {NavLink} from "react-router-dom";
import loader from "../../components/loader.module.css"

const Home = (props) => {

    let coffees = props.coffees

    const handleClickShow = event => {
        props.setCountItems(props.countItems + 3)

    }

    const handleClickHide = event => {
        props.setCountItems(3)

    }

    return (
        <div>
            <div className={s.hero}>
                <div className={s.container}>
                    <div className={s.contacts}>
                        <span><a href="">Зареєструйтесь</a> та знижка від 3% ваша</span>
                    </div>
                    <div className={s.home_text}>
                        <p className={s.p}>
                            Lorem Ipsum is simply dummy text of
                            the printing and typesetting industry. Lorem Ipsum has been
                        </p>
                    </div>
                </div>
            </div>
            <div>
                {props.isLoad ? <div className={loader.screen}>
                    <div className={loader.loader}>Loading...</div></div>:

                (<div className={s.container}>

                    <div className={s.items}>
                        {
                            coffees.slice(0, props.countItems).map(((item) => (
                                <CoffeeItem key={item.id} image={item.img} name={item.name} price={item.price}
                                            volumeInMl={item.volumeInMl}/>)))
                        }
                    </div>
                    <div className={s.show_more}>
                        {props.countItems < coffees.length ?
                            <button className={s.btn_more} onClick={handleClickShow}>Show more</button> :
                            <button className={s.btn_more} onClick={handleClickHide}>Hide</button>
                        }
                    </div>

                </div>)}

            </div>
        </div>
    );
};

export default Home;
