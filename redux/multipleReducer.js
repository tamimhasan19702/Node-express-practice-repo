/** @format */

const { createStore, combineReducers } = require("redux");

//product constants
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCTS = "ADD_PRODUCTS";

//cart constant
const GET_CART_PRODUCTS = "GET_CART_PRODUCTS";
const ADD_CART_PRODUCTS = "ADD_CART_PRODUCTS";

//prouduct state
const initialProductStates = {
  products: ["suger", "salt"],
  numberOfProducts: 2,
};

//cart state
const initialCartStates = {
  cart: [],
  numberOfProducts: 0,
};

//product actions

const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};

const AddProducts = (product) => {
  return {
    type: ADD_PRODUCTS,
    payload: product,
  };
};

//cart actions
const GetCartProducts = () => {
  return {
    type: GET_CART_PRODUCTS,
  };
};
const AddCartProducts = (cart) => {
  return {
    type: ADD_CART_PRODUCTS,
    payload: cart,
  };
};

//product reducer(state,action)

const productReducer = (state = initialProductStates, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };
      break;

    case ADD_PRODUCTS:
      return {
        ...state,
        products: [...state.products, action.payload],
        numberOfProducts: state.numberOfProducts + 1,
      };

      break;

    default:
      return state;
  }
};

//cart reducer

const cartReducer = (state = initialCartStates, action) => {
  switch (action.type) {
    case GET_CART_PRODUCTS:
      return {
        ...state,
      };

      break;
    case ADD_CART_PRODUCTS:
      return {
        ...state,
        cart: [...state.cart, action.payload],
        numberOfProducts: state.numberOfProducts + 1,
      };

      break;

    default:
      return state;
  }
};

//combine reducer- combines all the reducers
const rootReducer = combineReducers({
  productR: productReducer,
  cartR: cartReducer,
});

//store - getState(), dispatch(), subscribe()
const store = createStore(rootReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(AddProducts("sugerCane"));
store.dispatch(AddProducts("apple"));
store.dispatch(AddProducts("chili"));

store.dispatch(AddCartProducts("suger"));
store.dispatch(AddCartProducts("suger"));
store.dispatch(AddCartProducts("suger"));
