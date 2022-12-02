/**
 * @file Create axios call function to node server
 */
import axios from "axios";
// change this to point to your server on Heroku

// const BASE_URL = "https://engineer-software-dat-a4.herokuapp.com";
// const BASE_URL = process.env.REACT_APP_BASE_URL;
const BASE_URL = "http://localhost:5000";
const USERS_API = `${BASE_URL}/api/users`;

/**
 * Create axios withCredentials
 */
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

/**
 * Toggle user Likes count
 * @param {string} uid user id
 * @param {string} tid tuit id
 * @returns the status of the like toggle
 */
export const findUserLikesTuit = (uid, tid) =>
  api.get(`${USERS_API}/${uid}/likes/${tid}`).then((response) => response.data);

/**
 * Find all tuits that matches a user id
 * @param {string} uid user id
 * @returns tuits
 */
export const findAllTuitsLikedByUser = (uid) =>
  api.get(`${USERS_API}/${uid}/likes`).then((response) => response.data);
