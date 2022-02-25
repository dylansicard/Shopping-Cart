import React, { useContext, useEffect } from 'react';
import Product from './Product';
import Button from 'react-bootstrap/Button';
import './App.css';
import Cart from './Cart';

const App = () => {
  return (
    <div>
      <h1>App</h1>
      <Cart />
      <Product />
    </div>
  );
};

export default App;
