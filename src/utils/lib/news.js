import { BASE_URL } from "../apiClient";
import axios from "axios";

const handleNews = () => {
  return new Promise((resolve, reject) => {
    axios(config)
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

export const getArticle = async () => {
  try {
    const response = axios.get(`${BASE_URL}news?page=1&limit=10`);
    const data = await response;
    console.log(response.data);
    return data.data.map((news) => ({
      ...news,
      comments: [],
    }));
  } catch (error) {
    if (error && !error.response) {
      throw new Error(
        "Could not connect to the server, please check your internet connection"
      );
    }
    reject(error.response.data);
  }
};

// export const deleteArticle = async (data) => {
//   let data = data;
//   try {
//     let result = axios.delete(`${BASE_URL}news/${data.id}`);
//     let fi = await result;
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };
