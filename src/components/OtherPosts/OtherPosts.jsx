import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArticlesExcludeUserId } from "../../redux/actions/index";
import Post from "../Post/Post";

const OtherPosts = () => {
  const articles = useSelector((state) => state.articles);
  const otherArticles = useSelector((state) => state.otherArticles);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticlesExcludeUserId(1));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [articles]);

  return (
    <div className="col-sm-5">
      <div className="row">
        <div className="col">
          <h3 className="text-center">Other Posts</h3>
        </div>
      </div>
      {otherArticles.length ? (
        <>
          {otherArticles.map((article) => (
            <Post {...article} key={article.id} />
          ))}
        </>
      ) : (
        <h5>No Articles Found</h5>
      )}
    </div>
  );
};

export default OtherPosts;
