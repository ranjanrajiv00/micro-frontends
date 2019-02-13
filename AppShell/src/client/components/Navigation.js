import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import css from './Navigation.css';

const Navigation = () => {
    return (
        <ul className="app-navigation">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/product">Product</Link>
            </li>
            <li>
                <Link to="/cart">Cart</Link>
            </li>
        </ul>
    );
};

export default withStyles(css)(Navigation)