import React from "react";
import "./App.css";
import ProductList from "./components/ProductList";
function App() {
  return (
    <div className="App">
      <h1>CRUD de Produtos Agrícolas</h1>
      <ProductList />
    </div>
  );
}

export default App;