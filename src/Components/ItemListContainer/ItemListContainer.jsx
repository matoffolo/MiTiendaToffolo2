import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import Spinner from "../Spinner/Spinner";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore,query,where } from "firebase/firestore";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
   const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    let productosRef;
    if(!categoryId){
      productosRef = collection(db, "mitienda");
    }
    else{
      productosRef = query(collection(db, 'mitienda'), where('category', '===', categoryId));
    }
  
    getDocs(productosRef).then((res) => {
      setProducts(res.docs.map((item) => ({ id: item.id, ...item.data() })));
      setTimeout(() => {
        setIsLoading(false);
      }, 2000)
    });

    /*     let productosRef;
    if (!categoryId) {
      productosRef = collection(db, 'mitienda');
    } else {
      productosRef = query(collection(db, 'mitienda'), where('category', '==', categoryId));
    }

    getDocs(productosRef).then((res) => {
      setProducts(res.docs.map((item) => ({ id: item.id, ...item.data() })));
      setTimeout(() => {
        setIsLoading(false);
      }, 2000)}); */
  }, [categoryId]);

  /*     fetch("https://fakestoreapi.com/products")
      .then((resp) => resp.json())
      .then((json) => setProducts(json));
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []); */

  return (
    <div>
    {isLoading ? (
      <Spinner />
    ) : (
      <div>
        <ItemList
          products={
            !categoryId
              ? products
              : products.filter(({ category }) => category === categoryId)
          }
        />
      </div>
    )}
  </div>
);
};



export default ItemListContainer;
