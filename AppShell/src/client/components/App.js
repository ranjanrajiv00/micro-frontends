import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../Routes';
import Navigation from './Navigation';
import FactoryComponent from './FactoryComponent';

const Home = () => {
    return (
        <BrowserRouter>
            <div>
                <FactoryComponent.Header />
                <Navigation />
                <Routes />
                <FactoryComponent.Footer />
            </div>
        </BrowserRouter>
    )
};

export default Home;