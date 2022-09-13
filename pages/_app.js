import "../styles/globals.css";
import "../styles/header.scss";
import "../styles/categories.scss";
import "../styles/productCard.scss";
import "../styles/cart.scss";
import "../styles/login.scss";
import Layout from "../components/layout";
import { CartContext, CatogoryForProducts } from "../Context";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [selectedCategory, setSelectedCategory] = useState({
    categoryId: "151",
    categoryName: "Skin",
  }); //default Category is Skin

  const [cart, setCart] = useState([]);

  return (
    <>
      <CartContext.Provider value={{ cart, setCart }}>
        <CatogoryForProducts.Provider
          value={{ selectedCategory, setSelectedCategory }}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </CatogoryForProducts.Provider>
      </CartContext.Provider>
    </>
  );
}

export default MyApp;
