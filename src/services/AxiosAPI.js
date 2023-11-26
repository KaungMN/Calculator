import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:4000",
});
api.interceptors.request.use(
  (config) => {
    console.log("in inter req");
    return config;
  },
  (error) => {
    console.log("in inter req");
    return Promise.reject(error);
  }
);

// Add a response interceptor
api.interceptors.response.use(
  function (response) {
    console.log("in inter res");
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log("in inter res");
    return Promise.reject(error);
  }
);

export default api;
