import React from 'react';
import logo from "../../assets/logo.png";
import "./Navigation.css";

const Navigation = () => {
    return (
        <nav className='navigation desktop-max'>
            <div className='logo'>
                <img src={logo} alt='logo' />
            </div>

            <div className='email'>
                <p>say hello! <span className='email-address'>codestation2023@gmail.com</span></p>
            </div>
        </nav>
    );
};

export default Navigation;