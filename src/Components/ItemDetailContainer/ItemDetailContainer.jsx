import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import {
  doc,
  getDoc,
  getFirestore,
} from "firebase/firestore";


function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  let { id } = useParams();

  useEffect(() => {

    const db = getFirestore();

      const prod = doc(db,'mitienda',id);
  
      getDoc(prod).then((res) => {
        setProduct({ id: res.id, ...res.data() });
      });

    /*   fetch(`https://fakestoreapi.com/products/${id}`)
      .then((resp) => resp.json())
      .then((json) => setProduct(json)); */
  }, [id]);

  return (
    <div>
      <ItemDetail product={product} />
    </div>
  );
}

export default ItemDetailContainer;
