import axios from "axios";
const api = axios.create({ baseURL: "http://localhost:5000" });
// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    console.log("interceptor request");
    return config;
  },
  (error) => {
    // Do something with request error
    console.log("interceptor request error");
    return Promise.reject(error);
  }
);

// Add a response interceptor
api.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log("interceptor response");
    return response;
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log("interceptor response error");
    return Promise.reject(error);
  }
);

export default api;
