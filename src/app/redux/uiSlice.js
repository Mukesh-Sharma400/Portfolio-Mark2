import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    theme: "dark",
  },
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

const uiReducer = uiSlice.reducer;
const selectUi = (state) => state.ui;
const { setTheme } = uiSlice.actions;

export { uiReducer, selectUi, setTheme };
