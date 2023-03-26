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
// import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Grid, IconButton, Stack, TextField } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { useEffect, useState } from "react";
import ScreenSearchDesktopIcon from "@mui/icons-material/ScreenSearchDesktop";
import { makeStyles } from "@mui/styles";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  link: {
    color: "white",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

const NavBar = (props) => {
  const classes = useStyles();
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
      sx={{ textAlign: "center", backgroundColor: "black", height: "100%" }}
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
                <Link to="/" className={classes.link}>
                  Home
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <Link to="/ProductCatalog" className={classes.link}>
                  Catalog
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <Link to="/ProductCreate" className={classes.link}>
                  Create
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <Link to="/Contact" className={classes.link}>
                  Contact
                </Link>
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
      height="80px"
    >
      <CssBaseline />
      <AppBar component="nav" className="navbar" height="80px">
        <Toolbar
          height="80px"
          sx={{
            backgroundColor: "black",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#d9d9d966",
              padding: "10px",
              width: "70px",
              height: "70px",
              borderRadius: "10px",
              display: { md: "none" },
              margin: "0px",
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { md: "none" }, margin: "0px" }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Grid
            container
            direction="row"
            height={"80px"}
            alignItems="center"
            justifyContent="center"
            sx={{ display: { md: "none" } }}
          >
            <CardMedia
              component="img"
              image="https://res.cloudinary.com/dfdzlzu79/image/upload/v1678920910/logotemporal.png"
              alt="logocel"
              sx={{ height: "60px", width: "auto" }}
            />
          </Grid>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#d9d9d966",
              width: "255px",
              borderRadius: "10px",
              maxHeight: "68px",
              display: { xs: "none", md: "block" },
            }}
          >
            <CardMedia
              component="img"
              image="https://res.cloudinary.com/dfdzlzu79/image/upload/v1678920910/logotemporal.png"
              alt="Logo"
              sx={{
                marginTop: "-32px",
                marginInline: "8px",
                paddingRight: "16px",
                height: "auto",
                width: "250px",
              }}
            />
          </Box>

          <Grid
            container
            direction="row"
            height={"100%"}
            alignItems="center"
            justifyContent="center"
          >
            <Box
              sx={{
                background: "#d9d9d966",
                height: "70px",
                marginBlock: "5px",
                width: "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                display: { xs: "none", md: "block" },
                left: "65vw",
                borderRadius: "10px",
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
                  <Link to="/" className={classes.link}>
                    Home
                  </Link>
                </Button>
                <Button
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    height: "80px",
                    fontSize: "16px",
                  }}
                >
                  <Link to="/ProductCatalog" className={classes.link}>
                    Catalog
                  </Link>
                </Button>
                <Button
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    height: "80px",
                    fontSize: "16px",
                  }}
                >
                  <Link to="/ProductCreate" className={classes.link}>
                    Create
                  </Link>
                </Button>
                <Button
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    height: "80px",
                    fontSize: "16px",
                  }}
                >
                  <Link to="/Contact" className={classes.link}>
                    Contact
                  </Link>
                </Button>
              </Grid>
            </Box>
          </Grid>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#d9d9d966",
              width: "255px",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <ScreenSearchDesktopIcon
              sx={{
                color: "white",
                mr: 2,
                my: 0.5,
                marginTop: "18px",
              }}
            />
            <TextField
              label="Search..."
              InputLabelProps={{ style: { color: "white" } }}
              variant="standard"
              inputProps={{
                style: {
                  color: "white",
                  borderBottom: "2px solid white",
                },
              }}
              sx={{
                width: "255px",
                "&:hover": {
                  //borderBottom: "2px solid #ae3737",
                },
                "&:focus": {
                  //borderBottom: "2px solid #ae3737",
                },
              }}
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
