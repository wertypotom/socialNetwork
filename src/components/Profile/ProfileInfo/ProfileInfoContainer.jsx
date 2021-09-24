import ProfileInfo from "./ProfileInfo";
import { addPostActionCreator } from "../../../redux/ProfileReducer";
import { connect } from "react-redux";

// const ProfileInfoContainer = () => {
//   return (
//     <ShowContext.Consumer>
//       {(store) => {
//         const changeAreaData = (text) => {
//           store.dispatch(changePostActionCreator(text));
//         };

//         const addPost = () => {
//           store.dispatch(addPostActionCreator());
//         };

//         return (
//           <ProfileInfo
//             textAreaData={store.getState().ProfilePage.textAreaData}
//             addPost={addPost}
//             changeAreaData={changeAreaData}
//           />
//         );
//       }}
//     </ShowContext.Consumer>
//   );
// };
const mapStateToConnect = (state, ownProps) => {
  const { userData, status, updateStatus } = ownProps;
  return {
    textAreaData: state.ProfilePage.textAreaData,
    userData,
    status,
    updateStatus,
  };
};

const mapDispatchToConnect = (dispatch) => {
  return {
    addPost: (text) => {
      dispatch(addPostActionCreator(text));
    },
  };
};

export default connect(mapStateToConnect, mapDispatchToConnect)(ProfileInfo);
