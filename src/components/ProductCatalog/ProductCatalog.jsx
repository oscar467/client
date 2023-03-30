import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import ContainerFilters from "../ComponentsFilters/ContainerFilters";
import { Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/actions/productsActions";
import ProductContainer from "../ProductContainer/ProductContainer";
import SortBy from "../SortBy/SortBy";

const ProductCatalog = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.productsReducer.products);

  React.useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <Container fixed>
      <Box
        sx={{
          display: "flex",
          justifyContent: {
            xs: "space-between",
            lg: "space-between",
            md: "space-between",
          },
          m: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: {
              lg: "flex-start",
              md: "flex-start",
            },
            m: 3,
          }}
        >
          <Typography variant="h5" sx={{ mb: 2, fontFamily: "Radley, serif" }}>
            Filtrar por:
          </Typography>
          <ContainerFilters />
        </Box>
        <SortBy />
      </Box>
      <Container maxWidth="lg">
        <Grid
          maxWidth="lg"
          container
          sx={{ gap: 2 }}
          columns={{ xs: 2, sm: 2, md: 10, lg: 12.4 }}
        >
          <ProductContainer products={allProducts} />
        </Grid>
      </Container>
    </Container>
  );
};

export default ProductCatalog;
