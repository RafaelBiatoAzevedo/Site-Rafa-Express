import { ADD_PRE_CART, ADD_PRODUCT_CART } from "../action";

const INITIAL_STATE = {
  preCart: {},
  productsCart: [],  
};

const stateCart = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PRE_CART:
      return { ...state, preCart: action.product };
    case ADD_PRODUCT_CART:
      return { ...state, productsCart: [...state.productsCart, action.product] };
    default:
      return state;
  }
};

export default stateCart;
