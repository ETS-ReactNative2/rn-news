import { BASE_URL } from "../apiClient";
import axios from "axios";
import { Alert } from "react-native";

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
    Alert.alert("Press reload to refresh the screen");
    reject(error.response.data);
  }
};

// / Axios Function for creating new article/new. unfortunately this does not work with the api do to the following errors: Number of article/news is complete therefore more cannot be added.

export const updateArticle = async (article) => {
  let singleArticle = article;
  try {
    let result = axios.put(`${BASE_URL}news/${singleArticle.id}`);
    let data = await result;
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteArticle = async (data) => {
  let article = data;
  try {
    let result = axios.delete(`${BASE_URL}news/${article.id}`);
    let data = await result;
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateComment = async (comment) => {
  let commentToUpdate = comment;
  try {
    let result = axios.delete(
      `${BASE_URL}news/${commentToUpdate.newsId}/comment/${commentToUpdate.id}`
    );
    let data = await result;
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteComment = async (comment) => {
  let commentToDelete = comment;
  try {
    let result = axios.delete(
      `${BASE_URL}news/${commentToDelete.newsId}/commen/${commentToDelete.id}`
    );
    let data = await result;
    return data.data;
  } catch (error) {
    console.log(error);
  }
};
