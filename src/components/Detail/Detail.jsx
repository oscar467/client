import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import Loading from "../Loading/Loading";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../../redux/actions/productsActions";
import {
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  CardMedia,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";

const useStyles = makeStyles((theme) => ({
  box:{
    display: 'flex',
    alignItems: 'start',
    justifyContent:'start',
  },
  link:{
    textDecoration: 'none',
    color:'white',
  },
  wrapper:{
    padding: '50px',
    display: 'flex',
    marginTop: '30px',
  },
  conteinerImg:{
    width: '500px',
    flex: 1,
  },
  image: {
    width: '100%',
    height: '90vh',
    objectFit: "cover",
  },
  infoContainer:{
    flex: 1,
    padding: '0px 50px',
  },
  title: {
    marginTop: theme.spacing(2),
  },
  price: {
    marginTop: theme.spacing(2),
  },
  description: {
    marginTop: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(2),
    top:'100px'
  },
}));

const Detail = () => {
  const params = useParams();
  const classes = useStyles();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const myProduct = useSelector((state) => state.productsReducer.detail);

  useEffect(() => {
    dispatch(getDetails(params.id)).then(setLoading(false));
  }, []);

  return (
    <div>
      <DialogTitle sx={{background: "black"}}>
        <Box className={classes.box}>
          <Breadcrumbs aria-label="breadcrumb" className={classes.link}>
            <Link to="/">Home</Link>
            <Link to="/ProductCatalog">Product Catalog</Link>
          </Breadcrumbs>
        </Box>
      </DialogTitle>
      {loading ? (
        <Loading />
      ) : ( 
        <DialogContent className={classes.wrapper}>
          <Card className={classes.conteinerImg}>
            <CardMedia
              className={classes.image}
              image={myProduct.image}
              title="Product Image"
            />
          </Card>
          <Container className={classes.infoContainer}>
            <Typography variant="h4" className={classes.title}>
              {myProduct.name_product ? myProduct.name_product : <Loading />}
              {myProduct.name_product !== undefined ? (
                myProduct.name_product
              ) : (
                <Loading />
              )}
            </Typography>
            <Typography variant="body1" className={classes.description}>
              Description:
              {myProduct.description ? myProduct.description : <Loading />}
            </Typography>
            <Typography variant="h6" className={classes.price}>
              Price: ${myProduct.price ? myProduct.price : <Loading />}
            </Typography>
            {/* <Typography variant="h6" className={classes.description}>
              Category:
              {myProduct.Category.name_category !== undefined ? (
                myProduct.Category.name_category
              ) : (
                <Loading />
              )}
            </Typography> */}
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Add to Cart
            </Button>
      </Container>
      </DialogContent>  
      )}
    </div>
  );
};

export default Detail;
