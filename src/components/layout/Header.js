import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../configs/MyContexts";

function Header() {
    const [user, dispatch] = useContext(UserContext);

    const logout = () => dispatch({ type: "logout" });

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
            <div className="container">
                {/* Logo bên trái */}
                <Link to="/" className="navbar-brand fw-bold text-success">
                    🌱 OU Green Campus
                </Link>

                {/* Nút toggle cho mobile */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mainNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Menu chính */}
                <div className="collapse navbar-collapse" id="mainNav">
                    <ul className="navbar-nav mx-auto">


                        {user?.role === "user" && (
                            <>
                                <li className="nav-item">
                                    <Link to="/news" className="nav-link">
                                        Tin tức
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/projects" className="nav-link">
                                        Dự án
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/classify" className="nav-link">
                                        AI phân loại
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/chatbot" className="nav-link">
                                        Chatbot
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/feedback" className="nav-link">
                                        Góp ý
                                    </Link>
                                </li>
                            </>
                        )}

                        {user?.role === "editor" && (
                            <>
                                <li className="nav-item">
                                    <Link to="/news/create" className="nav-link">
                                        Thêm tin tức
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/documents" className="nav-link">
                                        Quản lý tài liệu
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>

                    {/* Avatar + Auth bên phải */}
                    <ul className="navbar-nav ms-auto">
                        {user ? (
                            <li className="nav-item dropdown">
                                <a
                                    href="/#"
                                    className="nav-link dropdown-toggle d-flex align-items-center"
                                    id="userDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <img
                                        src={user.avatar || "https://via.placeholder.com/32"}
                                        alt="avatar"
                                        className="rounded-circle me-2"
                                        style={{
                                            width: "32px",
                                            height: "32px",
                                            objectFit: "cover",
                                        }}
                                    />
                                    <span>{user.username}</span>
                                </a>
                                <ul
                                    className="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="userDropdown"
                                >
                                    <li>
                                        <Link className="dropdown-item" to="/profile">
                                            <i className="bi bi-person me-2"></i>Trang cá nhân
                                        </Link>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <button className="dropdown-item text-danger" onClick={logout}>
                                            <i className="bi bi-box-arrow-right me-2"></i>Đăng xuất
                                        </button>
                                    </li>
                                </ul>
                            </li>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <Link to="/login" className="btn btn-outline-success me-2">
                                        Đăng nhập
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/register" className="btn btn-success">
                                        Đăng ký
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
