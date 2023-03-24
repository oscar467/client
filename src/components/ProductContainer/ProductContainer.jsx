import Grid from "@mui/material/Unstable_Grid2";
import React from "react";
import Product from "../Product/Product";

const ProductContainer = ({products}) => {

  return (
      <>
          {
              products?.map(product => (
                  <Grid sx={{ mb: 4 }} xs={2} sm={4} md={4} lg={4} key={product.id}>
                      <Product product={product} />
                  </Grid>
              ))
          }
      </>
  );
};

export default ProductContainer;
