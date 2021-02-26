import React from "react";
import OtherPosts from "../../components/OtherPosts/OtherPosts";
import UserPosts from "../../components/UserPosts/UserPosts";

const Posts = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-s12">
          <h1 className="text-center">Redux Blogger</h1>
        </div>
      </div>
      <div className="row">
        <UserPosts />
        <OtherPosts />
      </div>
    </div>
  );
};

export default Posts;
