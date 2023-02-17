import CartProvider from "./context/CartContext";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


import "./index.css";


// import App from './App';

import NavBar from "./components/navbar/NavBar.js";
import Home from "./components/home/Home.js";
import ItemListContainer from "./components/itemListContainer/ItemListContainer.js";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer.js";
import AboutUs from "./components/aboutUs/AboutUs.js";
import Footer from "./components/footer/Footer.js";
import Cart from "./components/cart/Cart.js"
import CartContainer from "./components/cartContainer/CartContainer";


import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            exact
            path="/carrito"
            element={<Cart/>}
          />
           <Route
            exact
            path="/formulario"
            element={<CartContainer/>}
          />
          <Route
            exact
            path="/productos"
            element={<ItemListContainer greeting="productos" />}
          />
          <Route
            exact
            path="/producto/:productoId"
            element={<ItemDetailContainer />}
          />
          <Route
            exact
            path="/categoria/:categoriaId"
            element={<ItemListContainer />}
          />
          <Route exact path="/nosotros" element={<AboutUs />} />
        </Routes>

        <Footer año={new Date().getFullYear()}></Footer>
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
