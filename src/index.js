import "./index.css";
import store from "./redux/store-redux";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import ShowContext from "./ShowContext";

const rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <ShowContext.Provider value={store}>
        <App

        // dispatch={store.dispatch.bind(store)}
        // changePostData={store.changePostData.bind(store)}
        // addPost={store.addPost.bind(store)}
        // addMessageText={store.addMessageText.bind(store)}
        // changeMessageText={store.changeMessageText.bind(store)}
        />
      </ShowContext.Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

rerenderEntireTree();

// store.subscribe(rerenderEntireTree)

store.subscribe(() => {
  rerenderEntireTree();
});
