import Grid from "@mui/material/Unstable_Grid2";
import React from "react";
import Product from "../Product/Product";

const ProductContainer = ({ products }) => {
  return (
    <>
      {products?.map((product) => (
        <Grid item sx={{ mb: 4 }} xs={12} sm={6} md={4} lg={3} key={product.id}>
          <Product product={product} />
        </Grid>
      ))}
    </>
  );
};

export default ProductContainer;
