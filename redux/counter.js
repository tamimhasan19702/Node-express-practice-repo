/** @format */

//dependencies
const { createStore } = require("redux");

//state = count:0
//action - increment,decrement, reset
//reducer
//store

//constants

const INCREMENT = "INCREMENT";
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";
const DECREMENT = "DECREMENT";
const DECREMENT_BY_VALUE = "DECREMENT_BY_VALUE";
const RESET = "RESET";
const ADD_USER = "ADD_USER";

//state
const counterInitialState = {
  users: ["Tamim"],
  count: 1,
};

//action
const AddUser = (user) => {
  return {
    type: ADD_USER,
    payload: user
  };
};
const IncrementCounter = () => {
  return {
    type: INCREMENT,
  };
};
const IncrementCounterByValue = (value) => {
  return {
    type: INCREMENT_BY_VALUE,
    payload: value,
  };
};
const DecrementCounterByValue = (value) => {
  return {
    type: DECREMENT_BY_VALUE,
    payload: value,
  };
};
const DecrementCounter = () => {
  return {
    type: DECREMENT,
  };
};
const ResetCounter = () => {
  return {
    type: RESET,
  };
};

//reducer(state,action)
const counterReducer = (state = counterInitialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        users: [...state.users , action.payload],
        count: state.count + 1
      };
      break;
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
      break;
    case INCREMENT_BY_VALUE:
      return {
        ...state,
        count: state.count + action.payload,
      };
      break;
    case DECREMENT_BY_VALUE:
      return {
        ...state,
        count: state.count - action.payload,
      };
      break;
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
      break;
    case RESET:
      return {
        ...state,
        count: 0,
      };
      break;
    default:
      state;
  }
};

//store - getState(), dispatch(), subscribe()

const store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(AddUser("Montu"))
store.dispatch(AddUser("Akash"))
store.dispatch(AddUser("Tareq"))
