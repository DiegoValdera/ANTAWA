import { createStore, combineReducers } from "redux";
import { authReducer, carReducer } from "./";

const allReducers = combineReducers({
  auth: authReducer,
  car: carReducer,
});

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export { store };
