import { UserList } from "../components/profile/user-List";
import { screen, render } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import {
  createUser,
  deleteUsersByUsername,
  findAllUsers,
} from "../services/users-service";

describe("user list renders asyn", () => {
  // sample user to insert
  const nasa = {
    username: "NASA",
    password: "NASA",
    email: "NASA@aliens.com",
  };

  // // setup test before running test
  beforeAll(() => {
    // remove any/all users to make sure we create it in the test
    return deleteUsersByUsername(nasa.username);
  });

  // clean up after test runs
  afterAll(() => {
    // remove any data we created
    return deleteUsersByUsername(nasa.username);
  });

  test("user list renders async", async () => {
    const createNewUser = await createUser(nasa);

    const users = await findAllUsers();
    render(
      <HashRouter>
        <UserList users={users} />
      </HashRouter>
    );
    const linkElement = screen.getByText(/NASA/i);
    expect(linkElement).toBeInTheDocument();
  });
});
