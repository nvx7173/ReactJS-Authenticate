import { loginSuccessAction, loginFailureAction, loginRequestAction, showLoadingAction, hideLoadingAction } from "./actions";
import { LOGIN_REQUEST } from "./constants";
import { put, call, takeLatest } from "redux-saga/effects";
import { login } from "../../services";

function* LoginAsync({ payload }: ReturnType<typeof loginRequestAction>) {
  try {
    yield put(showLoadingAction());
    const response = yield call(login, payload);
    yield put(loginSuccessAction(response.user));
    yield put(hideLoadingAction());
  } catch (error) {
    yield put(hideLoadingAction());
    yield put(loginFailureAction(error));
  }
}

export default function* loginWatcher() {
  yield takeLatest(LOGIN_REQUEST, LoginAsync);
}


