import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./features/dataSlice";
import editModal from "./features/editModalSlice";
import confirmModal from "./features/confirmModalSlice";

const editModalReducer = editModal.reducer;
const confirmModalReducer = confirmModal.reducer;
export const store = configureStore({
  reducer: {
    data: dataReducer,

    editModal: editModalReducer,
    confirmModal: confirmModalReducer,
  },
});
