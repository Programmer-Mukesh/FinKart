import ActionTypes from "../actionTypes";

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      console.log("addToCart action reducer")
      // const inCart = state.products.find((item) =>
      //   item.id === action.payload.id ? true : false
      // );
      return {
        cart: [{ ...action.payload }, ...state],
      };

    case ActionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        products: state.products.filter(
          (item) => item.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
};

export default cartReducer;
