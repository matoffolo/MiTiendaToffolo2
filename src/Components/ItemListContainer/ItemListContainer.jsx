import React, {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import Spinner from '../Spinner/Spinner';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {

  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true);
   const {categoryId} = useParams()
   console.log(categoryId)
   
  
  useEffect(() => {
      fetch('https://fakestoreapi.com/products')
      .then(resp => resp.json())
      .then(json =>setProducts(json));
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
  }, []);


  return (
    <div>
{isLoading ? (
				<Spinner />
			) : (
      <div> <ItemList  products={products}/></div>)}
      
    </div>
  );
}

export default ItemListContainer;
