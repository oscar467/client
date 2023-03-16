import React from "react";
import Banner from "../Banner/Banner";
import ProductOffers from "../ProductOffers/ProductOffers";
import ProductCategories from "../ProductCategories/ProductCategories";
import Contact from "../Contact/Contact";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>This is the Home</h1>
      <Banner />
      <h2>Offers of day:</h2>
      <ProductOffers />
      <button>
        <Link to="/Offers">See all offers</Link>
      </button>
      <h2>Categories:</h2>
      <ProductCategories />
      <button>
        <Link to="/ProductCatalog">See all Products</Link>
      </button>
      <Contact />
    </div>
  );
};

export default Home;
