import { Button, Grid } from "@mui/material";
import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/Cart/action";
import {
  selectedItemToCart,
  selectedLengthOfCart,
} from "../../redux/Cart/selector";
import { createStructuredSelector } from "reselect";

const ProductCard = ({ product, addToTheCart, removeFromTheCart, cartProducts }) => {

  const handleAddToCart = () => {
    cartProducts.push(product);
    console.log("arrayProduct", JSON.parse(sessionStorage.getItem("cart")));
    sessionStorage.setItem("cart", JSON.stringify(cartProducts));
  };

  return (
    <div className="productCardStyles">
      <Grid container>
        <Grid item xs={4} className="imageGrid" paddingRight={2}>
          <img
            className="productImage"
            src={product.image_urls.x408}
            alt="productImg"
          />
        </Grid>
        <Grid item xs={8} className="productDetailGrid" paddingLeft={2}>
          <p className="productName">{product.name}</p>
          <p className="productWeight">
            ({`${product.weight} ${product.weight_unit}`})
          </p>
          {product.rating !== undefined && (
            <Stack spacing={1}>
              <Rating defaultValue={product.rating} precision={0.1} readOnly />
            </Stack>
          )}

          <h3 className="productPrice">₹ {product.final_price}</h3>
          <Button
            variant="contained"
            className="addToCartBtn"
            onClick={() => handleAddToCart()}
          >
            Add to cart
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addToTheCart: (id) => dispatch(addToCart(id)),
  removeFromTheCart: (id) => dispatch(removeFromCart(id)),
});

export default connect(null, mapDispatchToProps)(ProductCard);
