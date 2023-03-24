import React from 'react';
import {Box, Grid, Typography} from "@mui/material";
import ContainerFilters from "../ComponentsFilters/ContainerFilters";
import {Container} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {getAllProducts}  from '../../redux/actions/productsActions';
import ProductContainer from "../ProductContainer/ProductContainer";
import SortBy from "../SortBy/SortBy";

const ProductCatalog = () => {
    const dispatch = useDispatch()
    const allProducts = useSelector(state => state.productsReducer.products);

    React.useEffect(() => {
        dispatch(getAllProducts())
    },[])

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: {
                        xs: "space-between",
                        lg: "flex-end",
                        md: "flex-end",
                    },
                    m: 3,
                }}
            >
                <SortBy />
            </Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: {
                        xs: "space-between",
                        lg: "flex-end",
                        md: "flex-end",
                    },
                    fontFamily: "Radley, serif",
                    m: 3,
                }}
            >
                <Box
                    sx={{
                        fontFamily: "Radley, serif",
                        mb: 2,
                        width: 250,
                        height: 500,
                        ml: 4,
                        display: { xs: "none", md: "block" },
                    }}
                >
                    <Typography variant="h5" sx={{ mb: 2, fontFamily: "Radley, serif" }}>
                        Filtrar por:{" "}
                    </Typography>
                    <ContainerFilters />
                </Box>
                <Container maxWidth="lg">
                    <Grid
                        maxWidth="lg"
                        container
                        sx={{gap: 2}}
                        columns={{ xs: 2, sm: 2, md: 10, lg: 12.4 }}
                    >
                        <ProductContainer products={allProducts} />
                    </Grid>
                </Container>
            </Box>
            
        </>
    );
};

export default ProductCatalog;
