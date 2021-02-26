import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArticlesByUserId } from "../../redux/actions/index";
import Post from "../Post/Post";

const OtherPosts = () => {
  const articles = useSelector((state) => state.articles);
  const userArticles = useSelector((state) => state.userArticles);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticlesByUserId(1));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [articles]);

  return (
    <div className="col-sm-7">
      <div className="row">
        <div className="col">
          <h3 className="text-center">Your Posts</h3>
        </div>
      </div>
      {userArticles.length ? (
        <>
          {userArticles.map((article) => (
            <Post {...article} key={article.id} editable/>
          ))}
        </>
      ) : (
        <h5>No Articles Found</h5>
      )}
    </div>
  );
};

export default OtherPosts;
