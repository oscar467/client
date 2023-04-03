import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { removeFromCart } from "../../redux/actions/cartActions";
import { useDispatch } from "react-redux";

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
          <Grid container flex key={index}>
            <Grid item xs={4}>
              <img src={product.image} height={"150px"} />
            </Grid>
            <Grid item xs={8}>
              <Grid container flex>
                <Grid item xs={11}>
                  <Typography
                    variant="h4"
                    sx={{ backgroundColor: "whitesmoke" }}
                  >
                    Nombre: {product.name_product}
                  </Typography>
                </Grid>
                <Grid item xs={1}>
                  <button onClick={() => handleRemoveFromCart(product.id)}>
                    (X)
                  </button>
                </Grid>
              </Grid>
              <p>Cantidad: {product.quantity}</p>
              <p>precio unitario: {product.price}</p>
            </Grid>
          </Grid>
        ))}
      <Box sx={{ backgroundColor: "#ae3737" }}>
        <Typography variant="h3">Total: {myTotal}</Typography>
      </Box>
    </div>
  );
};
export default Cart;
