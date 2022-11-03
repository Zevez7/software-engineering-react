/**
 * @file Tuiter Test
 */

import {
  createTuit,
  createTuitByUser,
  findAllTuits,
  findTuitsByUser,
  findTuitById,
  deleteTuit,
  updateTuit,
} from "../services/tuits-service";

describe("can create tuit with REST API", () => {
  // sample tuit to insert
  const newTuits = {
    tuit: "tuiter testing",
    postedBy: "63577431cd4eab25f6a5660f",
  };

  // // setup test before running test
  beforeAll(() => {
    // remove any/all users to make sure we create it in the test
    return deleteTuit(newTuits.postedBy);
  });

  // clean up after test runs
  afterAll(() => {
    // remove any data we created
    return deleteTuit(newTuits.postedBy);
  });

  test("can insert new users with REST API", async () => {
    // insert new user in the database
    const createdTuit = await createTuit(newTuits);

    // verify inserted user's properties match parameter user
    expect(createdTuit.tuit).toEqual(newTuits.tuit);
    expect(createdTuit.postedBy).toEqual(newTuits.postedBy);
  });
});

describe("can delete tuit with REST API", () => {
  // sample tuit to insert
  const newTuits = {
    tuit: "tuiter testing",
    postedBy: "63577431cd4eab25f6a5660f",
  };
  // // setup test before running test
  beforeAll(() => {
    // remove any/all users to make sure we create it in the test
    return createTuit(newTuits);
  });
  // clean up after test runs
  afterAll(() => {
    // remove any data we created
    return deleteTuit(newTuits.postedBy);
  });
  test("can delete tuit wtih REST API", async () => {
    // delete a tuit by their user id. Assumes tuit already exists
    const status = await deleteTuit(newTuits.postedBy);
    // verify we deleted at least one user by their username
    expect(status.deletedCount).toBeGreaterThanOrEqual(1);
  });
});

describe("can retrieve a tuit by their primary key with REST API", () => {
  // sample tuit to insert
  const newTuits = {
    tuit: "tuiter testing",
    postedBy: "63577431cd4eab25f6a5660f",
  };
  // // setup test before running test
  beforeAll(() => {
    // remove any/all tuit to make sure we create it in the test
    return deleteTuit(newTuits.postedBy);
  });
  // clean up after test runs
  afterAll(() => {
    // remove any data we created
    return deleteTuit(newTuits.postedBy);
  });

  test("can retrieve a tuit by their primary key with REST API", async () => {
    // insert new tuit in the database
    const createdTuit = await createTuit(newTuits);

    // verify inserted tuit's properties match parameter Tuit
    expect(createdTuit.tuit).toEqual(newTuits.tuit);
    expect(createdTuit.postedBy).toEqual(newTuits.postedBy);

    // retrieve the tuit from the database by its primary key
    const existingTuit = await findTuitById(createdTuit._id);

    // verify retrieved tuit matches parameter tuit
    expect(existingTuit.tuit).toEqual(newTuits.tuit);
    expect(existingTuit.postedBy).toEqual(newTuits.postedBy);
  });
});

describe("can retrieve all tuits with REST API", () => {
  // sample users we'll insert to then retrieve
  const tuits = [
    { tuit: "tuiter testing 1", postedBy: "13577431cd4eab25f6a5660f" },
    { tuit: "tuiter testing 2", postedBy: "23577431cd4eab25f6a5660f" },
    { tuit: "tuiter testing 3", postedBy: "33577431cd4eab25f6a5660f" },
  ];

  const tuitsIndex = [
    "tuiter testing 1",
    "tuiter testing 2",
    "tuiter testing 3",
  ];

  // setup data before test
  beforeAll(
    () =>
      // insert several known tuit
      {
        createTuit(tuits[0]);
        createTuit(tuits[1]);
        return createTuit(tuits[2]);
      }
    // tuits.map((tuit) => createTuit(tuit))
  );

  afterAll(() => {
    // delete the tuits we inserted
    deleteTuit("13577431cd4eab25f6a5660f");
    deleteTuit("23577431cd4eab25f6a5660f");
    return deleteTuit("33577431cd4eab25f6a5660f");
  });

  test("can retrieve all users from REST API", async () => {
    // retrieve all the tuits
    const allTuits = await findAllTuits();

    // there should be a minimum number of tuits
    expect(allTuits.length).toBeGreaterThanOrEqual(tuits.length);

    // let's check each tuit we inserted
    const allTuitsWeInserted = allTuits.filter(
      (tuit) => tuitsIndex.indexOf(tuit.tuit) >= 0
    );

    // compare the actual tuit in database with the ones we sent
    allTuitsWeInserted.forEach((tuitFound) => {
      const tuitAdded = tuits.find((tuit) => tuit.tuit === tuitFound.tuit);

      expect(tuitFound.tuit).toEqual(tuitAdded.tuit);
      expect(tuitFound.postedBy).toEqual(tuitAdded.postedBy);
    });
  });
});
