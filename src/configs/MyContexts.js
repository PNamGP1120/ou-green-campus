import { createContext, useReducer, useEffect } from "react";
import UserReducer from "../reducers/UserReducer";
import api, { endpoints } from "./Apis";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, dispatch] = useReducer(UserReducer, null);

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("access");
      if (!token) return;
      try {
        let res = await api.get(endpoints.me);
        dispatch({ type: "login", payload: { ...res.data, role: res.data.role.toLowerCase() } });

      } catch (err) {
        console.error("Không load được user:", err);
      }
    };
    loadUser();
  }, []);

  return (
    <UserContext.Provider value={[user, dispatch]}>
      {children}
    </UserContext.Provider>
  );
};
