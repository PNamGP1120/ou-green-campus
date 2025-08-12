import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

// Dữ liệu mẫu
const documents = [
  {
    id: 1,
    title: "Cẩm nang phân loại rác",
    image: "https://picsum.photos/seed/pdf1/300/400",
    link: "#",
  },
  {
    id: 2,
    title: "Hướng dẫn tiết kiệm năng lượng",
    image: "https://picsum.photos/seed/pdf2/300/400",
    link: "#",
  },
  {
    id: 3,
    title: "Báo cáo môi trường Việt Nam 2024",
    image: "https://picsum.photos/seed/pdf3/300/400",
    link: "#",
  },
  {
    id: 4,
    title: "Sổ tay Đại học Xanh",
    image: "https://picsum.photos/seed/pdf4/300/400",
    link: "#",
  },
];

const FeaturedLibrary = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        <h2 className="text-center fw-bold mb-4">
          Thư viện Tài liệu & Ấn phẩm
        </h2>
        <p className="text-center mb-5 text-muted">
          Khám phá những tài liệu, ấn phẩm nổi bật về bảo vệ môi trường và phát triển bền vững.
        </p>

        <Row>
          {documents.map((doc) => (
            <Col key={doc.id} md={3} sm={6} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src={doc.image}
                  alt={doc.title}
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fw-bold" style={{ fontSize: "1rem" }}>
                    {doc.title}
                  </Card.Title>
                  <div className="mt-auto">
                    <Button
                      variant="success"
                      size="sm"
                      href={doc.link}
                      className="w-100"
                    >
                      Tải miễn phí
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-4">
          <Button variant="primary" size="lg">
            Xem tất cả tài liệu
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedLibrary;
