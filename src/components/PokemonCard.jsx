import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TypeDisplay from "./TypeDisplay";
import unKnown from "../assets/0201Unown.png";
import { useLocalStorage } from "@uidotdev/usehooks";

export default function PokemonCard({
  pokemon: { name, sprites, height, types, ...other },
}) {
  const [credentials, setUserCredentials] = useLocalStorage(
    "credentials",
    null
  );
  const [loggedIn, setLoggedIn] = useLocalStorage("loggedIn", null);

  const addToTeam = () => {
    const user = credentials.find((user) => user.id === loggedIn.id);
    const allButUser = credentials.filter((user) => user.id !== loggedIn.id);
    user.pokemonTeam.push({ name, sprites, height, types, ...other });

    setUserCredentials([...allButUser, user]);
  };

  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 26 }} color="text.secondary" gutterBottom>
            {name[0].toUpperCase() + name.substring(1)}
          </Typography>
          <img
            src={sprites.front_default ? sprites.front_default : unKnown}
            alt=""
            style={{ height: "100px" }}
          />
          <Typography variant="h5" component="div">
            Cheeseseseseseseseses
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <TypeDisplay types={types} />
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
        <CardActions>
          <Button size="small" onClick={addToTeam}>
            Add to team
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
