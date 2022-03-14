import React, { Alert } from "react-native";
import { apiService } from "../../utils";

export const loadNews = async () => {
  try {
    const result = await apiService("news?page=1&limit=10", "get");
    const data = await result;
    return data.data.map((news) => ({
      ...news,
      comments: [],
    }));
  } catch (error) {
    Alert.alert("Press reload to refresh the screen");
  }
};

export const updateNews = async (data) => {
  let input = data;
  let headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  try {
    const result = await apiService(`news/${data.id}`, "put", input, headers);
    const data = await result;
    console.log("updateNews", data);
    return data.data;
  } catch (error) {
    Alert.alert("Press reload to refresh the screen");
  }
};
