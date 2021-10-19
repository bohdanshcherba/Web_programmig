import React from 'react';
import s from './Home.module.css'
import CoffeeItem from "../../components/coffeeItem/CoffeeItem";
import {NavLink} from "react-router-dom";

const Home = (props) => {

    let coffees = props.coffees

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
                <div className={s.container}>

                    <div className={s.items}>
                        {
                            coffees.slice(0,3).map(((item) => (
                                <CoffeeItem image={item.img} name={item.name} price={item.price}
                                            volumeInMl={item.volumeInMl}/>)))
                        }
                    </div>
                    <div className={s.show_more}>
                        <NavLink to='/catalog'>
                            <button className={s.btn_more}>Show more</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
