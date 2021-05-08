import { requestCategories, requestProducts, requestProductsByName } from "../service/requestApi";

export const SAVE_CATEGORIES = 'SAVE_CATEGORIES';
export const SAVE_GREETING = 'SAVE_GREETING';
export const SAVE_CATEGORY = 'SAVE_CATEGORY';
export const SAVE_PRODUCTS = ' SAVE_PRODUCTS';
export const SAVE_INPUT = 'SAVE_INPUT';
export const ADD_PRODUCT_CART = 'ADD_PRODUCT_CART';
export const ADD_PRE_CART = "ADD_PRE_CART";

export const addPreCart = (product) => ({
  type: ADD_PRE_CART,
  product,
});

export const addProductCart = (product) => ({
  type: ADD_PRODUCT_CART,
  product,
});

export const saveInput = (input) => ({
  type: SAVE_INPUT,
  input,
});

export const saveCategory = (category) => ({
  type: SAVE_CATEGORY,
  category,
});

export const saveCategories = (categories) => ({
  type: SAVE_CATEGORIES,
  categories,
});

export const saveGreeting = (greeting) => ({
  type: SAVE_GREETING,
  greeting,
});

export const saveProducts = (products) => ({
  type: SAVE_PRODUCTS,
  products,
});

export const categoriesThunk = () => (dispatch) => {
  requestCategories().then((response) => dispatch(saveCategories(response)));
}

export const getProductsByCategory = (category) => (dispatch) => {
  dispatch(saveCategory(category));
  requestProducts(category).then((response) => dispatch(saveProducts(response.results)));
}

export const getProductsByName = (name) => (dispatch) => {
  requestProductsByName(name).then((response) => dispatch(saveProducts(response.results)));
}
