import React, {useState, useEffect} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';


const ItemListContainer = () => {

  const [counter, setCounter] = useState (0)
  const [products, setProducts] = useState([])

  const stock = 20
  
  function incrementar () {
      if (counter<stock){
          setCounter (counter+1)
      }
  }
  function decrementar() {
      if(counter>0){
          setCounter(counter-1)
      }
  }
  function onAdd() {
    alert('Agregaste '+ (counter) +' productos' )
    
  }
  
  useEffect(() => {
      fetch('https://fakestoreapi.com/products')
      .then(resp => resp.json())
      .then(json =>setProducts(json));
  }, []);


  return (

    <div>
      <div><ItemCount incrementar={incrementar} decrementar={decrementar} onAdd={onAdd} counter={counter}/> </div>
      <div> <ItemList  products={products}/></div>
      
    </div>
  );
}

export default ItemListContainer;
