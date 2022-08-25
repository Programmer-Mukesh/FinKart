import ActionTypes from "../actionTypes";

export const addToCart = (prod) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload:{
      id: prod.id,
    }
  };
};

export const removeFromCart = (id) => {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: {
      id: id,
    },
  };
};
