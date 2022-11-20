import React from "react";

const TuitStats = ({ tuit, likeTuit = () => {} }) => {
  let likeValueDisplayLogic;

  if (tuit.stats && tuit.stats.likes) {
    if (tuit.stats.likes > 0) {
      likeValueDisplayLogic = (
        <i className="fas fa-heart me-1" style={{ color: "red" }}></i>
      );
    }
  } else if (tuit.stats && tuit.stats.likes <= 0) {
    likeValueDisplayLogic = <i className="fas fa-heart me-1" style={{ color: "gray" }}></i>;
  }
  return (
    <div className="row mt-2">
      <div className="col">
        <i className="far fa-message me-1"></i>
        {tuit.stats && tuit.stats.replies}
      </div>
      <div className="col">
        <i className="far fa-retweet me-1"></i>
        {tuit.stats && tuit.stats.retuits}
      </div>
      <div className="col">
        <span onClick={() => likeTuit(tuit)}>
          {likeValueDisplayLogic}

          {tuit.stats && tuit.stats.likes}
        </span>
      </div>
      <div className="col">
        <i className="far fa-inbox-out"></i>
      </div>
    </div>
  );
};
export default TuitStats;
