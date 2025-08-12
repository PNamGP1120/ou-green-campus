import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaLeaf, FaHandsHelping, FaRecycle } from "react-icons/fa";
import IntroCard from "./IntroCard";

const IntroSection = () => {
  const introItems = [
    {
      icon: <FaLeaf size={40} className="text-success" />,
      title: "Tầm nhìn Xanh",
      text: "Hướng tới môi trường học tập và sinh hoạt xanh, bền vững cho cộng đồng.",
      bg: "rgba(25, 135, 84, 0.1)",
    },
    {
      icon: <FaHandsHelping size={40} className="text-primary" />,
      title: "Kết nối Cộng đồng",
      text: "Nơi sinh viên, tổ chức và doanh nghiệp cùng hành động vì môi trường.",
      bg: "rgba(13, 110, 253, 0.1)",
    },
    {
      icon: <FaRecycle size={40} className="text-warning" />,
      title: "Giải pháp Thông minh",
      text: "Ứng dụng AI phân loại rác giúp nâng cao nhận thức và hành động đúng cách.",
      bg: "rgba(255, 193, 7, 0.1)",
    },
  ];

  return (
    <section
      className="py-5"
      style={{
        background: "linear-gradient(135deg, #f8f9fa, #e8f5e9)",
      }}
    >
      <Container>
        <h2 className="text-center fw-bold mb-4 display-5 text-success">
          Giới thiệu về OU Green Plus
        </h2>
        <p className="text-center mb-5 text-muted fs-5">
          Nền tảng số của Trường Đại học Mở TP.HCM, cùng chung tay hiện thực hóa{" "}
          <strong>“Đại học Xanh”</strong> – Nơi mọi người kết nối, học hỏi và
          hành động vì môi trường.
        </p>

        <Row>
          {introItems.map((item, index) => (
            <Col md={4} className="mb-4" key={index}>
              <IntroCard {...item} />
            </Col>
          ))}
        </Row>

        <div className="text-center mt-5">
          <Button
            variant="success"
            size="lg"
            className="px-4 py-2 shadow-sm rounded-pill"
          >
            🌱 Tìm hiểu thêm
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default IntroSection;
