import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Library = () => {
  const documents = [
    {
      id: 1,
      title: "Báo cáo môi trường 2025",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/PDF_icon.svg/512px-PDF_icon.svg.png",
      description: "Tổng hợp các số liệu và phân tích về môi trường năm 2025.",
      link: "#",
    },
    {
      id: 2,
      title: "Hướng dẫn phân loại rác",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/PDF_icon.svg/512px-PDF_icon.svg.png",
      description: "Tài liệu chi tiết về cách phân loại rác tại nguồn.",
      link: "#",
    },
    {
      id: 3,
      title: "Kế hoạch Trồng cây xanh 2025",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/PDF_icon.svg/512px-PDF_icon.svg.png",
      description: "Chiến dịch trồng cây cho khuôn viên trường và cộng đồng.",
      link: "#",
    },
    {
      id: 4,
      title: "Bản tin Đại học Xanh",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/PDF_icon.svg/512px-PDF_icon.svg.png",
      description: "Bản tin định kỳ cập nhật các hoạt động xanh.",
      link: "#",
    },
  ];

  return (
    <section className="py-5 bg-light">
      <Container>
        <h1 className="fw-bold text-center mb-4">Thư viện tài liệu & ấn phẩm</h1>
        <p className="text-center text-muted mb-5">
          Tại đây bạn có thể tìm thấy các tài liệu, báo cáo, hướng dẫn và ấn phẩm liên quan đến môi trường và phát triển bền vững.
        </p>
        <Row>
          {documents.map((doc) => (
            <Col md={3} sm={6} xs={12} key={doc.id} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src={doc.image}
                  alt={doc.title}
                  style={{ height: "180px", objectFit: "contain", padding: "20px" }}
                />
                <Card.Body>
                  <Card.Title className="fw-bold">{doc.title}</Card.Title>
                  <Card.Text className="text-muted" style={{ fontSize: "0.9rem" }}>
                    {doc.description}
                  </Card.Text>
                  <Button variant="success" size="sm" href={doc.link}>
                    Tải miễn phí
                  </Button>{" "}
                  <Button variant="outline-primary" size="sm" href={doc.link}>
                    Xem chi tiết
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Library;
