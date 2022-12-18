
import React from 'react';
import ReactDOM from 'react-dom';

// import page files
import App from './App';
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Chapter from './pages/Chapter';


import {BrowserRouter, Routes, Route} from 'react-router-dom';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product" element={<Product />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/chapter" element={<Chapter />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);