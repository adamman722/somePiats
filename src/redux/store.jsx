import { configureStore } from "@reduxjs/toolkit";
import pokemonDataReducer from "./pokeDataSlice";
import pokemonNamesReducer from "./allPokemonNamesSlice";
import { pokemonApi } from "./PokeDataQuery";
import darkModeReducer from "./darkModeSlice";
import userSelectedPokemonReducer from "./userSelectedPokemonSlice";

export const store = configureStore({
  reducer: {
    pokeData: pokemonDataReducer,
    pokemonNames: pokemonNamesReducer,
    darkMode: darkModeReducer,
    userSelectedPokemon: userSelectedPokemonReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});
