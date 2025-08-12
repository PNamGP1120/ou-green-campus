import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { FaHandshake, FaUsers } from "react-icons/fa";

// Dữ liệu mẫu
const projects = [
  {
    id: 1,
    title: "Chiến dịch Làm sạch bãi biển Cần Giờ",
    date: "2025-09-15",
    description:
      "Cùng chung tay dọn rác, trồng cây và nâng cao ý thức bảo vệ hệ sinh thái biển.",
    status: "Đang kêu gọi tài trợ",
    icon: <FaHandshake className="text-warning me-2" />,
    link: "#",
  },
  {
    id: 2,
    title: "Cuộc thi Sáng tạo Tái chế",
    date: "2025-10-01",
    description:
      "Thiết kế sản phẩm hữu ích từ vật liệu tái chế, nhận giải thưởng hấp dẫn.",
    status: "Đang nhận đăng ký",
    icon: <FaUsers className="text-success me-2" />,
    link: "#",
  },
  {
    id: 3,
    title: "Dự án Vườn rau xanh trong trường",
    date: "2025-08-25",
    description:
      "Xây dựng khu vườn rau sạch cung cấp thực phẩm cho căn tin và sinh viên.",
    status: "Đang kêu gọi tài trợ",
    icon: <FaHandshake className="text-warning me-2" />,
    link: "#",
  },
];

const ActiveProjects = () => {
  return (
    <section className="py-5">
      <Container>
        <h2 className="text-center fw-bold mb-4">Dự án & Cuộc thi</h2>
        <p className="text-center mb-5 text-muted">
          Cập nhật những dự án và cuộc thi môi trường đang diễn ra. Hãy tham gia ngay hôm nay!
        </p>

        <Row>
          {projects.map((proj) => (
            <Col key={proj.id} md={4} sm={6} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body className="d-flex flex-column">
                  <div className="d-flex align-items-center mb-2">
                    {proj.icon}
                    <Badge bg="light" text="dark" className="fw-bold">
                      {proj.status}
                    </Badge>
                  </div>
                  <Card.Title className="fw-bold">{proj.title}</Card.Title>
                  <small className="text-muted mb-2">
                    📅 {new Date(proj.date).toLocaleDateString("vi-VN")}
                  </small>
                  <Card.Text className="text-muted flex-grow-1">
                    {proj.description}
                  </Card.Text>
                  <Button
                    variant="primary"
                    href={proj.link}
                    className="mt-auto"
                  >
                    {proj.status.includes("đăng ký") ? "Đăng ký ngay" : "Tìm hiểu thêm"}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-4">
          <Button variant="success" size="lg">
            Xem tất cả dự án & cuộc thi
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default ActiveProjects;
