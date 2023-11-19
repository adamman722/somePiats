import { createSlice } from "@reduxjs/toolkit";
import { pokemonApi } from "./PokeDataQuery";

const initialState = [];

export const pokemonDataSlice = createSlice({
  name: "pokemonDataSlice",
  initialState,
  reducers: {
    addPokemonToList: (state, { payload }) => {
      state.push(payload);
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      pokemonApi.endpoints.getPokemonByName.matchFulfilled,
      (state, { payload }) => {
        // console.log("Coming from payload", payload);
        let foundPokemon = state.find(
          (pokemon) => pokemon.name === payload.name
        );
        if (!foundPokemon) {
          state.push(payload);
        }
      }
    );
  },
});
export const { addPokemonToList } = pokemonDataSlice.actions;
export default pokemonDataSlice.reducer;
