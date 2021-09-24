import { createStore, combineReducers, applyMiddleware } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./ProfileReducer";
import navBarReducer from "./navBarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReducer from "./appReducer";

let reducers = combineReducers({
  DialogPage: dialogsReducer,
  ProfilePage: profileReducer,
  navBarPage: navBarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
  form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
