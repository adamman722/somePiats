//React
import React, { useEffect, useRef, useState } from "react";
//Redux
import { useDispatch, useSelector } from "react-redux";
//Components
import PokemonCard from "../../components/PokemonCard";
import { useGetUserSelecedPokemonByNameQuery } from "../../redux/PokeDataQuery";
import { addPokemonToList } from "../../redux/pokeDataSlice";
import { addPokemonToListUserSlice } from "../../redux/userSelectedPokemonSlice";

//MUI Inports
import { Button, Stack } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
//UseHooks
import { useLocalStorage } from "@uidotdev/usehooks";
import { useNavigate } from "react-router-dom";

function LandingPage({ toggleDarkMode }) {
  //Redux Slices
  const sliceData = useSelector((state) => state.pokeData);
  const pokemonNamesFromSlice = useSelector((state) => state.pokemonNames);
  const userSelecedPoke = useSelector((state) => state.userSelectedPokemon);
  //States
  const [userInput, setUserInput] = useState("z");
  const [preLoadedPoke, setPreLoadedPoke] = useState([]);
  const [userSelecedPokemon, setUserSelectedPokemon] = useState([]);
  const [snackState, setSnackState] = useState({
    open: false,
    vertical: "top",
    horizontal: "right",
  });
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useLocalStorage("loggedIn", null);
  const { vertical, horizontal, open } = snackState;
  const dispatch = useDispatch();

  //Checking Themes
  const theme = useTheme();
  console.log(theme);
  //

  const handleClose = () => {
    setSnackState({ ...snackState, open: false });
  };

  async function GetPokemonViaUserInput() {
    const resp = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${
        userInput ? userInput : "placeHolderCuzILazy"
      }`
    );
    if (!resp.ok) {
      setSnackState({ ...snackState, open: true });
    } else {
      const pokemon = await resp.json();
      dispatch(addPokemonToListUserSlice(pokemon));
    }
  }

  useEffect(() => {
    if (!loggedIn) {
      navigate("/");
    }

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
                boxShadow: `${
                  theme.palette.mode === "dark"
                    ? "rgba(255, 255, 255, 0.24) 0px 3px 8px"
                    : "rgba(0, 0, 0, 0.24) 0px 3px 8px"
                }`,
                position: "fixed",
                top: 0,
                left: 0,
                padding: "10px 0px",
                minWidth: "100vw",
                margin: "auto",
                zIndex: 2,
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
                    label="Type to find your favorite Pokemon"
                    variant="outlined"
                  />
                )}
              />
              <Button
                variant="outlined"
                sx={{ width: 300 }}
                onClick={() => GetPokemonViaUserInput()}
              >
                Click to Search!
              </Button>
              <Button variant="outlined" sx={{ width: 300 }}>
                View your team
              </Button>
              <Button
                variant="outlined"
                sx={{ width: 150 }}
                onClick={() => toggleDarkMode()}
              >
                Dark Mode?
              </Button>
              <Button
                variant="outlined"
                sx={{
                  width: 150,
                  backgroundColor: "red",
                  fontWeight: "bold",
                }}
                onClick={() => {
                  setLoggedIn("");
                  navigate("/");
                }}
              >
                Log out.
              </Button>
            </Stack>
          </Grid>
        ) : null}
        {/* The outlet to about more pokemon goes here just need to rework some things */}
      </Grid>
      <Grid marginTop={2} container spacing={10}>
        {userSelecedPokemon.length !== 0 ? userSelecedPokemon : preLoadedPoke}
      </Grid>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        autoHideDuration={6000}
        open={open}
        onClose={handleClose}
        message="Invalid Pokemon name"
        key={vertical + horizontal}
      />
    </Box>
  );
}

export default LandingPage;
