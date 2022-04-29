/* eslint-disable react-hooks/rules-of-hooks */

import React, { useState, useContext, useEffect, cloneElement} from "react";
import { CartContext } from "../../CartContext/CartContext";
import { addDoc, collection, getDocs, getFirestore,query,where } from "firebase/firestore";



function formBuy() {
    const {cart, totalItem, precioTotal} = useContext (CartContext)
    const [buyer, setBuyer] = useState({
        name: '',
        apellido: '',
        email:'',
        telefono:'',
        direccion:'',
        provincia:'',
    })

    const handleOnChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value.toString()
        })
    }

    const terminarCompra =(e) =>{
        e.preventDefault()
        let data = {
            ...buyer,
            item: cart,
            totalItem,
            precioTotal

        }
        console.log({data})
    }   
useEffect(() => {
    const db = getFirestore();

    const ventasRef = collection(db, 'ventas')

    addDoc(ventasRef, buyer).then(({id})=>{
        console.log(id)
    })
 
}, []);
    

  return (
    <div>
     <div class="hidden sm:block" aria-hidden="true">
  <div class="py-5">
    <div class="border-t border-gray-200"></div>
  </div>
</div>

<div class="mt-10 sm:mt-0">
  <div class="md:grid md:grid-cols-3 md:gap-6">
    <div class="md:col-span-1">
      <div class="px-4 sm:px-0">
        <h3 class="text-lg font-medium leading-6 text-gray-900">COMPRA</h3>
        <p class="mt-1 text-sm text-gray-600">Complete el formulario para termianr con su compra</p>
      </div>
    </div>
    <div class="mt-5 md:mt-0 md:col-span-2">
      <form action="#" method="POST" onSubmit={terminarCompra}>
        <div class="shadow overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label for="first-name" class="block text-sm font-medium text-gray-700">NOMBRE</label>
                <input type="text" placeholder='Agrega tu nombre' name="name" id="first-name" autocomplete="given-name" onChange={handleOnChange} class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label for="last-name" class="block text-sm font-medium text-gray-700">APELLIDO</label>
                <input type="text" name="apellido" id="last-name" autocomplete="family-name" onChange={handleOnChange} class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
              </div>

              <div class="col-span-6 sm:col-span-4">
                <label for="email-address" class="block text-sm font-medium text-gray-700">EMAIL</label>
                <input type="text" name="email" id="email-address" autocomplete="email" onChange={handleOnChange} class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
              </div>
                <div class="col-span-6 sm:col-span-4">
                <label for="email-address" class="block text-sm font-medium text-gray-700">TELEFONO</label>
                <input type="number" name="telefono" id="email-address" autocomplete="telefono" onChange={handleOnChange} class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
              </div>
              <div class="col-span-6 sm:col-span-3">
                <label for="country" class="block text-sm font-medium text-gray-700">FORMA DE PAGO</label>
                <select id="country" name="country" autocomplete="country-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <option>Efectivo</option>
                  <option>Tarjeta de credito</option>
                  <option>Transferencia</option>
                </select>
              </div>

              <div class="col-span-6">
                <label for="street-address" class="block text-sm font-medium text-gray-700">DIRECCION</label>
                <input type="text" name="direccion" id="street-address" autocomplete="street-address" onChange={handleOnChange} class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
              </div>

              <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                <label for="city" class="block text-sm font-medium text-gray-700">CIUDAD</label>
                <input type="text" name="city" id="city" autocomplete="address-level2" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
              </div>

              <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                <label for="region" class="block text-sm font-medium text-gray-700">PROVINCIA</label>
                <input type="text" name="provincia" id="region" autocomplete="address-level1" onChange={handleOnChange} class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
              </div>

              <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                <label for="postal-code" class="block text-sm font-medium text-gray-700">CODIGO POSTAL</label>
                <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
              </div>
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">TERMINAR COMPRA</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
    </div>
  );
}

export default formBuy;
