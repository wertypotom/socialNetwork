import React from "react";
import cl from "./ProfileInfo.module.css";

const windowContent = React.createRef();

const ProfileInfo = (props) => {
  const onAddPost = () => {
    props.addPost();
  };

  const onChangeAreaData = () => {
    const text = windowContent.current.value;
    props.changeAreaData(text);
  };

  return (
    <div className={cl.ProfileInfoPage}>
      <img
        className={cl.content_image}
        src="http://parksadventure.com/wp-content/uploads/2017/10/header-image-1-2.png"
        alt=""
      />
      <textarea
        cols="60"
        rows="5"
        ref={windowContent}
        value={props.textAreaData}
        onChange={onChangeAreaData}
      ></textarea>
      <div>
        <button onClick={onAddPost}>Post me</button>
      </div>
    </div>
  );
};

export default ProfileInfo;
