import axios from "axios";
// change this to point to your server on Heroku

// const BASE_URL = "https://engineer-software-dat-1.herokuapp.com";
const BASE_URL = "http://localhost:4000";
const USERS_API = `${BASE_URL}/users`;

export const createUser = (user) =>
  axios.post(`${USERS_API}`, user).then((response) => response.data);
export const findAllUsers = () =>
  axios.get(USERS_API).then((response) => response.data);
export const findUserById = (uid) =>
  axios.get(`${USERS_API}/${uid}`).then((response) => response.data);
export const deleteUser = (uid) =>
  axios.delete(`${USERS_API}/${uid}`).then((response) => response.data);
export const deleteUsersByUsername = (username) =>
  axios
    .delete(`${USERS_API}/username/${username}/delete`)
    .then((response) => response.data);
