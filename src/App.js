import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "./redux/actions/index";

function App() {
  const articles = useSelector((state) => state.articles);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);

  useEffect(() => {
    console.log(articles);
  }, [articles]);

  return <div className="App"></div>;
}

export default App;
