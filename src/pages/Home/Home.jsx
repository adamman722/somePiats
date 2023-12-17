import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import { Box, Stack, TextField } from "@mui/material";
import SignUpForm from "./SignUpForm/SignUpForm";
import Modal from "@mui/material/Modal";
import { useLocalStorage } from "@uidotdev/usehooks";
import Snackbar from "@mui/material/Snackbar";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
  borderRadius: "10px",
};

function Home() {
  const [credentials, setUserCredentials] = useLocalStorage(
    "credentials",
    null
  );

  const [loggedIn, setLoggedIn] = useLocalStorage("loggedIn", null);
  const [open, setOpen] = React.useState(false);
  const [userAdded, setUserAdded] = React.useState(false);
  const [userEmailInput, setUserEmailInput] = React.useState("");
  const [userPasswordInput, setUserPasswordInput] = React.useState("");
  const navigate = useNavigate();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const searchCredentials = () => {
    console.log(credentials);
    const foundUser = credentials.find(
      (user) =>
        user.email.toLowerCase() === userEmailInput.toLowerCase() &&
        user.password == userPasswordInput
    );

    if (foundUser) {
      setLoggedIn(foundUser);
      navigate("/home");
    }
  };

  return (
    <Box minHeight={"95vh"}>
      <Stack
        gap={2}
        justifyContent="center"
        alignItems="center"
        minHeight={"95vh"}
      >
        <TextField
          placeholder="Email"
          type="email"
          label="Email"
          onChange={(e) => setUserEmailInput(e.target.value)}
        ></TextField>
        <TextField
          placeholder="Password"
          type="password"
          label="Password"
          onChange={(e) => setUserPasswordInput(e.target.value)}
        ></TextField>
        <Box>
          <Stack spacing={1}>
            <Button
              variant="contained"
              sx={{ width: "200px" }}
              onClick={searchCredentials}
            >
              Login
            </Button>
            <Button
              variant="contained"
              sx={{ width: "200px" }}
              onClick={handleOpen}
            >
              Sign up!
            </Button>
          </Stack>
        </Box>
      </Stack>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <SignUpForm handleClose={handleClose} setUserAdded={setUserAdded} />
        </Box>
      </Modal>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={userAdded}
        autoHideDuration={5000}
        onClose={() => setUserAdded(false)}
        message="User has been added son."
      />
    </Box>
  );
}

export default Home;
