
import {
  ChatBubbleOutline,
  Inbox,
  Repeat,
  ThumbDownAlt,
  ThumbUpAlt,
} from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React, { useEffect, useState } from "react";

const TuitStats = ({ tuit, likeTuit = () => {} }) => {
  let likeValueDisplayLogic;

  if (tuit.stats && tuit.stats.likes) {
    if (tuit.stats.likes > 0) {
      likeValueDisplayLogic = <FavoriteIcon sx={{ color: "red", mx: 1 }} />;
    }
  } else {
    likeValueDisplayLogic = <FavoriteIcon sx={{ color: "gray", mx: 1 }} />;
  }

  // let dislikeValueDisplayLogic;

  // if (tuit.stats && tuit.stats.dislikes) {
  //   if (tuit.stats.dislikes > 0) {
  //     dislikeValueDisplayLogic = (
  //       <ThumbDownAlt id="red" sx={{ color: "red", mx: 1 }} />
  //     );
  //   }
  // } else if (tuit.stats && tuit.stats.dislikes <= 0) {
  //   dislikeValueDisplayLogic = (
  //     <ThumbDownAlt id="gray" sx={{ color: "gray", mx: 1 }} />
  //   );
  // }

  // if (tuit.stats && tuit.stats.likes) {
  //   if (tuit.stats.likes > 0) {
  //     likeValueDisplayLogic = <ThumbUpAlt sx={{ color: "blue", mx: 1 }} />;
  //   }
  // } else {
  //   likeValueDisplayLogic = <ThumbUpAlt sx={{ color: "gray", mx: 1 }} />;
  // }

  // let dislikeValueDisplayLogic;

  // if (tuit.stats && tuit.stats.dislikes) {
  //   if (tuit.stats.dislikes > 0) {
  //     dislikeValueDisplayLogic = (
  //       <ThumbDownAlt id="red" sx={{ color: "red", mx: 1 }} />
  //     );
  //   }
  // } else if (tuit.stats && tuit.stats.dislikes <= 0) {
  //   dislikeValueDisplayLogic = (
  //     <ThumbDownAlt id="gray" sx={{ color: "gray", mx: 1 }} />
  //   );
  // }
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
      {/* <div className="col">
        <span onClick={() => dislikeTuit(tuit)}>
          {dislikeValueDisplayLogic}
          {tuit.stats && tuit.stats.dislikes}
        </span>
      </div> */}
      <div className="col">
        <Inbox sx={{ mx: 1 }} />
      </div>
    </div>
  );
};
export default TuitStats;
