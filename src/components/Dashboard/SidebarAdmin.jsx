import React from 'react';
import {Box, Button, ListItemIcon, ListItemText} from "@mui/material";
import Drawer from "@mui/material/Drawer";
import LogoutIcon from '@mui/icons-material/Logout';
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import HomeIcon from '@mui/icons-material/Home';
import InventoryIcon from '@mui/icons-material/Inventory';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import {Link} from "react-router-dom";
//dashboard-admin/product-create
const items = [
    {
        item: 'Home',
        icon: <HomeIcon fontSize="large" />,
        route: '/'
    },
    {
        item: 'Productos',
        icon: <InventoryIcon fontSize="large"/>,
        route: ''
    },
    {
        item: 'Ordenes',
        icon: <LibraryBooksIcon fontSize="large"/>,
        route: ''
    },
    {
        item: 'Crear productos',
        icon: <AddBoxIcon fontSize="large"/>,
        route: 'product-create'
    }
]
const SidebarAdmin = () => {

    const handleClick = () => {
        console.log("Hola")
    }

    return (
        <Drawer
            variant="permanent"
            sx={{
                display:'flex',
                bgcolor: "#a64141",
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
            }}
        >
            <Box sx={{bgcolor: "#efefef", height: '100%'}}>
                <Box sx={{height: 100, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <AppShortcutIcon sx={{ fontSize: 40 }} />
                </Box>
                <Divider />
                <List >
                    {items.map((item) => (
                        <ListItem key={item.item} disablePadding>
                            <Link to={item.route} style={{ textDecoration: 'none', color: "#130c0c" }}>
                                {
                                    <ListItemButton sx={{mb: 5}}>
                                        <ListItemIcon >
                                            {item.icon}
                                        </ListItemIcon>
                                        <ListItemText primary={item.item} />
                                    </ListItemButton>
                                }
                            </Link>
                        </ListItem>
                    ))}
                </List>
                <Button
                    sx={{width: '100%', mt: 7}}
                    startIcon={<LogoutIcon />}
                >
                    Cerrar sesion
                </Button>

            </Box>
        </Drawer>
    );
};

export default SidebarAdmin;