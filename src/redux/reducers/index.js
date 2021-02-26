import {
  GET_ARTICLES,
  GET_ARTICLES_BY_USER_ID,
  GET_ARTICLES_EXCLUDE_USER_ID,
  SET_ERROR,
} from "../constants/action-types";

const initialState = {
  articles: [],
  userArticles: [],
  otherArticles: [],
  appState: "loading",
  message: "",
};

function rootReducer(state = initialState, action) {
  if (action.type === GET_ARTICLES) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload),
      appState: "display",
    });
  }
  if (action.type === GET_ARTICLES_BY_USER_ID) {
    const filteredArticles = state.articles.filter(
      (article) => (article.userId = action?.payload?.userId)
    );
    return Object.assign({}, state, {
      userArticles: filteredArticles,
    });
  }
  if (action.type === GET_ARTICLES_EXCLUDE_USER_ID) {
    const filteredArticles = state.articles.filter(
      (article) => article.userId !== action?.payload?.userId
    );
    return Object.assign({}, state, {
      otherArticles: filteredArticles,
    });
  }
  if (action.type === SET_ERROR) {
    return Object.assign({}, state, {
      appState: action.payload.appState,
      message: action.payload.message,
    });
  }
  return state;
}

export default rootReducer;
