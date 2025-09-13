export const ProjectReducer = (state, action) => {
  switch (action.type) {
    case "set_projects":
      return { ...state, projects: action.payload };
    default:
      return state;
  }
};
