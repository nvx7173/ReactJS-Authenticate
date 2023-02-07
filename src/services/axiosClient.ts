import axios from "axios";
import queryString from "query-string";

const instance = axios.create({
  baseURL: "https://authenticate-app-server-danhnv.herokuapp.com/",
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

instance.interceptors.request.use((config) => {
  return config;
});

instance.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    if (error.response && error.response.status >= 400) {
      throw error.response.data.message;
    } else {
      throw "Something went wrong!";
    }
  },
);

export default instance;