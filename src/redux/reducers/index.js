import {
  GET_ARTICLES,
  GET_ARTICLES_BY_USER_ID,
  GET_ARTICLES_EXCLUDE_USER_ID,
} from "../constants/action-types";

const initialState = {
  articles: [],
  userArticles: [],
  otherArticles: [],
};

function rootReducer(state = initialState, action) {
  if (action.type === GET_ARTICLES) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload),
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
  return state;
}

export default rootReducer;
