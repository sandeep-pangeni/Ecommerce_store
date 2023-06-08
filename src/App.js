import React from "react";
import { Route, Routes, } from 'react-router-dom'
import ProductListing from "./containers/ProductListing";
import ProductDetails from "./containers/ProductDetails";
import Header from './containers/Header';
import Error from "./containers/Error";
import "./App.css";


const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' Component={ProductListing} />
        <Route path='/product/:productId' Component={ProductDetails} />
        <Route path="*" Component={Error} />
      </Routes>
    </div>
  );
}

export default App;