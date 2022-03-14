import { useDispatch, useSelector } from "react-redux";

export const useRedux = (singleNewsId) => {
  const news = useSelector((state) => state.news);
  const dispatch = useDispatch().news;
  const filteredResult = news.find((a) => a.id === singleNewsId);

  return { news, dispatch, filteredResult };
};
