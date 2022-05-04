/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useContext, } from "react";
import { CartContext } from "../../CartContext/CartContext";
import { addDoc, collection, getFirestore,serverTimestamp} from "firebase/firestore";
import { Modal,Button } from "react-bootstrap";
import { Link } from "react-router-dom";




function formBuy() {
    const {cart, totalItem, precioTotal, clear } = useContext(CartContext)
    const [buyer, setBuyer] = useState({
        nombre: '',
        apellido: '',
        email:'',
        telefono:'',
        direccion:'',
        provincia:'',
    })

    const [codigo, setCodigo] = useState("")
    

    const handleOnChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value.toString()
        })
    }

    const order = {
           ...buyer,
            item: cart,
            total: totalItem,
            precio: precioTotal,
            time:serverTimestamp()
        }

    const terminarVenta = ()=>{
        const db = getFirestore();
        const ordersCollection = collection(db, "orders")
        
        addDoc(ordersCollection, order).then(({id})=>{
            setCodigo(id);
            clear()
        })
    }
 
        const [show, setShow] = useState(false);
        
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
   
  return (
    <div>
         {codigo == "" ? null:
     <><Button variant="primary" onClick={handleShow}>
                 Click para conocer su numero de orden
              </Button>
              <Link to='/cart' ><Modal
                  show={show}
                  onHide={handleClose}
                  keyboard={false}
              >
                      <Modal.Header closeButton>
                          <Modal.Title>COMPRA EXITOSA</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                          Su numero de Orden es : {codigo}
                      </Modal.Body>
                      <Modal.Footer>
                          <Button variant="primary" onClick={handleClose}>
                              Close
                          </Button>

                      </Modal.Footer>
                  </Modal></Link></>}
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
      <form action="#" method="POST" onSubmit={(e) => { e.preventDefault(); terminarVenta(); e.target.reset() }}>
        <div class="shadow overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label for="first-name" class="block text-sm font-medium text-gray-700">NOMBRE</label>
                <input name= 'nombre' onChange={handleOnChange} type="text" placeholder='Agrega tu nombre' id="first-name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label for="last-name" class="block text-sm font-medium text-gray-700">APELLIDO</label>
                <input name= 'apellido' onChange={handleOnChange}type="text"  id="last-name" autocomplete="family-name"  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
              </div>

              <div class="col-span-6 sm:col-span-4">
                <label for="email-address" class="block text-sm font-medium text-gray-700">EMAIL</label>
                <input name= 'email' onChange={handleOnChange}type="text"  id="email-address" autocomplete="email"  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
              </div>
                <div class="col-span-6 sm:col-span-4">
                <label for="email-address" class="block text-sm font-medium text-gray-700">TELEFONO</label>
                <input name= 'telefono' onChange={handleOnChange}type="number"  id="email-address" autocomplete="telefono"  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
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
                <input name= 'direccion' onChange={handleOnChange}type="text" id="street-address" autocomplete="street-address"  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
              </div>

              <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                <label for="city" class="block text-sm font-medium text-gray-700">CIUDAD</label>
                <input type="text" name="city" id="city" autocomplete="address-level2" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
              </div>

              <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                <label for="region" class="block text-sm font-medium text-gray-700">PROVINCIA</label>
                <input type="text" name= 'provincia' onChange={handleOnChange} id="region" autocomplete="address-level1"  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
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

)
};
  

export default formBuy;
