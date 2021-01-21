import React from 'react';
import classes from './searchInput.module.css';

const SearchInput = (props) => {
    return <input data-testid='searchInput' {...props} className={classes.searchInput} type="text" placeholder={'Type something ...'} autoFocus/>
};

export default SearchInput;
