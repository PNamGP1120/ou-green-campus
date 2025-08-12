import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const CallToActionSection = () => {
  return (
    <section
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "80px 0",
        color: "#fff",
        position: "relative",
      }}
    >
      {/* Overlay màu xanh lá mờ */}
      <div
        style={{
          backgroundColor: "rgba(0, 100, 0, 0.6)",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      ></div>

      <Container style={{ position: "relative", zIndex: 2 }}>
        <Row className="justify-content-center text-center">
          <Col md={8}>
            <h2 className="fw-bold mb-3">
              🌱 Hãy cùng chúng tôi hành động vì môi trường!
            </h2>
            <p className="mb-4">
              Tham gia chiến dịch, đăng ký nhận bản tin, hoặc đóng góp tài liệu/dự án để cùng xây dựng cộng đồng xanh.
            </p>

            {/* Form đăng ký */}
            <Form className="d-flex justify-content-center">
              <Form.Control
                type="email"
                placeholder="Nhập email của bạn"
                className="me-2"
                style={{ maxWidth: "300px" }}
              />
              <Button variant="light" type="submit" className="fw-bold">
                Đăng ký
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CallToActionSection;
