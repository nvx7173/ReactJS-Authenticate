import { call } from "redux-saga/effects";
import authSaga from "./user/saga";

export default function* rootSaga() {
  yield call(authSaga);
}
