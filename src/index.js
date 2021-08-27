import "./index.css";
import store from "./redux/store-redux";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";

const rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App
        // state={state}
        // dispatch={store.dispatch.bind(store)}
        // changePostData={store.changePostData.bind(store)}
        // addPost={store.addPost.bind(store)}
        // addMessageText={store.addMessageText.bind(store)}
        // changeMessageText={store.changeMessageText.bind(store)}
        />
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

rerenderEntireTree();

// store.subscribe(rerenderEntireTree)

store.subscribe(() => {
  rerenderEntireTree();
});
