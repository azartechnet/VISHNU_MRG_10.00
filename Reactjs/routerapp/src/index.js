import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./pages/Layout";

import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Login from "./pages/Login";
export default function App()
{
  return(
    <BrowserRouter>
    <Routes>
      <Route element={<Layout/>}>
         <Route index element={<Home/>}/>
         <Route path="contact" element={<Contact/>}/>
         <Route path="login" element={<Login/>}/>
          <Route path="product" element={<Product/>}/>
         
      </Route>
    </Routes>
    </BrowserRouter>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)