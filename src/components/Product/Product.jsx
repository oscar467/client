import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";

const useStyles = makeStyles((theme) => ({
  link: {
    color: "white",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

const Product = ({ product }) => {
  const classes = useStyles();
  return (
    <>
      {product ? (
        <Link
          to={`/ProductCatalog/product/${product.id}`}
          className={classes.link}
        >
          <Card
            sx={{
              maxWidth: "250",
              height: "500px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CardActionArea sx={{ maxWidth: "250" }}>
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
            <CardActions sx={{ maxWidth: "250" }}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<AddShoppingCartIcon />}
                size="medium"
              >
                Add To Cart
              </Button>
            </CardActions>
          </Card>
        </Link>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Product;
