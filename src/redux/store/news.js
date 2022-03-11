import { loadNews } from "./api";

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
            summary: payload.summary,
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
                id: payload.id,
                author: payload.author,
                content: payload.content,
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
          commentsCopy[index].author = payload.author;
          commentsCopy[index].content = payload.content;
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
      const news = await loadNews();
      dispatch.news.loaded(news);
    },
  }),
};

export default model;
