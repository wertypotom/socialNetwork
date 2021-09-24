import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import NavigationContainer from "./components/Navbar/NavigationContainer.jsx";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer.jsx";
import UsersContainer from "./components/Users/UsersContainer.jsx";
import Login from "./components/Login/Login";
import Preloader from "./Additional Components/Preloader/Preloader";
import { connect } from "react-redux";
import { initializePageTC } from "./redux/appReducer";
import store from "./redux/store-redux";
import { Provider } from "react-redux";

class App extends React.Component {
  componentDidMount() {
    this.props.initializePageTC();
  }

  render() {
    if (!this.props.isInitialized) {
      <Preloader />;
    }

    return (
      <div className="app-wrapper">
        <Router>
          <HeaderContainer />
          <NavigationContainer />
          <Switch>
            <Route path="/dialogs" render={() => <DialogsContainer />} />
            <Route
              path="/profile/:userID?"
              render={() => <ProfileContainer />}
            />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/login" render={() => <Login />} />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToConnect = (state) => {
  return {
    isInitialized: state.app.isInitialized,
  };
};

const AppContainer = connect(mapStateToConnect, { initializePageTC })(App);

const SocialNetworkApp = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </React.StrictMode>
  );
};

export default SocialNetworkApp;
