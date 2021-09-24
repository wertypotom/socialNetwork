import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { addMe, logout } from "../../redux/authReducer";
import { resetUserDataAC } from "../../redux/ProfileReducer";

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.auth.login,
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, {
  addMe,
  resetUserDataAC,
  logout,
})(HeaderContainer);

// store.getState().auth;
