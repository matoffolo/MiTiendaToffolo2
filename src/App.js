import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

function App() {
 
  return (
  <Router>
    <div className="App">
      <NavBar/>
    <Routes>
      <Route path='/' element={<ItemListContainer/> }/>  
      <Route path='/category/:categoryId' element={<ItemListContainer/> }/>  
      <Route path='/Item/:id' element={<ItemDetailContainer/> }/>  
     </Routes>
    </div>
  </Router>
  );
}

export default App;
