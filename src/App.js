import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersData } from "./redux/features/dataSlice";
import UsersContainer from "./components/UserContainer";
import EditModal from "./components/EditModal";
import ConfirmModal from "./components/ConfirmModal";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersData());
  }, []);

  return (
    <div className="App">
      <ConfirmModal />
      <EditModal />
      <UsersContainer />
    </div>
  );
}

export default App;
