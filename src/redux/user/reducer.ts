import { toast } from "react-toastify";
import { LoginActionTypes } from "./actions";
import { createReducer } from "typesafe-actions";
import {
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, SHOW_LOADING, HIDE_LOADING, LOGOUT,
} from "./constants";
import { AuthState } from "./interfaces";
const initialState: AuthState = {
  error: null,
  user: null,
  loading: false,
  isAuthenticate: false,
};

export default createReducer<AuthState, LoginActionTypes>(initialState, {
  [LOGIN_REQUEST]: state => {
    return {
      ...state,
      isAuthenticate: false,
    };
  },
  [SHOW_LOADING]: state => {
    return {
      ...state,
      loading: true,
    };
  },
  [HIDE_LOADING]: state => {
    return {
      ...state,
      loading: false,
    };
  },
  [LOGIN_SUCCESS]: (state, action) => {
    toast.success("Wellcome " + action.payload + " !");
    return {
      ...state,
      user: action.payload,
      isAuthenticate: true,
    };
  },
  [LOGIN_FAILURE]: (state, action) => {
    toast.error(action.payload);
    return {
      ...state,
      error: action.payload,
    };
  },
  [LOGOUT]: () => {
    toast.warning("Logout success!");
    return {
      ...initialState,
    };
  },
});