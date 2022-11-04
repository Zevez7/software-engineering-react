import axios from "axios";
// change this to point to your server on Heroku

// const BASE_URL = "https://engineer-software-dat-1.herokuapp.com";
const BASE_URL = "http://localhost:5000";
const USERS_API = `${BASE_URL}/tuits`;

export const createTuit = (user) =>
  axios.post(`${USERS_API}`, user).then((response) => response.data);

export const createTuitByUser = (uid, user) =>
  axios.post(`${USERS_API}/${uid}`, user).then((response) => response.data);

export const findAllTuits = () =>
  axios.get(USERS_API).then((response) => response.data);

export const findTuitsByUser = (uid) =>
  axios.get(`${USERS_API}/users/${uid}`).then((response) => response.data);

export const findTuitById = (tid) =>
  axios.get(`${USERS_API}/${tid}`).then((response) => response.data);

export const deleteTuit = (uid) =>
  axios.delete(`${USERS_API}/${uid}`).then((response) => response.data);

export const updateTuit = (tid) =>
  axios.delete(`${USERS_API}/${tid}`).then((response) => response.data);
