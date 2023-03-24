import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import ProductCatalog from "./components/ProductCatalog/ProductCatalog";
import ProductCreate from "./components/ProductCreate/ProductCreate";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import QuienesSomos from "./components/Footer/quienessomos";
import Promociones from "./components/Footer/promociones";
import TerminosyCondiciones from "./components/Footer/terminosycondiciones";
import CambiosyDevoluciones from "./components/Footer/cambiosydevoluciones";
import Confidencialidad from "./components/Footer/confidencialidad";
import Envios from "./components/Footer/envios";
import PreguntasFrecuentes from "./components/Footer/preguntasfrecuentes";
import Contactanos from "./components/Footer/contactanos";
import MetodosdePago from "./components/Footer/metodosdepago";
import Detail from "./components/Detail/Detail";
import ContainerFormRegisterUser from "./components/RegisterUser/ContainerFormRegisterUser";
import ContainerLogin from "./components/FormLogin/ContainerLogin";

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
        <Route path="/QuienesSomos" element={<QuienesSomos />} />
        <Route path="/Promociones" element={<Promociones />} />
        <Route path="/MetodosdePago" element={<MetodosdePago />} />
        <Route path="/TerminosyCondiciones"element={<TerminosyCondiciones />}/>
        <Route path="/CambiosyDevoluciones"element={<CambiosyDevoluciones />}/>
        <Route path="/Confidencialidad" element={<Confidencialidad />} />
        <Route path="/Envios" element={<Envios />} />
        <Route path="/PreguntasFrecuentes" element={<PreguntasFrecuentes />} />
<<<<<<< HEAD
        <Route path="/Contactanos" element={<Contactanos />} />
=======
        <Route path="/Contáctanos" element={<Contactanos />} />
          <Route path="/register-user" element={<ContainerFormRegisterUser/>} />
          <Route path="/login" element={<ContainerLogin/>} />
>>>>>>> 60b7d4b5d2c0e86ffd919bc589a0a7a3cc3d8c92
      </Routes>
    </div>
  );
}

export default App;
