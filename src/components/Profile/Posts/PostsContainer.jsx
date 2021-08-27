import { connect } from "react-redux";
import Posts from "./Posts";

const mapStateToProps = (state) => ({
  postData: state.ProfilePage.postData,
});

const PostsContainer = connect(mapStateToProps)(Posts);

export default PostsContainer;
