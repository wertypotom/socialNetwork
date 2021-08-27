import { createStore, combineReducers } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./ProfileReducer";
import navBarReducer from "./navBarReducer";

let reducers = combineReducers({
  DialogPage: dialogsReducer,
  ProfilePage: profileReducer,
  navBarPage: navBarReducer,
});

let store = createStore(reducers);

export default store;
