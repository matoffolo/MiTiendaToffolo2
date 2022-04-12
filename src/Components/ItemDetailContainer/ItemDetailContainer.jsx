import React, {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';


function ItemDetailContainer() {
    const [product, setProducts] = useState([])
  
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/1')
        .then(resp => resp.json())
        .then(json =>setProducts(json));
    }, []);


  return (
    <div>
      <ItemDetail product={product}/>
    </div>
  );
}

export default ItemDetailContainer;

