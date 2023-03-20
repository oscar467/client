import React from "react";
import ProductContainer from "../ProductContainer/ProductContainer";
import ContainerFilters from "../ComponentsFilters/ContainerFilters";
import { Box, Breadcrumbs, Container, Divider, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";

const ProductCatalog = () => {
  return (
    <>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Box sx={{ width: "90%", margin: "2rem 0 6rem 0" }}>
          <Stack direction={"column"} spacing={6}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link to="/">Home</Link>
              <Link to="/ProductCatalog">Product Catalog</Link>
            </Breadcrumbs>
            <Grid
              container
              direction={"row"}
              spacing={2}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Grid item xs={3}>
                <ContainerFilters />
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={8}>
                <ProductContainer />
              </Grid>
            </Grid>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default ProductCatalog;
