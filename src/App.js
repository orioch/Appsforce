import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUsersData } from "./redux/features/dataSlice";
import UsersContainer from "./components/UserContainer";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersData());
  }, []);

  return (
    <div className="App">
      <UsersContainer />
    </div>
  );
}

export default App;
