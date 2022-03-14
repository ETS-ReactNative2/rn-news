export const sampleNews = {
  id: "19",
  author: "New",
  title: "Pagination New edit 3",
  createdAt: "2020-05-21T17:44:05.387Z",
  url: "https://5e4bfc87a641ed0014b02740.mockapi.io/api/clane/news/19",
  body: "Pagination is the process of separating digital content into distinct pages. It is implemented to give users a smoother experience by breaking up lengthy content and only loading the pages requested by the user. This significantly reduces load times, and in turn decreases visitor drop-off.n/In certain cases, implementing pagination is absolutely critical. Especially on mobile devices, due to smaller screen sizes, slower network speeds, and limited data plans, pagination becomes a necessity.",
  images: [
    {
      uri: "http://placeimg.com/640/480/people",
      imageId: "48",
    },
    {
      uri: "http://placeimg.com/640/480/sports",
      imageId: "60",
    },
    {
      uri: "http://placeimg.com/640/480/technics",
      imageId: "83",
    },
  ],
  loading: {
    global: true,
    models: {
      news: true,
      comments: false,
    },
    effects: {
      news: {
        getAllNewsAsync: false,
        deleteNewsAsync: false,
        addNewsAsync: false,
        editNewsAsync: true,
      },
      comments: {
        getAllcommentAsync: false,
        addCommentAsync: false,
        editCommentAsync: false,
        deleteCommentAsync: false,
      },
    },
  },
  news: {
    error: "",
    news: [],
  },
  comments: {
    error: "",
    comments: [],
  },
  newsId: "19",
};
