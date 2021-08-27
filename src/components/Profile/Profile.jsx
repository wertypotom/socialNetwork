import React from "react";
import PostsContainer from "./Posts/PostsContainer";
import cl from "./Profile.module.css";
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";

const Profile = (props) => {
  return (
    <section className={cl.profilePage}>
      <ProfileInfoContainer
      // textAreaData={textAreaData}
      // dispatch={dispatch}
      // addPost={addPost}
      // changePostData={changePostData}
      />
      <PostsContainer
      // postData={postData}
      />
    </section>
  );
};

export default Profile;
