import { UserAccountInterface } from "./interfaces";
import { createAction, ActionType } from "typesafe-actions";
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, SHOW_LOADING, HIDE_LOADING } from "./constants";

export const loginRequestAction = createAction(LOGIN_REQUEST)<UserAccountInterface>();
export const loginSuccessAction = createAction(LOGIN_SUCCESS)<string>();
export const loginFailureAction = createAction(LOGIN_FAILURE)<string>();
export const showLoadingAction = createAction(SHOW_LOADING)<undefined>();
export const hideLoadingAction = createAction(HIDE_LOADING)<undefined>();
export const logoutRequestAction = createAction(LOGOUT)<undefined>();

const actions = { loginRequestAction, loginSuccessAction, loginFailureAction, logoutRequestAction, showLoadingAction, hideLoadingAction };

export type LoginActionTypes = ActionType<typeof actions>;