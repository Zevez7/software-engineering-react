import Tuits from "../tuits";
import * as service from "../../services/like-service";
import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

const MyLikes = () => {
  const [likedTuits, setLikedTuis] = useState([]);
  const findTuitsILike = () =>
    service.findAllTuitsLikedByUser("me").then((tuits) => setLikedTuis(tuits));
  useEffect(findTuitsILike, []);
  return (
    <div>
      <Box py={3}>
        <Typography variant="h4">My Likes</Typography>
      </Box>
      <Tuits tuits={likedTuits} refreshTuits={findTuitsILike} />
    </div>
  );
};
export default MyLikes;
