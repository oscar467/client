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

const Product = ({ product }) => {
  return (
    <Card sx={{ maxWidth: "250" }}>
      <CardActionArea sx={{ maxWidth: "250" }}>
        <CardMedia
          component="img"
          alt="placeholder"
          image={product.image}
          sx={{ width: 250, maxHeight: 400, margin: 0 }}
        />
        <CardContent sx={{ maxWidth: "250" }}>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
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
  );
};

export default Product;
