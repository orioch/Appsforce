import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUsersData } from "./redux/features/dataSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersData());
  }, []);

  return <div className="App"></div>;
}

export default App;
