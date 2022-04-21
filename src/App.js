import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Cart from './Components/Cart/Cart';
import CartContextProvider from './CartContext/CartContext';

function App() {
 
  return (
    <CartContextProvider>


  <Router>
    <div className="App">
      <NavBar/>
    <Routes>
      <Route path='/' element={<ItemListContainer/> }/>  
      <Route path='/category/:categoryId' element={<ItemListContainer/> }/>  
      <Route path='/Item/:id' element={<ItemDetailContainer/> }/>  
      <Route path='/cart' element={<Cart/> }/>  
     </Routes>
    </div>
  </Router>
   
   
  </CartContextProvider>

  );
}

export default App;
