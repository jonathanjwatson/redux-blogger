import {
  GET_ARTICLES,
  GET_ARTICLES_BY_USER_ID,
  GET_ARTICLES_EXCLUDE_USER_ID,
  SET_ERROR,
} from "../constants/action-types";
import { handleErrors } from "../../utils/fetchUtils";

export function getArticles() {
  return function (dispatch) {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then(handleErrors)
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: GET_ARTICLES, payload: json });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: SET_ERROR,
          payload: {
            appState: "error",
            message: "Failed to retrieve articles.",
          },
        });
      });
  };
}

export function getArticlesByUserId(userId) {
  return { type: GET_ARTICLES_BY_USER_ID, payload: { userId } };
}

export function getArticlesExcludeUserId(userId) {
  return { type: GET_ARTICLES_EXCLUDE_USER_ID, payload: { userId } };
}

export function setError(message) {
  return { type: SET_ERROR, payload: { message: message } };
}
