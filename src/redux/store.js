import { createStore } from "redux";
import rootReducer from "./reducer/rootReducer";
import { applyMiddleware } from "redux";
import logger from "redux-logger";

const store = createStore(rootReducer,applyMiddleware(logger));

export default store;