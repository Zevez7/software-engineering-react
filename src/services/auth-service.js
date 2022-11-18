import axios from "axios";
// const BASE_URL = process.env.REACT_APP_BASE_URL;
const BASE_URL = "http://localhost:5000";

const AUTH_API = `${BASE_URL}/api/auth`;
const api = axios.create({
  withCredentials: true,
});
export const signup = (user) =>
  api.post(`${AUTH_API}/signup`, user).then((response) => response.data);
