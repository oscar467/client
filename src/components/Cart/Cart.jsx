import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { removeFromCart } from "../../redux/actions/cartActions";
import { useDispatch } from "react-redux";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const Cart = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState();
  const [myTotal, setMyTotal] = useState();

  useEffect(() => {
    const myCart = JSON.parse(localStorage.getItem("cart")) || {};
    const items = myCart.items || [];
    const total = myCart.total || [];
    setProducts(items);
    setMyTotal(total);
  }, []);

  const handleRemoveFromCart = (id) => {
    console.log(id);
    dispatch(removeFromCart(id));
    const myCart = JSON.parse(localStorage.getItem("cart")) || {};
    const items = myCart.items || [];
    const total = myCart.total || [];
    setProducts(items);
    setMyTotal(total);
  };

  return (
    <div>
      {products &&
        products.map((product, index) => (
          <Grid container flex key={index} sx={{marginTop:'20px'}} >
            <Card sx={{ display: 'flex', width:"500px", height:'150px' }}>
      <CardMedia
        component="img"
        sx={{ maxWidth: 150 }}
        image={product.image}
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h7" fontWeight="bold">
            {product.name_product}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            ${product.price}
          </Typography>
          <Typography variant="h6" component="div">
            {product.quantity}
          </Typography>
        </CardContent>
      </Box>
              <Box>
              <Button onClick={() => handleRemoveFromCart(product.id)}>
                <HighlightOffIcon/>
                </Button>
              </Box>
    </Card>
    </Grid>
        ))}
      <Box sx={{marginTop:'30px'}}>
        <Typography variant="h4">Total: {myTotal}</Typography>
      </Box>
      <Box>
        <Button
        variant="contained"
        color="primary"
        startIcon={<AttachMoneyIcon/>}
        size="medium"
        sx={{width:'500px'}}
        >
          pagar
        </Button>
      </Box>
    </div>
  );
};
export default Cart;