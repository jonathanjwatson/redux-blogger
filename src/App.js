import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ErrorAlert from "./components/ErrorAlert/ErrorAlert";
import Loading from "./pages/Loading/Loading";
import Posts from "./pages/Posts/Posts";
import { getArticles } from "./redux/actions/index";

function App() {
  const appState = useSelector((state) => state.appState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);

  return (
    <div>
      {appState === "error" && <ErrorAlert />}
      {appState === "loading" && <Loading />}
      {appState === "display" && <Posts />}
    </div>
  );
}

export default App;
