import Tuits from "../tuits";
import * as service from "../../services/dislike-service";
import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

const MyDislikes = () => {
  const [dislikedTuits, setdislikedTuis] = useState([]);
  const findTuitsIDislike = () =>
    service
      .findAllTuitsDislikedByUser("me")
      .then((tuits) => setdislikedTuis(tuits));
  useEffect(findTuitsIDislike, []);
  return (
    <div>
      <Box py={3}>
        <Typography variant="h4">My Dislikes</Typography>
      </Box>
      <Tuits tuits={dislikedTuits} refreshTuits={findTuitsIDislike} />
    </div>
  );
};
export default MyDislikes;
