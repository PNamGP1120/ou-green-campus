import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios, { endpoints } from "../configs/Apis";
import { Spinner, Alert, Card, Badge, Button } from "react-bootstrap";

const DEFAULT_IMAGE =
  "https://ou.edu.vn/wp-content/uploads/2022/03/Anh-2-Trong-Cay-Gay-Rung-Phat-Trien-Mang-Xanh-nam-2020-1024x683.jpg";

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadProject = async () => {
    try {
      setLoading(true);
      let res = await axios.get(`${endpoints.projects}${id}/`);
      setProject(res.data);
    } catch (err) {
      console.error("Lỗi load chi tiết dự án:", err);
      setProject(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProject();
  }, [id]);

  if (loading)
    return (
      <div className="text-center my-5">
        <Spinner animation="border" variant="success" />
      </div>
    );

  if (!project)
    return (
      <Alert variant="danger" className="mt-3">
        Không tìm thấy dự án này!
      </Alert>
    );

  return (
    <div className="container py-4">
      <Card className="shadow border-0">
        {/* Ảnh dự án */}
        <Card.Img
          variant="top"
          src={project.image || DEFAULT_IMAGE}
          alt={project.title}
          style={{ maxHeight: "400px", objectFit: "cover" }}
        />

        <Card.Body>
          {/* Tiêu đề */}
          <Card.Title className="fw-bold fs-2 mb-3 text-success">
            {project.title}
          </Card.Title>

          {/* Trạng thái */}
          <Badge
            bg={
              project.status === "open"
                ? "success"
                : project.status === "closed"
                ? "danger"
                : project.status === "archived"
                ? "secondary"
                : "warning"
            }
            className="mb-3"
          >
            {project.status?.toUpperCase()}
          </Badge>

          {/* Thời gian */}
          <p className="text-muted">
            <i className="bi bi-calendar-event me-2"></i>
            <b>Bắt đầu:</b>{" "}
            {project.start_date
              ? new Date(project.start_date).toLocaleDateString("vi-VN")
              : "Chưa có"}{" "}
            ➝ <b>Kết thúc:</b>{" "}
            {project.end_date
              ? new Date(project.end_date).toLocaleDateString("vi-VN")
              : "Chưa có"}
          </p>

          {/* Thông tin tạo/cập nhật */}
          <p className="text-muted small">
            📅 Tạo lúc:{" "}
            {new Date(project.created_at).toLocaleDateString("vi-VN")} | 🔄 Cập
            nhật: {new Date(project.updated_at).toLocaleDateString("vi-VN")}
          </p>

          {/* Mô tả */}
          <Card.Text
            className="mt-3"
            style={{ whiteSpace: "pre-line", lineHeight: "1.6" }}
          >
            {project.description || "Chưa có mô tả cho dự án này."}
          </Card.Text>

          {/* Nút quay lại */}
          <div className="mt-4">
            <Link to="/projects">
              <Button variant="outline-success">
                <i className="bi bi-arrow-left-circle me-2"></i>
                Quay lại danh sách
              </Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProjectDetail;
