import { connect } from "react-redux";
import Posts from "./Posts";

// const PostsContainer = () => {
//   return (
//     <ShowContext.Consumer>
//       {(store) => {
//         return <Posts postData={store.getState().ProfilePage.postData} />;
//       }}
//     </ShowContext.Consumer>
//   );
// };

const mapStateToConnect = (state) => {
  return {
    postData: state.ProfilePage.postData,
  };
};

const PostsContainer = connect(mapStateToConnect)(Posts);

export default PostsContainer;
