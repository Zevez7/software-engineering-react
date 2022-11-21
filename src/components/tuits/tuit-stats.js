import React, { useEffect, useState } from "react";

const TuitStats = ({ tuit, likeTuit, dislikeTuit, findUserLikesTuit }) => {
  let likeValueDisplayLogic;

  if (tuit.stats && tuit.stats.likes) {
    if (tuit.stats.likes > 0) {
      likeValueDisplayLogic = (
        <i className="fa-solid fa-thumbs-up me-1" style={{ color: "blue" }}></i>
      );
    }
  } else {
    likeValueDisplayLogic = (
      <i className="fa-solid fa-thumbs-up me-1" style={{ color: "gray" }}></i>
    );
  }

  let dislikeValueDisplayLogic;

  if (tuit.stats && tuit.stats.dislikes) {
    if (tuit.stats.dislikes > 0) {
      dislikeValueDisplayLogic = (
        <i
          className="fa-solid fa-thumbs-down me-1"
          style={{ color: "red" }}
        ></i>
      );
    }
  } else if (tuit.stats && tuit.stats.dislikes <= 0) {
    dislikeValueDisplayLogic = (
      <i className="fa-solid fa-thumbs-down me-1" style={{ color: "gray" }}></i>
    );
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
        <span onClick={() => dislikeTuit(tuit)}>
          {dislikeValueDisplayLogic}
          {tuit.stats && tuit.stats.dislikes}
        </span>
      </div>
      <div className="col">
        <i className="far fa-inbox-out"></i>
      </div>
    </div>
  );
};
export default TuitStats;
