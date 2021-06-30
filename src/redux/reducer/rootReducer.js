import toDoReducer from "./todoReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers(
    {
        toDoReducer
    }
)

export default rootReducer;