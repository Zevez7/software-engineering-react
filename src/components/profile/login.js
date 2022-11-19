import { useNavigate } from "react-router-dom";
import { useState } from "react";
import * as service from "../../services/auth-service";

const Login = () => {
  const [loginUser, setLoginUser] = useState({});
  const navigate = useNavigate();
  const login = () =>
    service
      .login(loginUser)
      .then((user) => navigate("/profile/mytuits"))
      .catch((e) => alert(e));
  return (
    <div>
      <h1>Login</h1>

      <div style={{ padding: 3 }}>
        <div>User name</div>
        <input
          onChange={(e) =>
            setLoginUser({ ...loginUser, username: e.target.value })
          }
        />
      </div>
      <div style={{ padding: 3 }}>
        <div>User name</div>
        <input
          onChange={(e) =>
            setLoginUser({ ...loginUser, password: e.target.value })
          }
        />
      </div>
      <div style={{ padding: 3 }}>
        <button onClick={login}>Login</button>
      </div>
    </div>
  );
};

export default Login;
