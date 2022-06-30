import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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
    changeUser: (state, action) => {
      const index = state.users.findIndex(
        (user) => user.login.uuid === action.payload.uuid
      );
      state.users[index] = action.payload.newUser;
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
export const { changeUser } = dataSlice.actions;
export default dataSlice.reducer;
