/**
 * @file Dislike service test
 */

import {
  findAllTuitsDislikedByUser,
  userDislikesTuit,
  userUnDislikesTuit,
  userTogglesTuitDislike,
} from "../../services/dislike-service";
import { createTuit, deleteTuit } from "../../services/tuits-service";
import {
  createUser,
  deleteUsersByUsername,
} from "../../services/users-service";

/**
 * Test to create dislike
 */
describe("can create a dislike with REST API", () => {
  const uid = "637957cc394ef49bceae9247";
  const tid = "63577431cd4eab25f6a5660f";

  /**
   * Setup before running test
   */
  beforeAll(() => {
    // remove this specific dislike from the database
    return userUnDislikesTuit(uid, tid);
  });

  /**
   * Setup after running thest
   */
  afterAll(() => {
    // remove this specific dislike from the database
    return userUnDislikesTuit(uid, tid);
  });
  /**
   * Test to create a dislike
   */
  test("can create a dislike with REST API", async () => {
    const createDislike = await userDislikesTuit(uid, tid);
    expect(createDislike.dislikedBy).toEqual(uid);
    expect(createDislike.tuit).toEqual(tid);
  });
});

/**
 * Test to delete dislike
 */
describe("can delete a dislike with REST API", () => {
  const uid = "63577431cd4eab25f6a5660f";
  const tid = "637957cc394ef49bceae9247";

  /**
   * Setup before running test
   */
  beforeAll(() => {
    // create a dislike for the database
    return userDislikesTuit(uid, tid);
  });

  /**
   * Test to create a dislike
   */
  test("can delete a dislike with REST API", async () => {
    const status = await userUnDislikesTuit(uid, tid);
    expect(status.acknowledged).toEqual(true);
    expect(status.deletedCount).toEqual(1);
  });
});

/**
 * Test find all tuits disliked by user
 */
describe("Test find all tuits disliked by user", () => {
  let newTuits1;
  let newTuits2;
  let userRipley;
  let tuit1;
  let tuit2;
  const ripley = {
    username: "ellenripley",
    password: "lv426",
    email: "ellenripley@aliens.com",
  };

  /**
   * Setup before running test
   */
  beforeAll(() => {
    return deleteUsersByUsername(ripley.username);
  });

  afterAll(() => {
    // remove any data we created
    deleteTuit(newTuits1.postedBy);
    deleteTuit(newTuits2.postedBy);
    userUnDislikesTuit(userRipley._id, tuit1._id);
    userUnDislikesTuit(userRipley._id, tuit2._id);

    return deleteUsersByUsername(ripley.username);
  });

  /**
   * Test to create a dislike
   */
  test("find all tuits disliked by ripley user", async () => {
    userRipley = await createUser(ripley);

    const userRipleyid = userRipley._id;

    newTuits1 = {
      tuit: "tuiter testing1",
      postedBy: userRipleyid,
    };

    tuit1 = await createTuit(newTuits1);

    newTuits2 = {
      tuit: "tuiter testing2",
      postedBy: userRipleyid,
    };

    tuit2 = await createTuit(newTuits2);

    await userDislikesTuit(userRipley._id, tuit1._id);
    await userDislikesTuit(userRipley._id, tuit2._id);

    const tuiterDisliked = await findAllTuitsDislikedByUser(userRipleyid);

    expect(tuiterDisliked.length).toEqual(2);
  });
});
