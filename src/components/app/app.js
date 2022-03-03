import React from 'react'
import { Route, Routes } from 'react-router-dom';
import CartPage from '../pages/cart-page';
import HomePage from '../pages/home-page';

import './app.css';

const App = () => {

    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/cart' element={<CartPage />} />
        </Routes>
    );
};

export default App;