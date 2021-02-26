import React from "react";
import PropTypes from "prop-types";

const Post = ({ body, title, userId }) => {
  return (
    <div className="row">
      <div className="col">
        <p>
          <strong>UserID</strong>: {userId}
        </p>
        <p>
          <strong>Title</strong>: {title}
        </p>
        <p>{body}</p>
      </div>
    </div>
  );
};

Post.propTypes = {};

export default Post;
