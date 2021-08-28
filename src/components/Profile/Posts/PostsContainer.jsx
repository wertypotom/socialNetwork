import { connect } from "react-redux";
import ShowContext from "../../../ShowContext";
import Posts from "./Posts";

const PostsContainer = () => {
  return (
    <ShowContext.Consumer>
      {(store) => {
        return <Posts postData={store.getState().ProfilePage.postData} />;
      }}
    </ShowContext.Consumer>
  );
};

// const mapStateToProps = (state) => ({
//   postData: state.ProfilePage.postData,
// });

// const PostsContainer = connect(mapStateToProps)(Posts);

export default PostsContainer;
