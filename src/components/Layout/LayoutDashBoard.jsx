import React from 'react';
import DashboardMain from '../Dashboard/DashboardMain';
import {Outlet} from "react-router-dom";
const LayoutDashBoard = () => {
    return (
        <React.Fragment>
            <DashboardMain />
            <Outlet/>
        </React.Fragment>
    );
};

export default LayoutDashBoard;