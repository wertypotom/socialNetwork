import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { compose } from "redux";

const mapStateToPropsForRedirect = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

const withAuthRedirect = (Component) => {
  class RedirectContainer extends React.Component {
    render() {
      if (!this.props.isAuth) {
        return <Redirect to="/login" />;
      }

      return <Component {...this.props} />;
    }
  }

  return compose(connect(mapStateToPropsForRedirect))(RedirectContainer);
};

export default withAuthRedirect;
