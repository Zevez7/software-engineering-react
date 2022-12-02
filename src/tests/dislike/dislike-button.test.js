/**
 * @file Dislike button test
 */

import { render, screen } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import TuitStats from "../../components/tuits/tuit-stats";
import {
  findAllTuitsDislikedByUser,
  userDislikesTuit,
  userTogglesTuitDislike,
  userUnDislikesTuit,
} from "../../services/dislike-service";
import { createTuit, deleteTuit } from "../../services/tuits-service";
import {
  createUser,
  deleteUsersByUsername,
} from "../../services/users-service";

/**
 * Test dislike button
 */
describe("can create a dislike with REST API", () => {
  let ripley;
  let Tuit1;
  let createdTuit1;
  let createdTuit1Id;
  let userRipleyid;

  afterAll(() => {
    deleteTuit(Tuit1.postedBy);
    userUnDislikesTuit(userRipleyid, createdTuit1Id);

    return deleteUsersByUsername(ripley.username);
  });
  /**
   * Test dislike button
   */

  test("dislike button click", async () => {
    //create the user and

    ripley = {
      username: "ellenripley",
      password: "lv426",
      email: "ellenripley@aliens.com",
    };

    const userRipley = await createUser(ripley);
    userRipleyid = userRipley._id;

    Tuit1 = {
      tuit: "tuiter testing1",
      postedBy: userRipleyid,
      stats: {
        replies: 0,
        retuits: 0,
        likes: 0,
        dislikes: 100,
      },
    };

    createdTuit1 = await createTuit(Tuit1);
    createdTuit1Id = createdTuit1._id;
    await userTogglesTuitDislike(userRipleyid, createdTuit1Id);
    const array = await findAllTuitsDislikedByUser(userRipleyid);

    const lastItem = array.pop();

    render(
      <HashRouter>
        <TuitStats tuit={lastItem} />
      </HashRouter>
    );

    const linkElement = screen.getByText(/1/i);
    expect(linkElement).toBeInTheDocument();
  });
});
