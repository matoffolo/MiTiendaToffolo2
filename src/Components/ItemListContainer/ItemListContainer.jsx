import React, {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';


const ItemListContainer = () => {

  const [products, setProducts] = useState([])
  
  useEffect(() => {
      fetch('https://fakestoreapi.com/products')
      .then(resp => resp.json())
      .then(json =>setProducts(json));
  }, []);


  return (

    <div>
      <div className='itemList'> <ItemList  products={products}/></div>
      
    </div>
  );
}

export default ItemListContainer;
