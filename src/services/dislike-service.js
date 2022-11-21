/**
 * @file Create axios call function to node server
 */
import axios from "axios";
// change this to point to your server on Heroku

// const BASE_URL = "https://engineer-software-dat-a4.herokuapp.com";
// const BASE_URL = process.env.REACT_APP_BASE_URL;
const BASE_URL = "http://localhost:5000";
const USERS_API = `${BASE_URL}/api/users`;

const api = axios.create({
  withCredentials: true,
});

/**
 * Toggle user dislike count
 * @param {string} uid user id
 * @param {string} tid tuit id
 * @returns the status of the dislike toggle
 */
export const userTogglesTuitDislike = (uid, tid) =>
  api
    .put(`${USERS_API}/${uid}/dislike/${tid}`)
    .then((response) => response.data);

export const findAllTuitsDislikedByUser = (uid) =>
  api.get(`${USERS_API}/${uid}/dislikes`).then((response) => response.data);
