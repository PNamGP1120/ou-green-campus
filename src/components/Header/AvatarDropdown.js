// src/components/Header/AvatarDropdown.jsx
import React, { useContext } from "react";
import { Dropdown, Image, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import UserContext from '../../contexts/UserContext';

const AvatarDropdown = () => {
  const navigate = useNavigate();
  // Lấy state 'user' và hàm 'setUser' từ Context
  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("user");
    
    // Cập nhật trạng thái người dùng trong Context
    setUser(null);
    
    navigate("/dang-nhap");
  };
  console.log('user',user)
  const isLoggedIn = !!user;

  return (
    <>
      {!isLoggedIn ? (
        <div className="d-flex align-items-center gap-2">
          <Button as={Link} to="/dang-nhap" variant="outline-success" size="sm">
            Đăng nhập
          </Button>
          <Button as={Link} to="/dang-ky" variant="success" size="sm">
            Đăng ký
          </Button>
        </div>
      ) : (
        <Dropdown align="end">
          <Dropdown.Toggle
            as="div"
            style={{ cursor: "pointer" }}
            className="p-0 ms-2"
          >
            <Image
              src={
                user.avatar || "https://via.placeholder.com/40x40.png?text=User"
              }
              width="40"
              height="40"
              roundedCircle
              className="border border-success"
            />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/ho-so">
              <i className="bi bi-person-circle me-2 text-success"></i>Hồ sơ
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/cai-dat">
              <i className="bi bi-gear me-2 text-success"></i>Cài đặt
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleLogout}>
              <i className="bi bi-box-arrow-right me-2 text-success"></i>Đăng
              xuất
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      )}
    </>
  );
};

export default AvatarDropdown;