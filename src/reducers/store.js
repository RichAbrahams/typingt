import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./index";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle

export default createStore(
  rootReducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware())
);


