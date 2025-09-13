const UserReducer = (state, action) => {
  switch (action.type) {
    case "login":
      return action.payload; // { id, username, role }
    case "logout":
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      return null;
    default:
      return state;
  }
};

export default UserReducer;
