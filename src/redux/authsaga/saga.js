import { all, takeEvery, put, fork } from "redux-saga/effects"; // You can import select
import actions from "./action";
import { dataService } from "../../service/dataService";

export function* loginRequest() {
  yield takeEvery("LOGIN_REQUEST", function* (payload) {
    yield put({
      type: actions.LODER_ON,
    });
    const response = yield dataService
      .post("login", payload.payload)
      .then((e) => e)
      .catch((e) => e);
    if (response.status === 200) {
      yield put({
        type: actions.LOGIN_SUCCESS,
        token: response.data.data.token,
      });
      localStorage.setItem("token", response.data.data.token);
      payload.navigate("/dashboard")

    } else {
      yield put({ type: actions.ERROR, message: response.response.data.message });
    }
  });
}

export function* logOutRequest() {
  yield takeEvery("LOGOUT_REQUEST", function* (payload) {
    yield put({
      type: actions.LODER_ON,
    });
    yield put({
      type: actions.LOGOUT,
    });
    localStorage.removeItem("token");
    payload.navigate("/");
  });
}
export function* registerRequest() {
  yield takeEvery("REGISTER_REQUEST", function* (payload) {
    yield put({
      type: actions.LODER_ON,
    });
    const response = yield dataService
      .post("sign-up", payload.payload)
      .then((e) => e)
      .catch((e) => e);
    if (response.status === 201) {
      yield put({
        type: actions.REGISTER_SUCCESS,
      });
    } else {
      yield put({ type: actions.ERROR, message: response.response.data.message });
    }
  });
}
export function* loginError() {
  yield takeEvery(actions.ERROR, function* () { });
}
export default function* authSagas() {
  yield all([
    fork(loginRequest),
    fork(registerRequest),
    fork(loginError),
    fork(logOutRequest),
  ]);
}
