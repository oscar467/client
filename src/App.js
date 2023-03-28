import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import ProductCatalog from "./components/ProductCatalog/ProductCatalog";
import ProductCreate from "./components/ProductCreate/ProductCreate";
import Contact from "./components/Contact/Contact";
import Promociones from "./components/Footer/promociones";
import TerminosyCondiciones from "./components/Footer/terminosycondiciones";
import CambiosyDevoluciones from "./components/Footer/cambiosydevoluciones";
import Confidencialidad from "./components/Footer/confidencialidad";
import Envios from "./components/Footer/envios";
import PreguntasFrecuentes from "./components/Footer/preguntasfrecuentes";
import Contactanos from "./components/Footer/contactanos";
import Detail from "./components/Detail/Detail";
import ContainerFormRegisterUser from "./components/RegisterUser/ContainerFormRegisterUser";
import ContainerLogin from "./components/FormLogin/ContainerLogin";
import {currentUser} from './redux/actions/userActions';
import {useDispatch} from "react-redux";
import Layout from "./components/Layout/Layout";
import LayoutDashBoard from "./components/Layout/LayoutDashBoard";



function App() {
    const dispatch = useDispatch();
    React.useEffect(() => {
        const dataUser = localStorage.getItem('auth');
        if (dataUser){
            dispatch(currentUser(JSON.parse(dataUser)))
        }
    },[dispatch])
    return (
        <React.Fragment>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/Confidencialidad" element={<Confidencialidad />} />
                    <Route path="/Envios" element={<Envios />} />
                    <Route path="/PreguntasFrecuentes" element={<PreguntasFrecuentes />} />
                    <Route path="/Contáctanos" element={<Contactanos />} />
                    <Route path="/register-user" element={<ContainerFormRegisterUser/>} />
                    <Route path="/login" element={<ContainerLogin/>} />
                    <Route path="/Promociones" element={<Promociones />} />
                    <Route exact path="/" element={<Home />} />
                    <Route path="/ProductCatalog" element={<ProductCatalog />} />
                    <Route path="/ProductCatalog/category/:category" element={<ProductCatalog />}/>
                    <Route path="/ProductCatalog/product/:id" element={<Detail />} />
                    <Route path="/Contact" element={<Contact />} />
                    <Route path="/TerminosyCondiciones" element={<TerminosyCondiciones />}/>
                    <Route path="/CambiosyDevoluciones" element={<CambiosyDevoluciones />}/>
                </Route>
            </Routes>
            <Routes>
                <Route path="dashboard-admin" element={<LayoutDashBoard />} >
                    <Route path="product-create" element={<ProductCreate />} />
                </Route>
            </Routes>
        </React.Fragment>
    );
}

export default App;

