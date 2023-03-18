import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import {products} from '../../data/index';
import Product from "../Product/Product";

const ProductContainer = () => {
   console.log(products)
  const  renderProducts = products?.map(product => (
    <Grid item key={product.id} display='flex' flexDirection={'column'}
      alignItems='center'>
        <Product product = {product}/>
    </Grid>
  ));
  

  return (
    <Container>
      <Grid 
        contairner 
        justifyContent={'center'} 
        sx={{margin: '20px 4px 10px 4px' }} 
      >
        {renderProducts}
      </Grid>
      {/* <Product/> */}
    </Container>

  );
};

export default ProductContainer;
