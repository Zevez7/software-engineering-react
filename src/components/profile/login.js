import { useNavigate } from "react-router-dom";
import { useState } from "react";
import * as service from "../../services/auth-service";
import { Box, Typography, Button } from "@mui/material";
import Signup from "./signup";
const Login = () => {
  const [loginUser, setLoginUser] = useState({});
  const navigate = useNavigate();
  const login = () => {
    console.log(loginUser);
    return service
      .login(loginUser)
      .then((user) => {
        console.log(user);
        navigate("/profile/mytuits");
      })
      .catch((e) => alert(e));
  };
  return (
    <div>
      <Typography variant="h4">Login</Typography>

      <Box pt={3}>
        <Typography>Username</Typography>
        <input
          onChange={(e) =>
            setLoginUser({ ...loginUser, username: e.target.value })
          }
        />
      </Box>
      <Box pt={3}>
        <Typography>Password</Typography>
        <input
          onChange={(e) =>
            setLoginUser({ ...loginUser, password: e.target.value })
          }
        />
      </Box>
      <Box pt={3}>
        <Button variant="outlined" onClick={login}>
          Login
        </Button>
      </Box>

      <Box pt={3}>
        <Signup />
      </Box>
    </div>
  );
};

export default Login;
