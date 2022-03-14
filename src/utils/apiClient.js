// import axios from "axios";
// export const BASE_URL =
//   "https://5e4bfc87a641ed0014b02740.mockapi.io/api/clane/";

// const config = {
//   method: type,
//   url: BASE_URL + url,
//   data,
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json",
//   },
// };

// const axiosClient = axios.create(config);

// axiosClient.interceptors.response.use(
//   function (response) {
//     return response;
//   },
//   function (error) {
//     let res = error.response;
//     if (res.status == 401) {
//       window.location.href = "https://example.com/login";
//     }
//     console.error(
//       `Looks like there was a problem. Status Code:  + ${res.status}`
//     );
//     return Promise.reject(error);
//   }
// );

// export default axiosClient;
