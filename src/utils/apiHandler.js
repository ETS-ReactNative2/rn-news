import Axios from "axios";
export const BASE_URL =
  "https://5e4bfc87a641ed0014b02740.mockapi.io/api/clane/";

export const apiService = (url, type, data, headers) => {
  if (!url || typeof url !== "string") {
    throw new Error("Please pass a string url to this function: /path/to/api");
  }
  if (!type || typeof type !== "string") {
    throw new Error(
      "Please add string api request type: GET, POST, PUT, PATCH, DELETE"
    );
  }
  const headerContent = () => {
    if (headers) {
      if (headers["Content-Type"]) {
        return headers["Content-Type"];
      }
      return "application/json";
    }
    return "application/json";
  };

  const header = {
    "Content-Type": headerContent(),
    ...headers,
  };

  const config = {
    method: type,
    url: BASE_URL + url,
    data,
    headers: header,
  };

  return new Promise((resolve, reject) => {
    Axios(config)
      .then((res) => {
        resolve(res.data.data || res);
      })
      .catch((error) => {
        if (error && !error.response) {
          throw new Error(
            "Could not connect to the server, please check your internet connection"
          );
        }
        reject(error.response.data);
      });
  });
};

export default apiService;
