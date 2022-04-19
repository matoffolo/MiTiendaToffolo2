import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import Spinner from "../Spinner/Spinner";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { categoryId } = useParams();
  console.log(categoryId);
  console.log(products);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((resp) => resp.json())
      .then((json) => setProducts(json));
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

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
