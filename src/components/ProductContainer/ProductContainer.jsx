import Grid from "@mui/material/Unstable_Grid2";
import { Container } from "@mui/system";
import React from "react";
import Product from "../Product/Product";

const ProductContainer = (products) => {
  const renderProducts = products.products?.map((product) => (
    <Grid
      key={product.id}
      xs={2}
      sm={4}
      md={4}
      lg={3}
      display="flex"
      flexDirection={"column"}
      alignItems="center"
    >
      <Product product={product} />
    </Grid>
  ));

  return (
    <Container>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        justifyContent={"center"}
        columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
        sx={{ margin: "20px 4px 10px 4px" }}
      >
        {renderProducts}
      </Grid>
      {/* <Product/> */}
    </Container>
  );
};

export default ProductContainer;
