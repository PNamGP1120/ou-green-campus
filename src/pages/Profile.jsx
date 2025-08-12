import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Image, Spinner, Alert, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Lấy thông tin người dùng từ localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser);
        setUser(userData);
      } catch (e) {
        setError("Lỗi khi đọc thông tin người dùng.");
      }
    } else {
      setError("Không tìm thấy thông tin người dùng. Vui lòng đăng nhập lại.");
    }
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <Container className="my-5 text-center">
        <Spinner animation="border" variant="success" />
        <p className="mt-2">Đang tải thông tin...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="my-5">
        <Alert variant="danger">{error}</Alert>
        <div className="text-center">
          <Button as={Link} to="/dang-nhap" variant="success">
            Đi đến trang Đăng nhập
          </Button>
        </div>
      </Container>
    );
  }

  if (!user) {
    return (
      <Container className="my-5">
        <Alert variant="warning">
          Bạn chưa đăng nhập. Vui lòng đăng nhập để xem hồ sơ.
        </Alert>
        <div className="text-center">
          <Button as={Link} to="/dang-nhap" variant="success">
            Đi đến trang Đăng nhập
          </Button>
        </div>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow-lg border-0">
            <Card.Body className="p-5 text-center">
              <Image
                src={user.avatar || 'https://via.placeholder.com/150x150.png?text=User'}
                roundedCircle
                width="150"
                height="150"
                className="mb-4 border border-success border-3"
              />
              <h2 className="text-success">{user.first_name} {user.last_name}</h2>
              <p className="text-muted">{user.email}</p>
              <hr />
              <p><strong>Tên đăng nhập:</strong> {user.username}</p>
              <p><strong>Vai trò:</strong> {user.role?.name || 'Thành viên'}</p>
              <Button variant="outline-success" as={Link} to="/cai-dat-ho-so">
                Cập nhật hồ sơ
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;