import React, {useState} from 'react';
import './ItemCount.css'


const ItemCount = () => {

    const [counter, setCounter] = useState (0)

    const stockInicial = 0
    const stock = 20
    
    function incrementar () {
        if (counter<stock){
            setCounter (counter+1)
        }
    }
    
    function decrementar() {
        if(counter>stockInicial){
            setCounter(counter-1)
        }
    }
    


  return (
    <div>
        <p>{counter}</p>
      <button onClick={incrementar}>+</button>
      <button onClick={decrementar}>-</button>
      <br />
      <button>Agregar al Carrito</button>
    </div>
  );
}

export default ItemCount;

