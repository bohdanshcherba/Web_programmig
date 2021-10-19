import React from 'react';
import s from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={s.footer}>
            <a href="">
                <img className={s.logo} src="https://coffee-shop.net.ua/media/sun/header/default/logo-top.svg" alt=""/>
            </a>
            <ul className={s.footer_social}>
                <li className="hidden-xs"><a title="Email" href="mailto:info@coffee-shop.net.ua" rel="noindex,nofollow"><img
                    src="https://coffee-shop.net.ua/media/wysiwyg/email.svg" alt="Email"/></a></li>
                <li><a title="Viber" href="viber://chat?number=+380687879218" rel="noindex,nofollow"><img src="https://coffee-shop.net.ua/media/wysiwyg/viber.svg" alt="Viber"/></a></li>
                <li><a title="Telegram" href="https://t.me/coffeeshopnetua" target="_blank" rel="noindex,nofollow noopener"><img src="https://coffee-shop.net.ua/media/wysiwyg/telegram.svg" alt="Telegram"/></a></li>
                <li><a title="Facebook" href="https://www.facebook.com/coffeeshopnetua" target="_blank" rel="noindex,nofollow noopener"><img src="https://coffee-shop.net.ua/media/wysiwyg/facebook.svg" alt="Facebook"/></a></li>
                <li><a title="Twitter" href="https://twitter.com/coffeeshopnetua" target="_blank" rel="noindex,nofollow noopener"><img src="https://coffee-shop.net.ua/media/wysiwyg/twitter.png" alt="Twitter"/></a></li>
                <li><a title="Instagram" href="https://www.instagram.com/coffeeshopnetua/" target="_blank" rel="noindex,nofollow noopener"><img src="https://coffee-shop.net.ua/media/wysiwyg/instagram.svg" alt="Instagram"/></a></li>
                <li><a title="YouTube" href="https://www.youtube.com/channel/UCmVvYcZJxn084jkihok7Izg" target="_blank" rel="noindex,nofollow noopener"><img src="https://coffee-shop.net.ua/media/wysiwyg/youtube.svg" alt="YouTube"/></a></li>
            </ul>
        </footer>
    );
};

export default Footer;
