import { all } from "redux-saga/effects";
import authSagas from "./authsaga/saga";

export default function* rootSaga() {
  yield all([ authSagas()]);
}
