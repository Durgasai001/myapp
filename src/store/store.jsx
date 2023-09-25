import {combineReducers,createStore}from "redux";
import todoReducer from "./reducers/todoreducers";
import counterReducer from "./reducers/counterreducer";
const reducer=combineReducers({c:counterReducer,t:todoReducer})
const store=new createStore(reducer)
export default store;