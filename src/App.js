import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import Header from "./containers/Header";
import "./App.css";
import ProductDetails from "./containers/ProductDetails";

const App = () => {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>

          <Route path="/" exact Component={ProductListing} />
          <Route path="/product/:productId" Component={ProductDetails} />
          <Route path="*">404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;