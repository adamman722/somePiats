import { createSlice } from "@reduxjs/toolkit";

const initialState = { userPokemon: [], alreadyInList: false };

export const userSelectedPokemonSlice = createSlice({
  name: "userSelectedPokemonSlice",
  initialState,
  reducers: {
    addPokemonToListUserSlice: (state, { payload }) => {
      state.userPokemon.push(payload);
    },
    deletePokemonFromList: (state, { payload }) => {
      state.userPokemon = state.userPokemon.filter(
        (poekmon) => poekmon.name !== payload.name
      );
    },
  },
});

export const { addPokemonToListUserSlice } = userSelectedPokemonSlice.actions;
export default userSelectedPokemonSlice.reducer;
