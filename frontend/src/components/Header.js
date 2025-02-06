import React from 'react';
import '../styles/Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <h1 className="main-title">Welcome to the Forum</h1>
                <p className="sub-title">Engage, discuss, and learn with the community</p>
            </div>
        </header>
    );
};

export default Header;
