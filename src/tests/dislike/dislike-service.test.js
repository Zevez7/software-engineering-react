/**
 * @file Dislike service test
 */

import {
  findAllTuitsDislikedByUser,
  userDislikesTuit,
  userUnDislikesTuit,
  userTogglesTuitDislike,
} from "../../services/dislike-service";

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

  test("can insert new users with REST API", async () => {

    const createDislike = await userDislikesTuit(uid,tid)

  });
});
