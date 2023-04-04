import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";

const useStyles = makeStyles((theme) => ({
  link: {
    color: "black",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

const Product = ({ product }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const myProduct = useSelector((state) => product);
  const handleAddToCart = () => {
    console.log("entro handdle");
    dispatch(addToCart(myProduct));
  };
  return (
    <>
      {product ? (
        <Card
          sx={{
            maxWidth: "270px",
            display: "flex",
            height: "600px",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link
            to={`/ProductCatalog/product/${product.id}`}
            className={classes.link}
          >
            <CardActionArea sx={{ maxWidth: "250", height: "550px" }}>
              <CardMedia
                component="img"
                alt="placeholder"
                image={product.image}
                sx={{ width: 250, maxHeight: 400, margin: 0 }}
              />
              <CardContent sx={{ maxWidth: "250" }}>
                <Typography gutterBottom variant="h5" component="div">
                  {product.name_product}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.price}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Link>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddShoppingCartIcon />}
            size="medium"
            onClick={handleAddToCart}
          >
            Add To Cart
          </Button>
        </Card>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Product;
