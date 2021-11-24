import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting="Somos Ojotas Impresas"/>
      <ItemCount initial={1} Stock={10} />
    </div>
  );
}

export default App;
