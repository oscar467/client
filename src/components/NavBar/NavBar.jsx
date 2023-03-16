import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";

const drawerWidth = 240;

const NavBar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Menu
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <Link to="/">Home</Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <Link to="/ProductCatalog">Product Catalog</Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <Link to="/ProductCreate">Product Create</Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <Link to="/Contact">Contact</Link>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        display: "flex",
        marginBottom: "80px",
        maxHeight: "6vh",
      }}
    >
      <CssBaseline />
      <AppBar
        component="nav"
        className="navbar"
        sx={{
          backgroundColor: "#ae3737",
          boxShadow:
            "inset 27px 27px 54px #7a2727, inset -27px -27px 54px #e24848",
          maxHeight: "12vh",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, maxHeight: "6vh" }}
          >
            <MenuIcon />
            <CardMedia
              component="img"
              image="https://res.cloudinary.com/dfdzlzu79/image/upload/v1678920910/logotemporal.png"
              alt="logo"
              sx={{ maxHeight: "12vh", marginLeft: "25vw" }}
            />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <CardMedia
              component="img"
              image="https://res.cloudinary.com/dfdzlzu79/image/upload/v1678920910/logotemporal.png"
              alt="logo"
              sx={{ maxHeight: "8vh", maxWidth: "250px" }}
            />
          </Typography>
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
              background: "#212121",
              height: "80px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Button sx={{ color: "white", fontWeight: "bold", margin: "10px" }}>
              <Link to="/">Home</Link>
            </Button>
            <Button sx={{ color: "white", fontWeight: "bold", margin: "10px" }}>
              <Link to="/ProductCatalog">Product Catalog</Link>
            </Button>
            <Button sx={{ color: "white", fontWeight: "bold", margin: "10px" }}>
              <Link to="/ProductCreate">Product Create</Link>
            </Button>
            <Button sx={{ color: "white", fontWeight: "bold", margin: "10px" }}>
              <Link to="/Contact">Contact</Link>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default NavBar;
