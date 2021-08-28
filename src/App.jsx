import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import NavigationContainer from "./components/Navbar/NavigationContainer.jsx";
import Profile from "./components/Profile/Profile.jsx";
import DialogsContainer from "./components/Dialogs/DialogsContainer.jsx";

function App(props) {
  // const { contactsData, messageData, messageTextAreaData } = state.DialogPage;
  // const { postData, textAreaData } = state.ProfilePage;
  // const { links, usersData } = state.navBarPage;

  return (
    <div className="app-wrapper">
      <Router>
        <Header />
        <NavigationContainer />
        <Switch>
          <Route
            path="/dialogs"
            render={() => (
              <DialogsContainer

              // contactsData={contactsData}
              // messageData={messageData}
              // messageTextAreaData={messageTextAreaData}
              // dispatch={dispatch}
              // addMessageText={addMessageText}
              // changeMessageText={changeMessageText}
              />
            )}
          />
          <Route
            exact
            path="/profile"
            render={() => (
              <Profile
              // postData={postData}
              // textAreaData={textAreaData}
              // dispatch={dispatch}
              // addPost={addPost}
              // changePostData={changePostData}
              />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
