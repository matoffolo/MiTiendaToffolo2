import React, {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';


function ItemDetailContainer() {
    const [product, setProducts] = useState([])
    let {id} = useParams()
  

  
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(resp => resp.json())
        .then(json =>setProducts(json));
    }, [id]);


  return (
    <div>
      <ItemDetail product={product}/>
    </div>
  );
}

export default ItemDetailContainer;

