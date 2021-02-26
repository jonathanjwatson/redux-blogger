import {
  GET_ARTICLES,
  GET_ARTICLES_BY_USER_ID,
  GET_ARTICLES_EXCLUDE_USER_ID,
} from "../constants/action-types";

export function getArticles() {
  return function (dispatch) {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: GET_ARTICLES, payload: json });
      });
  };
}

export function getArticlesByUserId(userId) {
  return { type: GET_ARTICLES_BY_USER_ID, payload: { userId } };
}

export function getArticlesExcludeUserId(userId) {
  return { type: GET_ARTICLES_EXCLUDE_USER_ID, payload: { userId } };
}
