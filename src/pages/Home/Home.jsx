import React from "react";
import Button from "@mui/material/Button";
import { Box, Stack, TextField } from "@mui/material";
import SignUpForm from "./SignUpForm/SignUpForm";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Home() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box minHeight={"95vh"}>
      <Stack
        gap={2}
        justifyContent="center"
        alignItems="center"
        minHeight={"95vh"}
      >
        <TextField placeholder="Email" type="email" label="Email"></TextField>
        <TextField
          placeholder="Password"
          type="password"
          label="Password"
        ></TextField>
        <Box>
          <Stack spacing={1}>
            <Button variant="contained" sx={{ width: "200px" }}>
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
          <SignUpForm handleClose={handleClose} />
        </Box>
      </Modal>
    </Box>
  );
}

export default Home;
