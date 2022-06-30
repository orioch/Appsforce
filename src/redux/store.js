import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./features/dataSlice";
import modalReducer from "./features/modalSlice";
export const store = configureStore({
  reducer: {
    data: dataReducer,
    modal: modalReducer,
  },
});
