import { createSlice } from "@reduxjs/toolkit";
const initialState = false;
export const darkModeSlice = createSlice({
  name: "darkModeSlice",
  initialState,
  reducers: {
    switchDarkMode: (state) => {
      state = !state;
    },
  },
});

export const { switchDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
