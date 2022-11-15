import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./todoReducer";

export default configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});
