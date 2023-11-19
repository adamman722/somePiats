import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PokemonCard from "../../components/PokemonCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useGetUserSelecedPokemonByNameQuery } from "../../redux/PokeDataQuery";
import { Button, Stack } from "@mui/material";
import { addPokemonToList } from "../../redux/pokeDataSlice";
import { addPokemonToListUserSlice } from "../../redux/userSelectedPokemonSlice";

function LandingPage() {
  const sliceData = useSelector((state) => state.pokeData);
  const pokemonNamesFromSlice = useSelector((state) => state.pokemonNames);
  const userSelecedPoke = useSelector((state) => state.userSelectedPokemon);

  const [userInput, setUserInput] = useState("");
  const [preLoadedPoke, setPreLoadedPoke] = useState([]);
  const [userSelecedPokemon, setUserSelectedPokemon] = useState([]);

  const dispatch = useDispatch();

  async function GetPokemonViaUserInput() {
    console.log(userInput);
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${userInput}`);
    const pokemon = await resp.json();
    dispatch(addPokemonToListUserSlice(pokemon));
  }

  useEffect(() => {
    setPreLoadedPoke(() =>
      sliceData.map((pokemon, index) => {
        return (
          <Grid item xs={4} key={index}>
            <PokemonCard pokemon={pokemon} key={index} />
          </Grid>
        );
      })
    );

    setUserSelectedPokemon(() =>
      userSelecedPoke.userPokemon.map((pokeBoi, index) => (
        <Grid item xs={4}>
          <PokemonCard pokemon={pokeBoi} key={index} />
        </Grid>
      ))
    );
  }, [sliceData, userSelecedPoke]);

  return (
    <Box sx={{ flexGrow: 1, flexShrink: 10 }}>
      {/* {data ? <div>{data.name}</div> : null} */}
      <Grid container spacing={10}>
        {/* Can make this into it's own component */}
        {pokemonNamesFromSlice ? (
          <Grid item xs={1000} justifyContent="center">
            <Stack
              direction="row"
              spacing={10}
              justifyContent="center"
              sx={{
                boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
                position: "fixed",
                top: 0,
                left: 0,
                padding: "10px 0px",
                minWidth: "100vw",
                margin: "auto",
                zIndex: 2,
                backgroundColor: "white",
              }}
            >
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={pokemonNamesFromSlice}
                sx={{ width: 300 }}
                //here is where we can change capture the input value of said auto complete
                onInputChange={(event, value) => setUserInput(value)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Pokemon"
                    variant="outlined"
                    sx={{ backgroundColor: "white" }}
                  />
                )}
              />
              <Button
                variant="outlined"
                sx={{ width: 300 }}
                onClick={() => GetPokemonViaUserInput()}
              >
                Search for your favorite
              </Button>
              <Button variant="outlined" sx={{ width: 300 }}>
                View your team
              </Button>
              <Button variant="outlined" sx={{ width: 100 }}>
                Dark Mode?
              </Button>
            </Stack>
          </Grid>
        ) : null}
        {userSelecedPokemon.length !== 0 ? userSelecedPokemon : preLoadedPoke}
      </Grid>
    </Box>
  );
}

export default LandingPage;
