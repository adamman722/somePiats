import { useState, useEffect } from "react";
import "./App.css";
import LandingPage from "./pages/Landing/LandingPage";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useGetPokemonByNameQuery } from "./redux/PokeDataQuery";
import { setsPokemonNameList } from "./redux/allPokemonNamesSlice";
import { useDispatch } from "react-redux";

function App() {
  //Manage LocalStorage to help speed up time to use auto complete
  const [pokemonNames, savePokemonNames] = useLocalStorage("pNames", null);

  //4 main calls that are going to be displayed if you do not have a team of at least 5 set already
  //TODO: need to make a function to display the pokemon if they are there
  useGetPokemonByNameQuery("metagross");
  useGetPokemonByNameQuery("mewtwo");
  useGetPokemonByNameQuery("ceruledge");
  useGetPokemonByNameQuery("snom");
  const dispatch = useDispatch();

  //This function is used to check to see if items in local storage have been saved if not, it will reach out to real API
  function checkAndSetPokemonNames() {
    if (pokemonNames) {
      console.log("Hit local storage");
      dispatch(setsPokemonNameList(pokemonNames));
    }
    if (pokemonNames === null) {
      console.log("Hit fetch");
      fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
        .then((resp) => resp.json())
        .then((data) => {
          dispatch(setsPokemonNameList(data.results));
          savePokemonNames(data.results);
        });
    }
  }

  useEffect(() => {
    checkAndSetPokemonNames();
  }, []);

  return (
    <>
      <LandingPage />
    </>
  );
}

export default App;
