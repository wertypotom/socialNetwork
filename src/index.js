import "./index.css";
import store from "./redux/store-redux";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";
import ShowContext from "./ShowContext";
import { Provider } from "react-redux";
import SocialNetworkApp from "./App";

ReactDOM.render(<SocialNetworkApp />, document.getElementById("root"));
