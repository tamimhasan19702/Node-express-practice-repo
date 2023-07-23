import { createStore } from "redux";
import { counterReducer } from "./components/reducer";

export const store = createStore(counterReducer);