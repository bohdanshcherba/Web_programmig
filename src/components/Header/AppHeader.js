import React, {useEffect, useState} from "react";
import s from './AppHeader.module.css'
import {NavLink} from "react-router-dom";
import user from '../../img/user.img'
import basket from '../../img/basket.png'
import coffee_ico from '../../img/coffee-7-64.png'
import {useDispatch} from "react-redux";
import itemActions from "../../redux/actions/items";


const AppHeader = (props) => {
    const dispatch = useDispatch()

    const [searchItem, setSearchItem] = useState('')

    const handleChange = event => {
        props.setRedirect(false)
        setSearchItem(event.target.value)
    }

    const handleSubmit = event => {
        props.setRedirect(true)
        dispatch(itemActions.searchItems(searchItem))
        setSearchItem('')
        event.preventDefault()
    }

    return (
        <div className={s.app_header}>
            <NavLink to="/">
                <img className={s.logo} src="https://coffee-shop.net.ua/media/sun/header/default/logo-top.svg" alt=""/>
            </NavLink>
            <div>
                <form onSubmit={handleSubmit}>
                    <input className={s.input_search} type="text" value={searchItem} onChange={handleChange}/>
                    <input className={s.btn_search} type='submit' value="Search"/>
                </form>
            </div>
            <div className={s.user_nav}>
                <NavLink to='/user' className={s.navLink}>
                    <div className={s.nav_item}>
                        <img className={s.profile_img} src={user}/>
                        <h5>Profile</h5>
                    </div>
                </NavLink>
                <NavLink to='/basket' className={s.navLink}>
                    <div className={s.nav_item}>
                        <img className={s.basket_img} src={basket}/>
                        <h5>Basket</h5>
                    </div>
                </NavLink>
                <NavLink to='/catalog' className={s.navLink}>
                    <div className={s.nav_item}>
                        <img className={s.coffee_img} src={coffee_ico}/>
                        <h5>Catalog</h5>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default AppHeader



