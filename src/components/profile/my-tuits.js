import { useEffect, useState } from "react";
import * as service from "../../services/tuits-service";
import { Box, Typography, Button } from "@mui/material";
import Tuits from "../tuits";

const MyTuits = () => {
  const [tuits, setTuits] = useState([]);

  const findMyTuits = () =>
    service.findTuitsByUser("me").then((tuits) => setTuits(tuits));
  useEffect(findMyTuits, []);

  const deleteTuit = (tid) => service.deleteTuit(tid).then(findMyTuits);

  return (
    <div>
      <Box py={3}>
        <Typography variant="h4">MyTuits</Typography>
      </Box>
      <Tuits tuits={tuits} deleteTuit={deleteTuit} refreshTuits={findMyTuits} />
    </div>
  );
};
export default MyTuits;
