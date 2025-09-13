export const NewsReducer = (state, action) => {
  switch (action.type) {
    case "set_news":
      return { ...state, news: action.payload };
    default:
      return state;
  }
};
