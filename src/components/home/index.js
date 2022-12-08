import React, { useEffect, useState } from "react";
import Tuits from "../tuits";
import tuitsArray from "../tuits/tuits-data.json";
import * as authService from "../../services/auth-service";
import * as tuitService from "../../services/tuits-service";
import { Controller, useForm } from "react-hook-form";

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
      setTuits(alltuit);
      console.log(alltuit);
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

  console.log(tuits);
  const onSubmit = async (data) => {
    const uid = authprofile._id;

    const tuitCreated = await tuitService.createTuitByUser(uid, data);
    const alltuit = await tuitService.findAllTuits();
    setTuits(alltuit);
    reset();
  };

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
            <textarea
              placeholder="What's happening?"
              className="w-100 border-0"
            ></textarea>
            <div className="row">
              <div className="col-10 ttr-font-size-150pc text-primary">
                <i className="fas fa-portrait me-3"></i>
                <i className="far fa-gif me-3"></i>
                <i className="far fa-bar-chart me-3"></i>
                <i className="far fa-face-smile me-3"></i>
                <i className="far fa-calendar me-3"></i>
                <i className="far fa-map-location me-3"></i>
              </div>
              <div className="col-2">
                <a
                  className={`btn btn-primary rounded-pill fa-pull-right
                                fw-bold ps-4 pe-4`}
                >
                  Tuit
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Tuits tuits={tuitsArray} />
    </div>
  );
};
export default Home;
