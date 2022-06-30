import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersData } from "./redux/features/dataSlice";
import UsersContainer from "./components/UserContainer";
import EditModal from "./components/EditModal";
import ConfirmModal from "./components/ConfirmModal";
import Header from "./components/Header";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersData());
  }, []);

  return (
    <div className="App">
      <Header />
      <ConfirmModal />
      <EditModal />
      <UsersContainer />
    </div>
  );
}

export default App;
