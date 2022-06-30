import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { generateId } from "./../../utils/general";

const url = "https://randomuser.me/api/?results=10";
const initialState = {
  users: [],
  info: {},
  isLoading: false,
};

export const getUsersData = createAsyncThunk("users/getUsersData", () => {
  return fetch(url)
    .then((res) => res.json())
    .catch((err) => console.log(err));
});

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    removeUser: (state, action) => {
      state.users = state.users.filter(
        (user) => user.login.uuid !== action.payload.login.uuid
      );
    },
    //if payload.uuid is null - create a new user instead of change user
    changeUser: (state, action) => {
      const index = state.users.findIndex(
        (user) => user.login.uuid === action.payload.uuid
      );
      state.users[index] = action.payload.newUser;
    },
    createNewUser: (state, action) => {
      let newUser = { ...action.payload };
      let newId = generateId();
      newUser.login = { uuid: newId };
      newUser.picture = {
        large:
          "https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg",
      };
      state.users.push(newUser);
    },
  },
  extraReducers: {
    [getUsersData.pending]: (state) => {
      state.isLoading = true;
    },
    [getUsersData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.users = action.payload.results;
      state.info = action.payload.info;
    },
    [getUsersData.pending]: (state) => {
      state.isLoading = false;
    },
  },
});
export const { changeUser, createNewUser, removeUser } = dataSlice.actions;
export default dataSlice.reducer;
