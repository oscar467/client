import React from "react";
import Banner from "../Banner/Banner";
import ProductOffers from "../ProductOffers/ProductOffers";
import ProductCategories from "../ProductCategories/ProductCategories";
import Contact from "../Contact/Contact";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";


const Home = () => {
  return (
    <>
      <Banner />

      <Container fixed>
        <Box sx={{ width: "100%" }}>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={6}
          ></Stack>
        </Box>
      </Container>
    </>
  );
};

export default Home;
