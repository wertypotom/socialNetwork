import React from "react";
import Profile from "./Profile";
import {
  loadSpecificUserDataOnMainPageTC,
  getUserStatusTC,
  updateMyStatusTC,
} from "../../redux/ProfileReducer";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import {
  getProfileID,
  getProfileIsAuth,
  getProfilePage,
  getProfileStatus,
  // selectorForPracticeReselect,
} from "../../redux/Selectors/ProfileSelectors";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userID = this.props.match.params.userID;

    if (!userID) {
      userID = this.props.id;
    }

    this.props.loadSpecificUserDataOnMainPageTC(userID);
    this.props.getUserStatusTC(userID);
  }

  render() {
    return (
      <Profile
        {...this.props}
        userData={this.props.userData}
        status={this.props.status}
        updateStatus={this.props.updateMyStatusTC}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userData: getProfilePage(state),
    status: getProfileStatus(state),
    id: getProfileID(state),
    isAuth: getProfileIsAuth(state),
    // don't do anything, just to practice reselect
    // users: selectorForPracticeReselect(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    loadSpecificUserDataOnMainPageTC,
    getUserStatusTC,
    updateMyStatusTC,
  }),
  withRouter
)(ProfileContainer);
