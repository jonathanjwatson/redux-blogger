import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Posts from "./pages/Posts/Posts";
import { getArticles } from "./redux/actions/index";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);

  return (
    <div>
      <Posts />
    </div>
  );
}

export default App;
