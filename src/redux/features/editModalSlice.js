import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  user: {},
  showErrors: true,
};

const editModalSlice = createSlice({
  name: "editModal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.user = action.payload.user;
      state.showErrors = action.payload.showErrors;
    },
    closeModal: (state, action) => {
      state.isOpen = false;
    },
    setShowErrors: (state, action) => {
      state.showErrors = action.payload;
    },
    edit: (state, action) => {
      const value = action.payload.value;
      switch (action.payload.id) {
        case "title":
          state.user.name.title = value;
          break;
        case "first":
          state.user.name.first = value;
          break;
        case "last":
          state.user.name.last = value;
          break;
        case "email":
          state.user.email = value;
          break;
        case "country":
          state.user.location.country = value;
          break;
        case "state":
          state.user.location.state = value;
          break;
        case "city":
          state.user.location.city = value;
          break;
        case "street":
          state.user.location.street.name = value;
          break;
        case "number":
          state.user.location.street.number = value;
          break;

        default:
          break;
      }
    },
  },
});

export default editModalSlice;
