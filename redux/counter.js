/** @format */

//dependencies
const {createStore} = require("redux")

//state = count:0
//action - increment,decrement, reset
//reducer
//store

//constants

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

//state
const counterInitialState = {
  count: 0,
};

//action
const IncrementCounter = () => {
  return {
    type: INCREMENT,
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
    case INCREMENT:
      return {
        count: state.count + 1,
      };
      break;
    case DECREMENT:
      return {
        count: state.count - 1,
      };
      break;
    case RESET:
      return {
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
    console.log(store.getState())
})

store.dispatch(IncrementCounter())
store.dispatch(IncrementCounter())
store.dispatch(IncrementCounter())
store.dispatch(DecrementCounter())
store.dispatch(ResetCounter())