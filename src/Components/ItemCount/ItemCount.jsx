import React from 'react';
import './ItemCount.css'


const ItemCount = ({counter, incrementar, decrementar, onAdd}) => {

  return (
    <div>
        <p>{counter}</p>
      <button onClick={incrementar}>+</button>
      <button onClick={decrementar}>-</button>
      <br />
      <button onClick={onAdd}>Agregar al Carrito</button>
    </div>
  );
}

export default ItemCount;

