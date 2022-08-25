import { Button, Grid } from "@mui/material";
import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { CartContext } from "../../Context";

const ProductCard = ({ product }) => {
  const { cart, setCart } = useContext(CartContext);

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
          {cart.some((p) => p.id === product.id) ? (
            <Button
              variant="contained"
              className="removeCartBtn"
              onClick={() =>
                setCart((prevItems) =>
                  prevItems.filter((item) => item.id !== product.id)
                )
              }
            >
              Remove from cart
            </Button>
          ) : (
            <Button
              variant="contained"
              className="addToCartBtn"
              onClick={() =>
                setCart((prevItems) => [...prevItems, { ...product, qty: 1 }])
              }
            >
              Add to cart
            </Button>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

// const mapStateToProps = (state) =>({
//   addToCart: state.cart.products,
// })

// const mapDispatchToProps = (dispatch) => ({
//   addToTheCart: (prod) => dispatch(addToCart(prod)),
//   removeFromTheCart: (id) => dispatch(removeFromCart(id)),
// });

export default ProductCard;
