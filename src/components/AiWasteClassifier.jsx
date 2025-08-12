import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const AiWasteClassifier = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        <Row className="align-items-center">
          {/* Hình ảnh demo AI phân loại rác (này từ Unsplash, tải ổn định) */}
          <Col md={6} className="mb-4 mb-md-0">
            <img
              src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/518270235_1152894193551997_2916275621364815628_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=AZMXT0bFciUQ7kNvwFOZZKp&_nc_oc=Adn2BShk_6PNHnYzrFylKOoBgtDMhiU-Q6OXh9WER7BPTyHribUukqhbt6UV-KnHVek&_nc_zt=23&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=-CIrnUjU2MbEa7dfk0BHBQ&oh=00_AfVNDzSUvmxjY2P7y73AB885Se-oGbvYrGL0QFs8OC6REA&oe=689F621F"
              alt="AI phân loại rác"
              className="img-fluid rounded shadow"
            />
          </Col>

          {/* Nội dung mô tả */}
          <Col md={6}>
            <h2 className="fw-bold mb-3">Ứng dụng AI Phân Loại Rác</h2>
            <p className="text-muted">
              Ứng dụng sử dụng công nghệ AI để nhận diện và phân loại hình ảnh rác thải—hữu cơ, vô cơ, tái chế, và rác nguy hại.
            </p>
            <p className="text-muted">
              Giúp nâng cao nhận thức, xử lý chính xác và tiết kiệm thời gian—bảo vệ môi trường một cách thông minh.
            </p>
            <Button variant="success" size="lg" href="/ai-phan-loai-rac" className="mt-3">
              🚀 Dùng thử ngay
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AiWasteClassifier;
