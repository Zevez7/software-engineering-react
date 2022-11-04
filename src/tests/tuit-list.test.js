import { screen, render } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import { findAllTuits } from "../services/tuits-service";
import axios from "axios";
import Tuits from "../components/tuits";

jest.mock("axios");

const MOCKED_USERS = ["alice", "bob", "charlie"];

const MOCKED_TUITS = ["alice's tuit", "bob's tuit", "charlie's tuit"];

const tuitsArray = MOCKED_USERS.map((username, index) => {
  return {
    _id: Math.random() * 100,
    postedBy: { username: username },
    tuit: MOCKED_TUITS[index],
    image: "perseverance.jpg",
    youtube: null,
    avatarLogo: "nasa-logo.jpg",
    published: "Dec 25, 2021",
    imageOverlay: null,
    stats: {
      replies: 123,
      retuits: 234,
      likes: 345,
    },
  };
});

console.log(tuitsArray);

test("tuit list renders static tuit array", () => {
  render(
    <HashRouter>
      <Tuits tuits={tuitsArray} />
    </HashRouter>
  );
  const linkElement = screen.getByText(/alice@alice/i);
  expect(linkElement).toBeInTheDocument();
});

// test("tuit list renders async", async () => {
//   // TODO: implement this
// });

test("tuit list renders mocked", async () => {
  axios.get.mockImplementation(() =>
    Promise.resolve({ data: { tuits: tuitsArray } })
  );

  const response = await findAllTuits();
  const tuits = response.tuits;

  console.log(tuits);
  render(
    <HashRouter>
      <Tuits tuits={tuits} />
    </HashRouter>
  );

  const tuit = screen.getByText(/alice@alice/i);
  expect(tuit).toBeInTheDocument();
});
