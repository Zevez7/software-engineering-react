import { screen, render } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import {
  createTuit,
  deleteTuit,
  findAllTuits,
} from "../services/tuits-service";
import axios from "axios";
import Tuits from "../components/tuits";
import { UserList } from "../components/profile/user-List";
import { deleteUsersByUsername } from "../services/users-service";

describe("tuit list renders static tuit array", () => {
  // sample user to insert
  const nasa = {
    tuit: "nasatuits",
    postedBy: "63577431cd4eab25f6a5660f",
  };

  // // setup test before running test
  beforeAll(() => {
    // remove any/all tuit to make sure we create it in the test

    return deleteTuit(nasa.postedBy);
  });

  // clean up after test runs
  afterAll(() => {
    // remove any data created
    return deleteTuit(nasa.postedBy);
  });

  test("user list renders async", async () => {
    const createNasaTuit = await createTuit(nasa);

    const allTuits = await findAllTuits();

    render(
      <HashRouter>
        <Tuits tuits={allTuits} />
      </HashRouter>
    );
    const linkElement = screen.getByText(/nasatuits/i);
    expect(linkElement).toBeInTheDocument();
  });
});
