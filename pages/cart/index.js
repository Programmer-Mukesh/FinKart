import { Container } from "@mui/material";
import { Button, Grid } from "@mui/material";
import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { CartContext } from "../../Context";

const CartPage = () => {
  const { cart, setCart } = useContext(CartContext);
  console.log("cart page", cart);

  const getTotal = () => {
    let total = cart.reduce((acc, curr) => acc + Number(curr.price), 0);
    return total;
  };
  return (
    <Container className="productContainer cartProductWrapper">
      <h2>Cart Items</h2>
      <h3>SubTotal: ${getTotal()} </h3>
      {cart &&
        cart.map((item) => (
          <div className="productCardStyles">
            <Grid container>
              <Grid item xs={4} className="imageGrid" paddingRight={2}>
                <img
                  className="productImage"
                  src={item.image_urls.x408}
                  alt="productImg"
                />
              </Grid>
              <Grid item xs={8} className="productDetailGrid" paddingLeft={2}>
                <p className="productName">{item.name}</p>
                <h3 className="productPrice">₹ {item.final_price}</h3>
                <Button
                  variant="contained"
                  className="removeCartBtn"
                  onClick={() =>
                    setCart((prevItems) =>
                      prevItems.filter((prod) => prod.id !== item.id)
                    )
                  }
                >
                  Remove from cart
                </Button>
              </Grid>
            </Grid>
          </div>
        ))}
    </Container>
  );
};

export default CartPage;
