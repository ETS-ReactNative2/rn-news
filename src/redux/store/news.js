import {
  deleteArticle,
  getArticle,
  updateArticle,
  createComment,
} from "../../utils/lib/news";

const model = {
  state: [],
  reducers: {
    loaded: (state, payload) => payload,

    editNews: (state, payload) =>
      state.map((news) => {
        if (news.id === payload.id) {
          return {
            ...news,
            author: payload.author,
            body: payload.body,
          };
        }

        return news;
      }),

    createNews: (state, payload) => [payload, ...state],

    deleteNews: (state, payload) =>
      state.filter((news) => news.id !== payload.id),

    deleteComment: (state, payload) =>
      state.map((news) => {
        if (news.id === payload.newsId) {
          let commentsCopy = news.comments.slice();
          let result = commentsCopy.filter(
            (comment) => comment.id !== payload.id
          );
          return {
            ...news,
            comments: result,
          };
        }
        return news;
      }),

    addComment: (state, payload) =>
      state.map((news) => {
        if (news.id === payload.newsId) {
          return {
            ...news,
            comments: [
              ...news.comments,
              {
                newsId: news.id,
                id: payload.id,
                name: payload.name,
                avatar: payload.avatar,
                comment: payload.comment,
              },
            ],
          };
        }
        return news;
      }),

    editComment: (state, payload) =>
      state.map((news) => {
        if (news.id === payload.newsId) {
          let index = news.comments.findIndex((item) => item.id === payload.id);
          let commentsCopy = news.comments.slice();
          commentsCopy[index].name = payload.name;
          commentsCopy[index].comment = payload.comment;
          return {
            ...news,
            comments: commentsCopy,
          };
        }

        return news;
      }),
  },

  effects: (dispatch) => ({
    async load() {
      const news = await getArticle();
      dispatch.news.loaded(news);
    },
    async update(data) {
      const news = await updateArticle(data);
      await dispatch.news.editNews(news);
    },
    async delete(data) {
      console.log(data);
      const news = await deleteArticle(data);
      dispatch.news.deleteNews(news);
    },
  }),
};

export default model;
