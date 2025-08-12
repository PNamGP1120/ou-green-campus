// src/pages/Login.jsx
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Alert, Container, Row, Col, Card } from 'react-bootstrap';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { loginUser, getCurrentUser } from '../configs/APIs';
import UserContext from '../contexts/UserContext';

const Login = () => {
    const { setUser } = useContext(UserContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    // Xử lý đăng nhập thông thường
    const handleRegularSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const loginResponse = await loginUser(username, password);
            localStorage.setItem("access_token", loginResponse.data.access);
            localStorage.setItem("refresh_token", loginResponse.data.refresh);
            
            const user = await getCurrentUser(loginResponse.data.access);
            localStorage.setItem("user", JSON.stringify(user.data));
            
            // Cập nhật Context sau khi đăng nhập thành công
            setUser(user.data);

            navigate("/");
        } catch (err) {
            setError("Sai tên đăng nhập hoặc mật khẩu. Vui lòng thử lại.");
        } finally {
            setLoading(false);
        }
    };

    // Xử lý Google Login thành công
    const handleGoogleSuccess = async (tokenResponse) => {
        setLoading(true);
        setError("");
        try {
            const res = await axios.post(
                'http://localhost:8000/auth/google/',
                { access_token: tokenResponse.access_token }
            );
            
            const { user, access_token, refresh_token } = res.data;

            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('access_token', access_token);
            localStorage.setItem('refresh_token', refresh_token);
            
            // Cập nhật Context sau khi đăng nhập Google thành công
            setUser(user);

            navigate('/');
        } catch (error) {
            console.error('Lỗi khi gửi token đến backend:', error);
            setError('Không thể đăng nhập bằng Google. Vui lòng thử lại.');
        } finally {
            setLoading(false);
        }
    };

    const loginGoogle = useGoogleLogin({
        onSuccess: handleGoogleSuccess,
        onError: (error) => {
            console.error('Lỗi đăng nhập Google:', error);
            setError('Đăng nhập Google thất bại. Vui lòng thử lại.');
        },
    });

    return (
        <Container className="my-5">
            <Row className="justify-content-center">
                <Col md={6} lg={5}>
                    <Card className="shadow-lg border-0">
                        <Card.Body className="p-5">
                            <h3 className="text-center mb-4">Đăng nhập</h3>
                            {error && <Alert variant="danger" className="text-center">{error}</Alert>}
                            <Form onSubmit={handleRegularSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Tên đăng nhập</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Nhập tên đăng nhập"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                        disabled={loading}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-4">
                                    <Form.Label>Mật khẩu</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Nhập mật khẩu"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        disabled={loading}
                                    />
                                </Form.Group>
                                <Button
                                    variant="success"
                                    type="submit"
                                    className="w-100 mb-3"
                                    disabled={loading}
                                >
                                    {loading ? "Đang đăng nhập..." : "Đăng nhập"}
                                </Button>
                            </Form>
                            <div className="text-center my-3">
                                <span className="text-muted">Hoặc</span>
                            </div>
                            <Button
                                variant="outline-primary"
                                className="w-100 d-flex align-items-center justify-content-center"
                                onClick={loginGoogle}
                                disabled={loading}
                            >
                                <img
                                    src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                                    alt="Google"
                                    style={{ width: '20px', marginRight: '10px' }}
                                />
                                Đăng nhập với Google
                            </Button>
                            <p className="text-center mt-3 mb-0">
                                Bạn chưa có tài khoản? <a href="/dang-ky" className="text-success fw-bold">Đăng ký ngay</a>
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;