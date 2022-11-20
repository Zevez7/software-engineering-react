import { useState } from "react";
import * as service from "../../services/auth-service";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";

const Signup = () => {
  const [newUser, setNewUser] = useState({});
  const navigate = useNavigate();
  const signup = () =>
    service
      .signup(newUser)
      .then(() => navigate("/profile"))
      .catch((e) => alert(e));
  return (
    <div>
      <Typography variant="h4">Signup</Typography>
      <Box pt={2}>
        <Typography>Username</Typography>
        <input
          onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
        />
      </Box>
      <Box pt={2}>
        <Typography>Password</Typography>
        <input
          onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
        />
      </Box>
      <Box pt={2}>
        <Typography>Email</Typography>
        <input
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
      </Box>
      <Box pt={2}>
        <Button variant="outlined" onClick={signup}>
          Signup
        </Button>
      </Box>
    </div>
  );
};
export default Signup;
