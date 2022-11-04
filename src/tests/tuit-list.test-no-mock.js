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

describe("tuit list renders static tuit array", () => {
  // sample user to insert
  const nasa = {
    _id: "63577431cd4eab25f6a5660f",
    postedBy: { username: "NASA" },
    tuit: "The eagle has landed",
  };

  // // setup test before running test
  beforeAll(() => {
    // remove any/all tuit to make sure we create it in the test
    return deleteTuit(nasa._id);
  });

  // clean up after test runs
  afterAll(() => {
    // remove any data we created
    return deleteTuit(nasa._id);
  });

  test("user list renders async", async () => {
    await createTuit(nasa);

    const users = await findAllTuits();
    render(
      <HashRouter>
        <UserList users={users} />
      </HashRouter>
    );
    const linkElement = screen.getByText(/NASA/i);
    expect(linkElement).toBeInTheDocument();
  });
});
