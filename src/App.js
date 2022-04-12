import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'

function App() {
 
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer/>
      <h2>Practico Consumiendo Api</h2>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
