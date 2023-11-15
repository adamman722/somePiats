import { createSlice } from "@reduxjs/toolkit";

const initialState = ["Metagross"];

export const pokemonDataSlice = createSlice({
  name: "pokemonDataSlice",
  initialState,
  reducers: {
    addPokemonToList: (state, { payload }) => {
      state.push(payload);
    },
  },
});
export const { addPokemonToList } = pokemonDataSlice.actions;
export default pokemonDataSlice.reducer;
