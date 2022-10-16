import React from 'react';
import logo from '../../assets/logo.jpeg';
import './Header.css';

const Header = () => {

    return (
        <div className="header">
            <div className = "logo">
                <img src={logo} alt="why?"/>
            </div>

        </div>
    );
}

export default Header;