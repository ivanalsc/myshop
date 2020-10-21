import React from 'react';
import ReactDOM from 'react-dom';
import { products } from './products';
import Shop from './Shop';

ReactDOM.render(
    <Shop products={products} />,   document.getElementById('root')
);


