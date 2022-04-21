import React, { useState, createContext, useEffect } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  console.log(total)


  const addToCart = (product) => {
    const indexProduct = cart.findIndex(
      (cartItem) => cartItem.id === product.id
    );
    if (indexProduct !== -1) {
      const newCart = [...cart];
      newCart[indexProduct].count = newCart[indexProduct].count +=
        product.count;
      setCart(newCart);
    } else {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  const buyAll = () => setCart([]);


  useEffect(()=>{
    
    setTotal(cart.reduce((total, product)=>total+=product?.product?.price * product?.product?.cantidad, 0));
  }, [cart])


  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, buyAll, total }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
