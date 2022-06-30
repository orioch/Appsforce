import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  user: {},
};

const confirmModalSlice = createSlice({
  name: "confirmModal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.user = action.payload;
    },
    closeModal: (state, action) => {
      state.isOpen = false;
    },
  },
});
export default confirmModalSlice;
