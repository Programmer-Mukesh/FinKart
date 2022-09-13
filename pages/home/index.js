import React, { useState, useEffect } from "react";
import axios from "axios";
import Categories from "../../components/category/Categories";
import Products from "../../components/products/Products";
import { Container } from "@mui/material";
import Head from "next/head";

const containerStyles = {
  "@media(max-width:767px)": {
    padding: "0px",
  },
};

const Home = () => {
  const [categoryData, setCategoryData] = useState([]);
  const getCategories = async () => {
    try {
      const apiResponse = await axios.get(
        "https://backend.ustraa.com/rest/V1/api/homemenucategories/v1.0.1?device_type=mob"
      );
      setCategoryData(apiResponse.data.category_list);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <Container sx={containerStyles}>
      <Head>
        <title>Home | Finkart</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Categories categoryData={categoryData} />

      <div className="productContainer">
        <Products categoryData={categoryData} />
      </div>
    </Container>
  );
};

export default Home;
