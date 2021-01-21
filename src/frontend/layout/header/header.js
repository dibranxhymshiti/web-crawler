import React from 'react';
import classes from './header.module.css';

const Header = () => {
    return (
        <header>
            <p className={classes.title}>Web Crawler</p>
        </header>
    );
};

export default Header;
