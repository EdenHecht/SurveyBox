import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import pageReducer from "./reducers/pageReducer";
import thunk from "redux-thunk";

const store = createStore(
  pageReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
