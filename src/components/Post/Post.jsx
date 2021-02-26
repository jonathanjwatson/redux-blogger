import React from "react";
import PropTypes from "prop-types";
import EditIcon from "../EditIcon/EditIcon";

const Post = ({ body, editable, title, userId }) => {
  return (
    <div className="row m-3">
      <div className="col" style={{ backgroundColor: "#f8f8f8" }}>
        <p>
          <strong>UserID</strong>: {userId}
        </p>
        <p>
          {/* TODO: Convert the edit icon into a Link to edit the post. */}
          <strong>Title</strong>: {title} {editable && <EditIcon />}
        </p>
        <p>{body}</p>
      </div>
    </div>
  );
};

Post.propTypes = {
  body: PropTypes.string,
  editable: PropTypes.bool,
  title: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired,
};

export default Post;
