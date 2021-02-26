import { GET_ARTICLES } from "../constants/action-types";

export function getArticles() {
  return function (dispatch) {
      console.log("Fetching articles")
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: GET_ARTICLES, payload: json });
      });
  };
}
