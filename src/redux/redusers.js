import authSaga from "./authsaga/reduser";
import { combineReducers } from "redux";

const createReducer = () =>
  combineReducers({
    authSaga,
  });

export default createReducer;