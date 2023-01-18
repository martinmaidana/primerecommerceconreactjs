//####################
//IMPORTACIONES
//##################

//1.MODULOS

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//2.ESTILOS
import "./index.css";


//3.COMPONENTES
// import App from './App';

import NavBar from "./components/navbar/NavBar.js";
import Home from "./components/home/Home.js";
import ItemListContainer from "./components/itemListContainer/ItemListContainer.js";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer.js"
import AboutUs from "./components/aboutUs/AboutUs.js";
import Footer from "./components/footer/Footer.js";


//4.CORE . WEBVITALS
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar/>
      <Routes>
         
         <Route path='/' element={<Home/>}/>
         <Route exact path='/productos' element={<ItemListContainer greeting="productos"/>}/>
         <Route exact path='/producto/:productoId' element={<ItemDetailContainer/>}/>

         {/* <Route exact path='/catas' element={<catas/>}/> */}
         <Route exact path='/nosotros' element={<AboutUs/>}/>
         //uvas
   
          
         
        
      </Routes>

      <Footer año={new Date().getFullYear()}></Footer>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
