import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Box, Stack, TextField, Input } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useLocalStorage } from "@uidotdev/usehooks";

function SignUpForm({ handleClose, setUserAdded }) {
  const [credentials, setUserCredentials] = useLocalStorage(
    "credentials",
    null
  );
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data.password !== data.confirmedPassword) {
      setError("confirmedPassword", {
        type: "custom",
        message: "Aye yooooo  you shit does not match homie",
      });
      return;
    }
    if (!credentials) {
      setUserCredentials([
        {
          id: crypto.randomUUID(),
          email: data.email,
          password: data.password,
          username: data.username,
          pokemonTeam: [],
        },
      ]);
    } else {
      setUserCredentials([
        ...credentials,
        {
          id: crypto.randomUUID(),
          email: data.email,
          password: data.password,
          username: data.username,
          pokemonTeam: [],
        },
      ]);
    }
    handleClose();
    setUserAdded(true);
  };

  // console.log(watch("email")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack alignItems={"center"} spacing={2}>
        <Box>
          <Typography>Username:</Typography>
          {/* register your input into the hook by invoking the "register" function */}
          <TextField {...register("username", { required: true })} required />
        </Box>
        <Box>
          <Typography>Email:</Typography>
          {/* register your input into the hook by invoking the "register" function */}
          <TextField {...register("email", { required: true })} required />
        </Box>
        {/* include validation with required or other standard HTML validation rules */}
        <Box>
          <Typography>Password:</Typography>
          <TextField
            {...register("password", {
              required: true,
            })}
            type="password"
            required
          />
        </Box>
        <Box>
          <Typography>Confirm Password:</Typography>
          <TextField
            {...register("confirmedPassword", {
              required: true,
            })}
            type="password"
            required
          />
        </Box>
        {errors.confirmedPassword && (
          <Typography
            variant="h6"
            sx={{ color: "red", fontWeight: "bold", textAlign: "center" }}
          >
            Aye yo you shit do not match homie
          </Typography>
        )}
        <Box>
          <Typography>Age:</Typography>
          <TextField
            {...register("Age", { required: true })}
            required
            type="number"
          />
        </Box>
        {/* errors will return when field validation fails  */}
        <Button type="submit" fullWidth onClick={() => console.log(errors)}>
          Submit
        </Button>
      </Stack>
    </form>
  );
}

export default SignUpForm;
