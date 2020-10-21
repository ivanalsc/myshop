import React from 'react';
import cart from '../img/black-cart.svg';


export const Modal = ({closeModal}) => {
    return (
        <div className='modal'>
            <div className='mensaje'>
                <button onClick={closeModal}>X</button>
                <img src={cart} alt='' />
                <p>Se agregó el producto al carrito</p>
                <p>Llevás un total de: $1500</p>

            </div>
            
        </div>
    )
}
