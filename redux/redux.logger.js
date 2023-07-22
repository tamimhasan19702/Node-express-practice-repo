/** @format */
//dependencies
const { createStore, applyMiddleware } = require("redux");
const thunk = require("redux-thunk").default;
const axios = require("axios");

//async actions - api calling
//api url - https://jsonplaceholder.typicode.com/todos
//middleware - redux-thunk
//axios api

//constants
const GET_TODOS_REQUEST = "GET_TODOS_REQUEST";
const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
const GET_TODOS_FAILED = "GET_TODOS_FAILED";
const API_URL = "https://jsonplaceholder.typicode.com/todos";

//state

const initialTodosState = {
  todos: [],
  isLoading: false,
  error: null,
};

//action
const getTodosRequest = () => {
  return {
    type: GET_TODOS_REQUEST,
  };
};

const getTodosFailed = (error) => {
  return {
    type: GET_TODOS_FAILED,
    payload: error,
  };
};

const getTodosSuccess = (todos) => {
  return {
    type: GET_TODOS_SUCCESS,
    payload: todos,
  };
};

//reducer(state,action)
const todosReducer = (state = initialTodosState, action) => {
  switch (action.type) {
    case GET_TODOS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
      break;
    case GET_TODOS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
      break;
    case GET_TODOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todos: action.payload,
      };
      break;
    default:
      return state;
  }
};

//async action creator
const fetchData = () => {
  
  return (dispatch) => {
    dispatch(getTodosRequest());

    axios
      .get(API_URL)
      .then((res) => {
        const todos = res.data;
        const titles = todos.map((todo) => todo.title);
        dispatch(getTodosSuccess(titles))
      })
      .catch((err) => {
        dispatch(getTodosFailed(err.message))
      });
  };
};

//store
const store = createStore(todosReducer, applyMiddleware(thunk));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetchData()