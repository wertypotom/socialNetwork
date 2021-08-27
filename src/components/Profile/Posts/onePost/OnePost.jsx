import React from "react";
import cl from "./OnePost.module.css";

const OnePost = ({ message, likes, imgUrl }) => {
  return (
    <div className={cl.post}>
      <img src={imgUrl} alt="" />
      <div>Like number: {likes}</div>
      <div>
        <h4>This is my post</h4>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default OnePost;
