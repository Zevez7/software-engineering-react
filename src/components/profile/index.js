import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import MyTuits from "./my-tuits";
import * as service from "../../services/auth-service";
import { Box, Button } from "@mui/material";
import MyLikes from "./my-likes";

const Profile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const user = await service.profile();
        setProfile(user);
      } catch (e) {
        navigate("/login");
      }
    };
    fetchProfile();
  }, [navigate]);

  const logout = () => {
    service.logout().then(() => navigate("/login"));
  };

  return (
    <div>
      <h4>{profile.username}</h4>
      <h6>@{profile.username}</h6>
      <button onClick={logout}>Logout</button>

      <Box my={3}>
        <Button
          variant="contained"
          component={RouterLink}
          to="mytuits"
          sx={{ mx: 3 }}
        >
          My Tuits
        </Button>

        <Button
          variant="contained"
          component={RouterLink}
          to="mylikes"
          sx={{ mx: 3 }}
        >
          My Likes
        </Button>
      </Box>

      <Routes>
        <Route path="mytuits" element={<MyTuits />} />
        {/* <Route path="/tuits-and-replies" element={<TuitsAndReplies />} /> */}
        {/* <Route path="/media" element={<Media />} /> */}
        <Route path="mylikes" element={<MyLikes />} />
      </Routes>
    </div>
  );
};
export default Profile;
