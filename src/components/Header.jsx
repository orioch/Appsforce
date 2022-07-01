import React from "react";
import { useDispatch } from "react-redux";
import editModal from "../redux/features/editModalSlice";
import SearchBar from "./SearchBar.jsx";

function Header() {
  const dispatch = useDispatch();
  //when opening edit modal with an empty user - all the fields will be empties and we will use it to create a new modal
  const openEditModal = (user) => {
    dispatch(
      editModal.actions.openModal({
        showErrors: false,
        user: {
          name: { title: "Mr", first: "", last: "" },
          email: "",
          location: {
            country: "",
            state: "",
            city: "",
            street: {
              name: "",
              number: 0,
            },
          },
        },
      })
    );
  };
  return (
    <div className="header">
      <div className="logo">AppsForce</div>
      <SearchBar />
      <button onClick={openEditModal} className="add-user-btn">
        Add User
      </button>
    </div>
  );
}

export default Header;
