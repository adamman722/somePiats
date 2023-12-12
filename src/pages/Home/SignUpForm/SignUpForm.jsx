import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Box, Stack, TextField, Input } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function SignUpForm({ handleClose }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    handleClose();
  };

  console.log(watch("email")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack alignItems={"center"} spacing={2}>
        <Box>
          <Typography>Email:</Typography>
          {/* register your input into the hook by invoking the "register" function */}
          <TextField
            defaultValue="test"
            {...register("email", { required: true })}
            required
          />
        </Box>
        {/* include validation with required or other standard HTML validation rules */}
        <Box>
          <Typography>Password:</Typography>
          <TextField
            {...register("password", { required: true })}
            type="password"
            required
          />
        </Box>
        <Box>
          <Typography>Confirm Password:</Typography>
          <TextField
            {...register("confirmedPassword", { required: true })}
            type="password"
            required
          />
        </Box>
        <Box>
          <Typography>Age:</Typography>
          <TextField
            {...register("Age", { required: true })}
            required
            type="number"
          />
        </Box>
        {/* errors will return when field validation fails  */}
        <Button type="submit" fullWidth>
          Submit
        </Button>
      </Stack>
    </form>
  );
}

export default SignUpForm;
