import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    allTodos: [
      { title: "Clean house", status: "open" },
      { title: "Wash dishes", status: "open" },
      { title: "Dentist appointment", status: "complete" },
      { title: "Gift shopping", status: "open" },
      { title: "Haufe workshop", status: "open" },
    ],
    filteredTodos: [],
  },
  reducers: {
    ADD: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.allTodos.push(action.payload);
    },
    REMOVE: (state) => {
      console.log("REMOVE something");
    },
    FILTER: (state, action) => {
      console.log("FILTER", action.payload);
      // state.filteredTodos = state.allTodos.filter(
      //   (data) => data.status === action.payload
      // );
    },
  },
});

// Action creators are generated for each case reducer function
export const { ADD, REMOVE, FILTER } = todoSlice.actions;

export default todoSlice.reducer;
