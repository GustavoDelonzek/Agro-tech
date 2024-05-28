import React, { useEffect, useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import api from "./services/api"
import AddProduct from "./components/AddProduct";
function App() {

  return (
    <div className="App">
      <h1 className="p-3 fonte-lato">Lista de Produtos Cadastrados</h1>
      
      <ProductList />
      <AddProduct />
    </div>
  );
}

export default App;