import React, { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ initial, stock, addCart }) => {
  const [counter, setCounter] = useState(0);

  const add = () => {
    counter < stock && setCounter(counter + 1);
  };

  const substract = () => {
    counter > initial && setCounter(counter - 1);
  };

  /* function onAdd() {
    alert('Agregaste '+ (counter) +' productos' )
    
  } */

/*   const handleClick = () => {
    addCart(counter);
  };
 */
  return (
    <div>
      <p className="counter">{counter}</p>
      <button onClick={add}>+</button>
      <button onClick={substract}>-</button>
      <br />
      <button onClick={()=>addCart(counter)}>Agregar al Carrito</button>
    </div>
  );
};

export default ItemCount;
