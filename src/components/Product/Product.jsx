import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
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
        <Container sx={{maxWidth:'255px'}}>
          <CardActionArea sx={{ maxWidth: "255px" }}>
        <Link
          to={`/ProductCatalog/product/${product.id}`}
          className={classes.link}
        >
          <Card
            sx={{
              maxWidth: "255px",
              height: "350px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
              <CardMedia
                component="img"
                alt="placeholder"
                image={product.image}
                sx={{ width: 250, maxHeight: 250, margin: 0 }}
              />
              <CardContent sx={{ maxWidth: "250px" }}>
                <Typography gutterBottom variant="h5" component="div" sx={{fontSize:'medium', fontWeight:'bold'}}>
                  {product.name_product}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ${product.price}
                </Typography>
              </CardContent>
          </Card>
        </Link>
            </CardActionArea>
        <CardActions sx={{ maxWidth: "255px" }}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<AddShoppingCartIcon />}
                size="medium"
                sx={{width:'255px'}}
                onClick={handleAddToCart}
              >
                Add To Cart
              </Button>
            </CardActions>
        </Container>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Product;
