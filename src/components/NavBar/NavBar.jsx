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
import {
  Badge,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Modal,
  Stack,
  TextField,
  Tooltip,
} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { useEffect, useState } from "react";
import ScreenSearchDesktopIcon from "@mui/icons-material/ScreenSearchDesktop";
import { makeStyles } from "@mui/styles";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useDispatch } from "react-redux";
import { currentUser, logout } from "../../redux/actions/userActions";
import Cart from "../Cart/Cart";
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
  const dispatch = useDispatch();
  const classes = useStyles();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const [anchorElUser, setAnchorElUser] = useState();

  const [openCart, setOpenCart] = useState(false);

  const userLog = localStorage.getItem("auth");

  //const cartLog = localStorage.getItem("cart");
  const cartLog = JSON.parse(localStorage.getItem("cart")) || {};

  const [productsCount, setProductsCount] = useState(0);

  useEffect(() => {
    dispatch(currentUser());

    const items = cartLog.items || [];
    const count = items.length || [];
    setProductsCount(count);
    console.log(items);
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
  }, [dispatch]);

  //Modal del cart
  const handleOpenCart = () => setOpenCart(true);
  const handleCloseCart = () => setOpenCart(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    handleCloseUserMenu();
    dispatch(logout());
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
    <>
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
                padding: "10px",
                width: "70px",
                height: "70px",
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
                alignItems: "center",
                justifyContent: "center",
                width: "255px",
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
              paddingLeft="8%"
              direction="row"
              height={"100%"}
              alignItems="center"
              justifyContent="center"
            >
              <Box
                sx={{
                  height: "70px",
                  marginBlock: "5px",
                  width: "auto",
                  alignItems: "center",
                  justifyContent: "space-around",
                  display: { xs: "none", md: "block" },
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
                width: "255px",
                padding: "10px",
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
            <Box>
              <Tooltip title="Favoritos">
                <IconButton>
                  <FavoriteIcon
                    fontSize="large"
                    sx={{
                      color: "white",
                    }}
                  />
                </IconButton>
              </Tooltip>
            </Box>
            <Box>
              <Tooltip title="Carrito">
                <IconButton color="#ffffff" onClick={handleOpenCart}>
                  {productsCount && (
                    <Badge
                      badgeContent={productsCount ? productsCount : 0}
                      color="primary"
                    >
                      <ShoppingCartIcon
                        fontSize="large"
                        sx={{ color: "white" }}
                      />
                    </Badge>
                  )}
                </IconButton>
              </Tooltip>
            </Box>
            <Box>
              <Tooltip title="Login/Registro">
                <IconButton onClick={handleOpenUserMenu}>
                  <AccountCircleIcon
                    fontSize="large"
                    sx={{
                      color: "white",
                    }}
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <Box
                  sx={{
                    backgroundColor: "black",
                  }}
                >
                  {userLog ? (
                    <>
                      <MenuItem key="perfil">
                        <Typography textAlign="center">
                          <Link to="/Account" className={classes.link}>
                            perfil
                          </Link>
                        </Typography>
                      </MenuItem>
                      <MenuItem key="logout">
                        <Typography textAlign="center">
                          <Link
                            to="/"
                            className={classes.link}
                            onClick={handleLogout}
                          >
                            cerrar sesion
                          </Link>
                        </Typography>
                      </MenuItem>
                    </>
                  ) : (
                    <>
                      <MenuItem key="login">
                        <Typography textAlign="center">
                          <Link to="/login" className={classes.link}>
                            Login
                          </Link>
                        </Typography>
                      </MenuItem>
                      <MenuItem key="Register">
                        <Typography textAlign="center">
                          <Link to="/register-user" className={classes.link}>
                            Register
                          </Link>
                        </Typography>
                      </MenuItem>
                    </>
                  )}
                </Box>
              </Menu>
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

      <Modal open={openCart} onClose={handleCloseCart}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600,

            borderRadius: "5px",
            backgroundColor: "white",
            boxShadow: "5px 5px 5px grey",
            p: 4,
          }}
        >
          <Typography sx={{ textAlign: "center" }} variant="h4">
            mi carrito
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            my products:
          </Typography>
          <Cart />
        </Box>
      </Modal>
    </>
  );
};

export default NavBar;
