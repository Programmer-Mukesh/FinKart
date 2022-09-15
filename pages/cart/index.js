import { Container } from "@mui/material";
import { Button, Grid } from "@mui/material";
import React, { useContext } from "react";
import { CartContext } from "../../Context";
import Head from "next/head";

const qtyButtonStyles = {
  backgroundColor: "#9c9c9c",
  fontSize: 18,
  borderRadius: "50%",
  minWidth: "47px",
  "&:hover": {
    backgroundColor: "#bdbdbd",
  },
};

const CartPage = () => {
  const { cart, setCart } = useContext(CartContext);

  const getTotal = () => {
    let total = cart.reduce(
      (acc, curr) => acc + Number(curr.final_price) * curr.qty,
      0
    );
    return total;
  };

  const increaseProductQty = (item, id) => {
    let oldCart = [...cart];
    const index = cart.findIndex((item) => item.id === id);
    oldCart[index].qty = oldCart[index].qty + 1;
    setCart([...oldCart]);
  };

  const decreaseProductQty = (item, id) => {
    if (item.qty > 1) {
      let oldCart = [...cart];
      const index = cart.findIndex((item) => item.id === id);
      oldCart[index].qty = oldCart[index].qty - 1;
      setCart([...oldCart]);
    } else {
      setCart((prevItems) => prevItems.filter((prod) => prod.id !== item.id));
    }
  };

  return (
    <Container className="productContainer cartProductWrapper">
      <Head>
        <title>Cart | Finkart</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h2>Cart Items</h2>
      <h3>
        Total Amount: <span className="total-amount">₹ {getTotal()}</span>/-
      </h3>
      {cart.length > 0 ? (
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
              <Grid
                item
                xs={8}
                className="productDetailGrid"
                paddingLeft={2}
                paddingBottom={3}
              >
                <p className="productName">{item.name}</p>
                <h3 className="productPrice">₹ {item.final_price}</h3>

                <Button
                  variant="contained"
                  sx={qtyButtonStyles}
                  onClick={() => increaseProductQty(item, item.id)}
                >
                  +
                </Button>
                <span className="qty-amount">{item.qty}</span>
                <Button
                  sx={qtyButtonStyles}
                  variant="contained"
                  onClick={() => decreaseProductQty(item, item.id)}
                >
                  −
                </Button>
              </Grid>
            </Grid>
          </div>
        ))
      ) : (
        <div className="emptyCart">
          <h4>Your cart is empty...</h4>
        </div>
      )}
    </Container>
  );
};

export default CartPage;
