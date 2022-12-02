/**
 * @file My dislikes Screen test
 */

import { render, screen } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import Tuits from "../../components/tuits";
import {
  findAllTuitsDislikedByUser,
  userDislikesTuit,
  userUnDislikesTuit,
} from "../../services/dislike-service";
import { createTuit, deleteTuit } from "../../services/tuits-service";
import {
  createUser,
  deleteUsersByUsername,
} from "../../services/users-service";

/**
 * Test dislike tuit rendering list
 */

describe("tuit dislike rendering", () => {
  let ripley;
  let userRipley;
  let userRipleyId;
  let Tuit1;
  let Tuit2;
  let createdTuit1;
  let createdTuit2;
  let createdTuit1Id;
  let createdTuit2Id;
  ripley = {
    username: "ellenripley",
    password: "lv426",
    email: "ellenripley@aliens.com",
  };
  /**
   * Setup before running test
   * @param  {function} function to be called
   */

  beforeAll(() => {
    // remove any data created
    return deleteUsersByUsername(ripley.username);
  });

  /**
   * Setup after running test
   * @param  {function} function to be called
   */
  afterAll(() => {
    // remove any data created
    deleteTuit(Tuit1.postedBy);
    deleteTuit(Tuit2.postedBy);
    userUnDislikesTuit(userRipleyId, createdTuit1Id);
    userUnDislikesTuit(userRipleyId, createdTuit2Id);
    return deleteUsersByUsername(ripley.username);
  });

  /**
   * Test dislike array renderin
   * @param  {string} description of the test
   * @param  {function} async the function called to run the test
   */

  test("dislike array rendering", async () => {
    userRipley = await createUser(ripley);
    userRipleyId = userRipley._id;

    Tuit1 = {
      tuit: "tuiter-dislike-testing-1",
      postedBy: userRipleyId,
    };

    Tuit2 = {
      tuit: "tuiter-dislike-testing-2",
      postedBy: userRipleyId,
    };

    createdTuit1 = await createTuit(Tuit1);
    createdTuit2 = await createTuit(Tuit2);

    createdTuit1Id = createdTuit1._id;
    createdTuit2Id = createdTuit2._id;

    await userDislikesTuit(userRipleyId, createdTuit1Id);
    await userDislikesTuit(userRipleyId, createdTuit2Id);

    const arrayDislikeTuits = await findAllTuitsDislikedByUser(userRipleyId);

    render(
      <HashRouter>
        <Tuits tuits={arrayDislikeTuits} />
      </HashRouter>
    );

    const linkElement1 = screen.getByText(/tuiter-dislike-testing-1/i);
    expect(linkElement1).toBeInTheDocument();

    const linkElement2 = screen.getByText(/tuiter-dislike-testing-2/i);
    expect(linkElement2).toBeInTheDocument();
  });
});
