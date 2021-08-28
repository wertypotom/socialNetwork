import ProfileInfo from "./ProfileInfo";
import {
  changePostActionCreator,
  addPostActionCreator,
} from "../../../redux/ProfileReducer";
import { connect } from "react-redux";
import ShowContext from "../../../ShowContext";

const ProfileInfoContainer = () => {
  return (
    <ShowContext.Consumer>
      {(store) => {
        const changeAreaData = (text) => {
          store.dispatch(changePostActionCreator(text));
        };

        const addPost = () => {
          store.dispatch(addPostActionCreator());
        };

        return (
          <ProfileInfo
            textAreaData={store.getState().ProfilePage.textAreaData}
            addPost={addPost}
            changeAreaData={changeAreaData}
          />
        );
      }}
    </ShowContext.Consumer>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     textAreaData: state.ProfilePage.textAreaData,
//   };
// };

// const mapDispatchToPtops = (dispatch) => {
//   return {
//     changeAreaData: (text) => {
//       dispatch(changePostActionCreator(text));
//     },
//     addPost: () => {
//       dispatch(addPostActionCreator());
//     },
//   };
// };

// const ProfileInfoContainer = connect(
//   mapStateToProps,
//   mapDispatchToPtops
// )(ProfileInfo);

export default ProfileInfoContainer;
