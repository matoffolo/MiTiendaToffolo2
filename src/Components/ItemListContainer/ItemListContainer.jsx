import React, {useState} from 'react';
import ItemCount from '../ItemCount/ItemCount';


const ItemListContainer = () => {

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

  function onAdd() {
    alert('Agregaste '+ (counter) +' productos' )
    
  }

  return (
    <div>
      <ItemCount incrementar={incrementar} decrementar={decrementar} onAdd={onAdd} counter={counter}/>
    </div>
  );
}

export default ItemListContainer;
