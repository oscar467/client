import React from 'react';
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <React.Fragment>
            <NavBar />
            <Outlet />
            <Footer />
        </React.Fragment>
    );
};

export default Layout;