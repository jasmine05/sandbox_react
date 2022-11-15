import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    allTodos: [],
  },
  reducers: {
    ADD: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      console.log("ADD something");
      //   state.allTodos.push(action.item);
    },
    REMOVE: (state) => {
      console.log("REMOVE something");
    },
    FILTER: (state, action) => {},
  },
});

// Action creators are generated for each case reducer function
export const { ADD, REMOVE, FILTER } = todoSlice.actions;

export default todoSlice.reducer;
