import { GET_ARTICLES } from "../constants/action-types";

const initialState = {
  articles: [],
};

function rootReducer(state = initialState, action) {
  if (action.type === GET_ARTICLES) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload),
    });
  }
  return state;
}

export default rootReducer;
