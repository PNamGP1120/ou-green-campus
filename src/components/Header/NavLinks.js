import { Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavLinks = () => {
  const linkStyle = {
    color: '#1B5E20',
    textAlign: 'center',
  };

  return (
    <Nav className="mx-auto d-flex flex-row gap-3">
      <Nav.Link as={Link} to="/" style={linkStyle}>
        <i className="bi bi-house-door fs-4 d-block"></i>
        <small className="fw-semibold">Trang chủ</small>
      </Nav.Link>
      <Nav.Link as={Link} to="/tin-tuc" style={linkStyle}>
        <i className="bi bi-newspaper fs-4 d-block"></i>
        <small>Tin tức Xanh</small>
      </Nav.Link>
      <NavDropdown
        title={
          <span style={linkStyle}>
            <i className="bi bi-calendar-event fs-4 d-block"></i>
            <small>Sự kiện</small>
          </span>
        }
        id="event-dropdown"
        className="text-center"
      >
        <NavDropdown.Item as={Link} to="/su-kien/cuoc-thi">
          <i className="bi bi-trophy me-2 text-success"></i>Cuộc thi
        </NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/su-kien/chien-dich">
          <i className="bi bi-megaphone me-2 text-success"></i>Chiến dịch
        </NavDropdown.Item>
      </NavDropdown>
      <Nav.Link as={Link} to="/thu-vien" style={linkStyle}>
        <i className="bi bi-collection fs-4 d-block"></i>
        <small>Thư viện Xanh</small>
      </Nav.Link>
      <Nav.Link as={Link} to="/phan-loai-rac" style={linkStyle}>
        <i className="bi bi-recycle fs-4 d-block"></i>
        <small>Phân loại rác</small>
      </Nav.Link>
    </Nav>
  );
};

export default NavLinks;
