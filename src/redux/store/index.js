import { init } from "@rematch/core";
import news from "./news";

const models = {
  news,
};

export const store = init({
  models,
});
