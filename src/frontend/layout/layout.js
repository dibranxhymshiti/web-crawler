import React from 'react';
import Header from "./header/header";
import classes from './layout.module.css';

const Layout = (props) => {
    return (
        <>
            <Header/>
            <main className={classes.container}>
                {props.children}
            </main>
        </>
    );
};

export default Layout;
