import NavBar from "./components/NavBar"
import './App.css';

import ItemListContainer from "./conteiner/ItemListContainer";
import ItemDetailConteiner from "./conteiner/ItemDetailConteiner";

function App() {
  return (
    <div className="">
      <NavBar/>
      <ItemDetailConteiner/>
    </div>
  );
}

export default App;
