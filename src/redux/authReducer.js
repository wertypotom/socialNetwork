import { stopSubmit } from "redux-form";
import { usersAPI, profileAPI } from "../api/api";

const ADD_ME = "ADD_ME";

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  if (action.type === ADD_ME) {
    return {
      ...state,
      ...action.data,
    };
  }

  return state;
};

export const addMe = (email, id, login, isAuth) => {
  return { type: ADD_ME, data: { email, id, login, isAuth } };
};

export const loadPersonalDataTC = () => {
  return (dispatch) => {
    return usersAPI.loadPersonalData().then((data) => {
      if (data.resultCode === 0) {
        const { email, id, login } = data.data;
        dispatch(addMe(email, id, login, true));
      }
    });
  };
};

export const login = (email, password, rememberMe) => (dispatch) => {
  profileAPI.login(email, password, rememberMe).then((data) => {
    if (data.resultCode === 0) {
      dispatch(loadPersonalDataTC());
    } else {
      const error = data.messages.length > 0 ? data.messages[0] : "Some error";
      dispatch(stopSubmit("login", { _error: error }));
    }
  });
};

export const logout = () => (dispatch) => {
  profileAPI.logout().then((data) => {
    if (data.resultCode === 0) {
      dispatch(addMe(null, null, null, false));
    }
  });
};

export default authReducer;
