import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import pageReducer from "./pageReducer";

const store = createStore(
  pageReducer,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;
