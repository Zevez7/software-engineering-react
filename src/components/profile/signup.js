import { useState } from "react";
import * as service from "../../services/auth-service";
import { useNavigate } from "react-router-dom";
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
      <h1>Signup</h1>
      <div style={{ padding: 3 }}>
        <div>user name</div>
        <input
          onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
        />
      </div>
      <div style={{ padding: 3 }}>
        <div>password</div>
        <input
          onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
        />
      </div>
      <div style={{ padding: 3 }}>
        <div>email</div>
        <input
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
      </div>
      <div style={{ padding: 3 }}>
        <button onClick={signup}>Signup</button>
      </div>
    </div>
  );
};
export default Signup;
