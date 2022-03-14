import axiosClient, { BASE_URL } from "../apiClient";
import axios, { Axios } from "axios";

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

export function getNews() {
  return axiosClient.get("news");
}

export const deleteArticle = async (data) => {
  try {
    let result = axios.delete(`${BASE_URL}news/${data.id}`);
    let data = await result;
    return data;
  } catch (error) {
    console.log(error);
  }
};
