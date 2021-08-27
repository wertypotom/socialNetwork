import ProfileInfo from "./ProfileInfo";
import {
  changePostActionCreator,
  addPostActionCreator,
} from "../../../redux/ProfileReducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    textAreaData: state.ProfilePage.textAreaData,
  };
};

const mapDispatchToPtops = (dispatch) => {
  return {
    changeAreaData: (text) => {
      dispatch(changePostActionCreator(text));
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    },
  };
};

const ProfileInfoContainer = connect(
  mapStateToProps,
  mapDispatchToPtops
)(ProfileInfo);

export default ProfileInfoContainer;
