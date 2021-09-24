import React from "react";
import PostsContainer from "./Posts/PostsContainer";
import cl from "./Profile.module.css";
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";

const Profile = (props) => {
  return (
    <section className={cl.profilePage}>
      <ProfileInfoContainer
        userData={props.userData}
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <PostsContainer />
    </section>
  );
};

export default Profile;
