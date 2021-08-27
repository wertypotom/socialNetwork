import React from "react";
import cl from "./Posts.module.css";
import OnePost from "./onePost/OnePost";

const Posts = (props) => {
  return (
    <div className={cl.allPosts}>
      <h2>My posts</h2>
      {props.postData.map((post) => {
        const { id } = post;
        return <OnePost key={id} {...post} />;
      })}
    </div>
  );
};

export default Posts;
