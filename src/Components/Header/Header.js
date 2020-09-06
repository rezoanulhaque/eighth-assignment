import React from 'react';
import logo from '../../images/logo.jpg';
import './Header.css';


const Header = () => {
    return (
        <div className="header-logo">
            <img src={logo} alt=""/>
        </div>
    );
};

export default Header;