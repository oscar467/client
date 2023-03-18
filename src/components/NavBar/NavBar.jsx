import React from "react";
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
import { Grid, IconButton, Stack, TextField } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { useEffect, useState } from "react";
import ScreenSearchDesktopIcon from "@mui/icons-material/ScreenSearchDesktop";
const drawerWidth = 240;

const NavBar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth < 768);
    }

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }

    // limpiar el event listener cuando el componente se desmonte
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", backgroundColor: "#212121", height: "100%" }}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        backgroundColor="#ae3737"
        height={"100px"}
      >
        <Typography variant="h4" color={"white"} fontWeight={"bold"}>
          Menu
        </Typography>
      </Grid>
      <Divider />
      <Box sx={{ width: "100%" }}>
        <Stack spacing={2} alignItems={"center"}>
          <List>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <Link to="/">Home</Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <Link to="/ProductCatalog">Catalog</Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <Link to="/ProductCreate">Create</Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <Link to="/Contact">Contact</Link>
              </ListItemButton>
            </ListItem>
          </List>
        </Stack>
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{
        marginBottom: "80px",
        maxHeight: "100px",
      }}
    >
      <CssBaseline />
      <AppBar
        component="nav"
        className="navbar"
        sx={{
          maxHeight: "100px",
        }}
      >
        <Toolbar
          sx={{
            backgroundColor: "#ae3737",
            maxHeight: "100px",
            justifyContent: "space-between",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
            <CardMedia
              component="img"
              image="https://res.cloudinary.com/dfdzlzu79/image/upload/v1678920910/logotemporal.png"
              alt="logocel"
              sx={{ maxHeight: "80px", marginLeft: "10px" }}
            />
          </IconButton>

          <Typography
            variant="h6"
            component="div"
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <CardMedia
              component="img"
              image="https://res.cloudinary.com/dfdzlzu79/image/upload/v1678920910/logotemporal.png"
              alt="logo"
              sx={{
                maxHeight: "120px",
                maxWidth: "25vw",
              }}
            />
          </Typography>

          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            marginLeft={"15vw"}
          >
            <Box
              sx={{
                background: "#212121",
                height: "80px",
                width: "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                display: { xs: "none", md: "block" },

                marginInline: "20px",
              }}
            >
              <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="stretch"
              >
                <Button
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    height: "80px",
                    fontSize: "16px",
                  }}
                >
                  <Link to="/">Home</Link>
                </Button>
                <Button
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    height: "80px",
                    fontSize: "16px",
                  }}
                >
                  <Link to="/ProductCatalog">Catalog</Link>
                </Button>
                <Button
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    height: "80px",
                    fontSize: "16px",
                  }}
                >
                  <Link to="/ProductCreate">Create</Link>
                </Button>
                <Button
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    height: "80px",
                    fontSize: "16px",
                  }}
                >
                  <Link to="/Contact">Contact</Link>
                </Button>
              </Grid>
            </Box>
          </Grid>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#21212121",
              width: "25vw",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <ScreenSearchDesktopIcon
              sx={{
                color: "action.active",
                mr: 2,
                my: 0.5,
                marginTop: "18px",
              }}
            />
            <TextField
              id="input-with-sx"
              label="Search..."
              variant="standard"
              sx={{ width: "25vw" }}
            />
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
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Grid>
  );
};

export default NavBar;
