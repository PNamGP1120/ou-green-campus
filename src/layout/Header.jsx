import { useState, useRef, useEffect } from 'react';
import { Container, Dropdown, Form, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Header = () => {
    const greenDark = '#1B5E20';
    const [showSearch, setShowSearch] = useState(false);
    const searchRef = useRef(null);

    const linkStyle = {
        color: greenDark,
        textAlign: 'center',
    };

    // Tự ẩn ô tìm kiếm khi click ngoài
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setShowSearch(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <Navbar expand="lg" style={{ backgroundColor: '#fff' }} className="fixed-top shadow-sm py-2 border-bottom">
            <Container fluid className="px-3">
                {/* Logo */}
                <div className="d-flex align-items-center gap-3">
                    <Navbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2 p-0">
                        <Image
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRWFZNgMu5y2sClJWszhIr4q5nUry1qOID1Q&s"
                            alt="Logo"
                            width="50"
                            height="50"
                            roundedCircle
                            className="border border-success"
                        />
                        <span className="fw-bold fs-5" style={{ color: greenDark }}>
                            OU <span className="text-success">Green Plus</span>
                        </span>
                    </Navbar.Brand>
                </div>

                {/* Nav links */}
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

                {/* Tools + Avatar */}
                <div className="d-flex align-items-center gap-2" ref={searchRef}>
                    {/* Search Icon (toggle input) */}
                    <button
                        className="bg-transparent border-0 p-2 position-relative"
                        onClick={() => setShowSearch((prev) => !prev)}
                    >
                        <i className="bi bi-search fs-5 text-success"></i>
                    </button>

                    {/* Search Input */}
                    {showSearch && (
                        <Form.Control
                            type="search"
                            placeholder="Tìm kiếm..."
                            autoFocus
                            className="rounded-pill py-2 ps-4 border border-success"
                            style={{
                                backgroundColor: '#f8f9fa',
                                minWidth: '250px',
                                transition: 'all 0.3s',
                            }}
                        />
                    )}

                    {/* Chat */}
                    <button className="bg-transparent border-0 p-2 position-relative">
                        <i className="bi bi-chat-dots fs-5 text-success"></i>
                        <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                            <span className="visually-hidden">1</span>
                        </span>
                    </button>

                    {/* Notifications */}
                    <button className="bg-transparent border-0 p-2">
                        <i className="bi bi-bell fs-5 text-success"></i>
                    </button>

                    {/* Avatar Dropdown */}
                    <Dropdown align="end">
                        <Dropdown.Toggle as="div" style={{ cursor: 'pointer' }} className="p-0 ms-2">
                            <Image
                                src="https://randomuser.me/api/portraits/men/75.jpg"
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
                            <Dropdown.Item as={Link} to="/dang-xuat">
                                <i className="bi bi-box-arrow-right me-2 text-success"></i>Đăng xuất
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </Container>
        </Navbar>
    );
};

export default Header;
