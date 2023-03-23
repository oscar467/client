import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import ProductCatalog from "./components/ProductCatalog/ProductCatalog";
import ProductCreate from "./components/ProductCreate/ProductCreate";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Tienda from "./components/Footer/tienda";
import Promociones from "./components/Footer/promociones";
import TerminosyCondiciones from "./components/Footer/terminosycondiciones";
import CambiosyDevoluciones from "./components/Footer/cambiosydevoluciones";
import Confidencialidad from "./components/Footer/confidencialidad";
import Envios from "./components/Footer/envios";
import PreguntasFrecuentes from "./components/Footer/preguntasfrecuentes";
import Contactanos from "./components/Footer/contactanos";
import Detail from "./components/Detail/Detail";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/ProductCatalog" element={<ProductCatalog />} />
        <Route
          path="/ProductCatalog/category/:category"
          element={<ProductCatalog />}
        />
        <Route path="/ProductCatalog/product/:id" element={<Detail />} />
        <Route path="/ProductCreate" element={<ProductCreate />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>

      <Footer />
      <Routes>
        <Route path="/Tienda" element={<Tienda />} />
        <Route path="/Promociones" element={<Promociones />} />
        <Route
          path="/TerminosyCondiciones"
          element={<TerminosyCondiciones />}
        />
        <Route
          path="/CambiosyDevoluciones"
          element={<CambiosyDevoluciones />}
        />
        <Route path="/Confidencialidad" element={<Confidencialidad />} />
        <Route path="/Envios" element={<Envios />} />
        <Route path="/PreguntasFrecuentes" element={<PreguntasFrecuentes />} />
        <Route path="/Contáctanos" element={<Contactanos />} />
      </Routes>
    </div>
  );
}

export default App;
