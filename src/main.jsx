import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.jsx";
import { ThemeProvider, createTheme } from "@mui/material/styles";

/*
For this challenge you will create a pokemon finder/randomizer, where you will call the pokeAPI to get the data.
For this app your user is requesting:
        1. To be able to see some preselected pokemon on the main screen.
        2. The user wants to be able to search for all pokemon via a search function.
        3. Each pokemon should be able to be selected to view more details on said pokemon.
        4. Within each pokemon details page the user wants to be able to save pokemon to favorites page.
        Bonus:
             The user wants to save the favorited pokemon to a local storage and if I have pokemon in my local storage I want them to be displayed to the front page thus when I 
              refresh the page my favorite will be saved.
*/

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
