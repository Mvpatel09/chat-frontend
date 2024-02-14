import axios from "axios";

const API_ENDPOINT = "http://localhost:3008/api/";

const dataService = axios.create({
  baseURL: API_ENDPOINT,
});

dataService.interceptors.request.use(
  (config) => {
    config.headers.auth = localStorage.getItem("token");
    return config;
  },
  (error) => {
    return error;
  }
);

export { dataService };
