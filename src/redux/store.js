import { applyMiddleware, createStore } from "redux";
import paysReducer from "./reducers/paysReducer";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import inputReducer from "./reducers/inputReducer";

const rootReducer = combineReducers({
    paysReducer,
    inputReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store