import React, { useState } from "react";
import ProductContainer from "../ProductContainer/ProductContainer";
import ContainerFilters from "../ComponentsFilters/ContainerFilters";
import { Box, Breadcrumbs, Container, Divider, Stack } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  getProductsCategory,
} from "../../redux/actions/productsActions";
import { useEffect } from "react";
import Loading from "../Loading/Loading";

const ProductCatalog = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const [category, setCategory] = useState(params.category);
  const allProducts = useSelector((state) => state.productsReducer.products);
  const productsCategory = useSelector(
    (state) => state.productsReducer.productsCategory
  );
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    //dispatch(getProductsCategory(category));
    dispatch(getAllProducts()).then(setLoading(false));
  }, [category]);
  return (
    <>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Box sx={{ width: "90%", margin: "2rem 0 6rem 0" }}>
          <Stack direction={"column"} spacing={6}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link to="/">Home</Link>
              <Link to="/ProductCatalog">Product Catalog</Link>
            </Breadcrumbs>
            <ContainerFilters />

            <Divider orientation="horizontal" flexItem />
            {loading ? (
              <Loading /*productsCategory[0].Products*/ />
            ) : (
              <ProductContainer products={allProducts} />
            )}
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default ProductCatalog;
