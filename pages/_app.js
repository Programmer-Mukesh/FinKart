import "../styles/globals.css";
import "../styles/header.scss";
import "../styles/categories.scss";
import "../styles/productCard.scss";
import Layout from "../components/layout";
import { CatogoryForProducts } from "../Context";
import { useState } from "react";
import {Provider} from "react-redux";
import { store, wrapper } from "../redux/store";

function MyApp({ Component, pageProps }) {
  const [selectedCategory, setSelectedCategory] = useState({
    categoryId: "151",
    categoryName: "Skin",
  }); //default Category is Skin

  return (
    <Provider store={store}>
      <CatogoryForProducts.Provider
        value={{ selectedCategory, setSelectedCategory }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CatogoryForProducts.Provider>
    </Provider>
  );
}

export default wrapper.withRedux(MyApp);
