import {
  BarChart,
  CalendarMonth,
  GifBoxOutlined,
  Map,
  Portrait,
  SentimentSatisfiedAlt,
} from "@mui/icons-material";
import React from "react";
import Tuits from "../tuits";
import tuitsArray from "../tuits/tuits-data.json";

const Home = () => {
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
                <Portrait sx={{ m: 1 }} />
                <GifBoxOutlined sx={{ m: 1 }} />
                <BarChart sx={{ m: 1 }} />
                <SentimentSatisfiedAlt sx={{ m: 1 }} />
                <CalendarMonth sx={{ m: 1 }} />
                <Map sx={{ m: 1 }} />
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
