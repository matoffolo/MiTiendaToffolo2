import React, {useState} from 'react';
import './ItemCount.css'


const ItemCount = ({initial}) => {
  const [counter, setCounter] = useState (0)
  const stock =20
  const add = () => {
      counter < stock && setCounter(counter + 1);
  };

  const substract = () => {
      counter > initial && setCounter(counter - 1);
  };

  function onAdd() {
    alert('Agregaste '+ (counter) +' productos' )
    
  }

  return (
    <div>
      <p className='counter'>{counter}</p>
      <button onClick={add}>+</button>
      <button onClick={substract}>-</button>
      <br />
      <button onClick={onAdd}>Agregar al Carrito</button>
    </div>
  );
}

export default ItemCount;

