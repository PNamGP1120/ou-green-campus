import { useContext } from "react";
import { UserContext } from "../configs/MyContexts";
import api, { endpoints } from "../configs/Apis";

function Login() {
  const [user, dispatch] = useContext(UserContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    try {
      let res = await api.post(endpoints.login, { username, password });
      localStorage.setItem("access", res.data.access);
      localStorage.setItem("refresh", res.data.refresh);

      let profile = await api.get(endpoints.me, {
        headers: { Authorization: `Bearer ${res.data.access}` },
      });

      dispatch({ type: "login", payload: profile.data });
      window.location.href = "/";
    } catch (err) {
      alert("Sai tên đăng nhập hoặc mật khẩu!");
    }
  };

  return (
    <form onSubmit={handleLogin} className="w-50 mx-auto mt-5">
      <h2>Đăng nhập</h2>
      <input name="username" placeholder="Tên đăng nhập" className="form-control mb-2" />
      <input type="password" name="password" placeholder="Mật khẩu" className="form-control mb-2" />
      <button type="submit" className="btn btn-success">Đăng nhập</button>
    </form>
  );
}

export default Login;
