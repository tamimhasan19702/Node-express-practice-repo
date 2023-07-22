/** @format */
//dependencies
const {createStore} = require("redux")


//constats
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD_USER";

//states
const initialState = {
  count: 0,
};
const initialState2 = {
  users: [{ name: "tareq monower" }],
};

//action(object type,payload)- action is a object with type and payload
//payload transfers data to the reducer
//state
//dispatch action
//reducer
//store

const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};

const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};

const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};


//reducer is a function it will function according to the action that we provide to it
//creating reducer(state,action)
const counterReducer = (state = initialState, action) => {
  //switching system to switch between states
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
      break;
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
      break;
    default:
      state;
  }
};

//stores the modified state from the reducer
//store = getState(),dispatch(),subscribe()

//createStore/configureStore (reducer,action, middleWire)
const store = createStore(counterReducer)

//using the subscribe method we get the state by getState method
store.subscribe(()=>{
    console.log(store.getState())
})

//we need to dispatch the action to update the state
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())