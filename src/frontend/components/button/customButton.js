import React, {useEffect, useState} from 'react';
import classes from './customButton.module.css';

const CustomButton = (props) => {
    const [btnClasses, setBtnClasses] = useState([classes.customButton])

    useEffect(() => {
        setTimeout(() => {
            setBtnClasses(b => [...b, classes.buttonLeft])
        }, 300)
    }, [])

    return (
        <button data-testid='button' className={btnClasses.join(' ')} {...props}>
            {props.children}
        </button>
    );
};

export default CustomButton;
