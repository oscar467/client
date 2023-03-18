import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import {products} from '../../data/index';
import Product from "../Product/Product";

const ProductContainer = () => {
   console.log(products)
  const  renderProducts = products?.map(product => (
    <Grid 
      item 
      key={product.id} 
      xs={2}
      sm={4}
      md={4}
      display='flex' 
      flexDirection={'column'}
      alignItems='center'>
        <Product product = {product}/>
    </Grid>
  ));
  

  return (
    <Container>
      <Grid 
        contairner
        spacing={{ xs:2, md: 3}}
        justifyContent={'center'} 
        sx={{margin: '20px 4px 10px 4px' }} 
        columns={{xs: 4, sm: 8, md: 12}}
      >
        {renderProducts}
      </Grid>
      {/* <Product/> */}
    </Container>

  );
};

export default ProductContainer;
