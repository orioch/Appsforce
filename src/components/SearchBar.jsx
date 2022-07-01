import React, { useEffect } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import { useSelector, useDispatch } from "react-redux";
import { setUsersToRender } from "../redux/features/dataSlice";

function SearchBar() {
  const { users } = useSelector((store) => store.data);
  const dispatch = useDispatch();

  //filter the users according to the search bar

  const handleFilter = (e) => {
    let text = e.target.value;
    let newArr = users.filter((user) => {
      const fullname =
        user.name.title + " " + user.name.first + " " + user.name.last;
      return fullname.toLowerCase().includes(text.toLowerCase());
    });
    dispatch(setUsersToRender(newArr));
  };

  return (
    <div className="searchbar">
      <Paper
        component="form"
        sx={{
          backgroundColor: "#e5eaf5",
          color: "#8458b3",
          fontWeight: "bold",
          borderRadius: "1rem",
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: "40vw",
          height: "calc(2rem + 1vw)",
        }}
      >
        <InputBase
          sx={{
            fontWeight: "bold",
            fontSize: "1.5rem",
            color: "#8458b3",
            ml: 1,
            flex: 1,
          }}
          onChange={handleFilter}
          placeholder="Search"
        />
      </Paper>
    </div>
  );
}

export default SearchBar;
