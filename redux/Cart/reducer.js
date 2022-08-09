import ActionTypes from "../actionTypes";

const initialState = {
  products: [],
  length: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      // const inCart = state.products.find((item) =>
      //   item.id === action.payload.id ? true : false
      // );
      return {
        ...state,
        products: [...state.products, { ...item }],
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
