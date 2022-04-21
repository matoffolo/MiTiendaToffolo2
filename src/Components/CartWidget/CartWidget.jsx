import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import image from './image.png'
import './CartWidget.css'
import { CartContext } from "../../CartContext/CartContext";



const CartWidget = ({cantidad}) => {
  const {cart} = useContext(CartContext)

  return (
    <div className='carrito'>
      <Link to= "/cart">
      <img src={image} alt="carrito" width=" 50 px" className='imagen' /> ({cart.length})
      </Link>
    </div>
  );
}

export default CartWidget;
