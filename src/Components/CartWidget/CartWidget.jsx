import React from 'react';
import cart from './cart.png'
import './CartWidget.css'



const CartWidget = ({cantidad}) => {
  return (
    <div className='carrito'>
      <img src={cart} alt="carrito" width=" 50 px" className='imagen' /> ({cantidad})
    </div>
  );
}

export default CartWidget;
