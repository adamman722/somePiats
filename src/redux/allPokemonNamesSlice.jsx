import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const allPokemonNamesSlice = createSlice({
  name: "allPokemonNames",
  initialState,
  reducers: {
    //Payload is the entire pokemon name list
    setsPokemonNameList: (state, { payload }) => {
      console.log("comming from save all names function", payload);
      payload.map((element, index) => {
        if (state.length < 1292) {
          state.push({ label: element.name, key: state.length });
        }
      });
    },
  },
});
export const { setsPokemonNameList } = allPokemonNamesSlice.actions;
export default allPokemonNamesSlice.reducer;
