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
  Typography,
} from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: "1rem 1rem 4rem 1rem",
    width: "50vw",
    margin: "0 auto",
  },
  image: {
    height: 0,
    paddingTop: "56.25%", // 16:9
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
    <div className={classes.root}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link to="/">Home</Link>
        <Link to="/ProductCatalog">Product Catalog</Link>
      </Breadcrumbs>
      {loading ? (
        <Loading />
      ) : (
        <Card>
          <CardMedia
            className={classes.image}
            image={myProduct.image}
            title="Product Image"
          />
          <CardContent>
            <Typography variant="h4" className={classes.title}>
              Name:
              {myProduct.name_product ? myProduct.name_product : <Loading />}
            </Typography>
            <Typography variant="h6" className={classes.price}>
              Price: ${myProduct.price ? myProduct.price : <Loading />}
            </Typography>
            <Typography variant="body1" className={classes.description}>
              Description:
              {myProduct.description ? myProduct.description : <Loading />}
            </Typography>
            <Typography variant="h6" className={classes.description}>
              Category:
              {myProduct.Category.name_category ? (
                myProduct.Category.name_category
              ) : (
                <Loading />
              )}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Add to Cart
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Detail;
