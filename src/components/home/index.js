import {
  BarChart,
  CalendarMonth,
  GifBoxOutlined,
  Map,
  Portrait,
  SentimentSatisfiedAlt,
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import Tuits from "../tuits";
import tuitsArray from "../tuits/tuits-data.json";
import { Controller, useForm } from "react-hook-form";
import { Button, TextField, Typography } from "@mui/material";
import * as authService from "../../services/auth-service";
import * as tuitService from "../../services/tuits-service";

const Home = () => {
  const [authprofile, setAuthProfile] = useState({});
  const [tuits, setTuits] = useState();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const user = await authService.profile();
        setAuthProfile(user);
      } catch (e) {
        // console.log("session profile not found, send to login page");
        // navigate("/profile/login");
      }
    };
    fetchProfile();
  }, []);
  const fetchAllTuits = async () => {
    try {
      const alltuit = await tuitService.findAllTuits();
      console.log(alltuit);
      setTuits(alltuit);
    } catch (e) {
      // navigate("/profile/login");
    }
  };
  useEffect(() => {
    fetchAllTuits();
  }, []);

  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      tuit: "",
    },
  });

  const onSubmit = async (data) => {
    console.log(data);
    const uid = authprofile._id;

    const tuitCreated = await tuitService.createTuitByUser(uid, data);
    console.log(tuitCreated);
    const alltuit = await tuitService.findAllTuits();
    setTuits(alltuit);
    reset();
  };

  console.log(authprofile);
  console.log(tuits);

  return (
    <div className="ttr-home">
      <div className="border border-bottom-0">
        <h4 className="fw-bold p-2">Home Screen</h4>
        <div className="d-flex">
          <div className="p-2">
            <img
              className="ttr-width-50px rounded-circle"
              src="../images/nasa-logo.jpg"
              alt="NASA logo"
            />
          </div>
          <div className="p-2 w-100">
            <form>
              <Typography variant="body2" sx={{ color: "gray", mb: 1 }}>
                {authprofile.username
                  ? `Logged in as ${authprofile.username}`
                  : `Not logged in`}
              </Typography>

              <Controller
                name={"tuit"}
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    id="tuit"
                    fullWidth
                    label="Type your tuit here"
                    variant="outlined"
                    value={value}
                    onChange={onChange}
                    multiline
                    rows={4}
                    sx={{ mb: 1, border: "none" }}
                  />
                )}
              />
            </form>
            <div className="row">
              <div className="col-9 ttr-font-size-150pc text-primary">
                <Portrait sx={{ m: 1 }} />
                <GifBoxOutlined sx={{ m: 1 }} />
                <BarChart sx={{ m: 1 }} />
                <SentimentSatisfiedAlt sx={{ m: 1 }} />
                <CalendarMonth sx={{ m: 1 }} />
                <Map sx={{ m: 1 }} />
              </div>
              <div className="col-3">
                <Button
                  size="small"
                  variant="contained"
                  disabled={!authprofile.username}
                  onClick={handleSubmit(onSubmit)}
                >
                  Tuit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Tuits tuits={tuits} refreshTuits={fetchAllTuits} />
    </div>
  );
};
export default Home;
