import { Alert } from "react-native";
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
