import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  tagTypes: ["pokemon"],
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`,
      //I can think of something to invalidate tags
    }),
    getUserSelecedPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`,
      //I can think of something to invalidate tags
    }),
    getAllPokemonNames: builder.query({
      query: () => "pokemon?limit=100000&offset=0",
    }),
  }),
});

export const {
  useGetPokemonByNameQuery,
  useGetAllPokemonNamesQuery,
  useGetUserSelecedPokemonByNameQuery,
} = pokemonApi;
