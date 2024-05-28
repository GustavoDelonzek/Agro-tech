import React, {useEffect, useState} from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import api from "./services/api"
import AddProduct from "./components/AddProduct";
function App() {
  const [teste, setTeste] = useState({});


  

  return (
    <div className="App">
      <h1>CRUD de Produtos Agrícolas</h1>
      <AddProduct/>
      <hr></hr>
      <ProductList />
      <p>{teste.name}</p>

      
      <p>{teste.price}</p>
    </div>
  );
}

export default App;