import { configureStore } from "@reduxjs/toolkit";
import pokemonDataReducer from "./pokeDataSlice";
export const store = configureStore({
  reducer: {
    pokeData: pokemonDataReducer,
  },
});
