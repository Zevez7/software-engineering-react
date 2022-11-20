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
 * Toggle user Likes count
 * @param {string} uid user id
 * @param {string} tid tuit id
 * @returns the status of the like toggle
 */
export const userTogglesTuitLikes = (uid, tid) =>
  api.put(`${USERS_API}/${uid}/likes/${tid}`).then((response) => response.data);
