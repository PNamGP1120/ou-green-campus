import { useEffect, useState } from "react";
import api, { endpoints } from "../configs/Apis";
import { Spinner, Alert, Card, Badge, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const DEFAULT_IMAGE =
  "https://ou.edu.vn/wp-content/uploads/2022/03/Anh-2-Trong-Cay-Gay-Rung-Phat-Trien-Mang-Xanh-nam-2020-1024x683.jpg";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true);
        let res = await api.get(endpoints.projects);
        setProjects(
          Array.isArray(res.data) ? res.data : res.data.results || []
        );
      } catch (err) {
        console.error("Lỗi load projects:", err);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };
    loadProjects();
  }, []);

  return (
    <div className="container py-5">
      <h2 className="text-success fw-bold text-center mb-5">
        🚀 Các Dự Án & Cuộc Thi
      </h2>

      {loading && (
        <div className="text-center my-4">
          <Spinner animation="border" variant="success" />
        </div>
      )}

      {!loading && projects.length === 0 && (
        <Alert variant="warning" className="text-center">
          Chưa có dự án nào!
        </Alert>
      )}

      <div className="timeline position-relative">
        {projects.map((p, idx) => (
          <div
            key={p.id}
            className={`timeline-item row align-items-center mb-5 ${
              idx % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <div className="col-md-6">
              <Card className="shadow border-0">
                <Card.Img
                  src={p.image || DEFAULT_IMAGE}
                  alt={p.title}
                  className="rounded-top"
                  style={{ maxHeight: "250px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title className="fw-bold">{p.title}</Card.Title>
                  <Card.Text className="text-muted">
                    {p.description?.substring(0, 200)}...
                  </Card.Text>

                  <div className="mb-2">
                    <Badge
                      bg={
                        p.status === "open"
                          ? "success"
                          : p.status === "closed"
                          ? "danger"
                          : p.status === "archived"
                          ? "secondary"
                          : "warning"
                      }
                      className="me-2"
                    >
                      {p.status.toUpperCase()}
                    </Badge>
                  </div>

                  <small className="text-secondary d-block mb-3">
                    <i className="bi bi-calendar-event me-1"></i>
                    {p.start_date
                      ? new Date(p.start_date).toLocaleDateString("vi-VN")
                      : "Chưa có ngày bắt đầu"}{" "}
                    ➝{" "}
                    {p.end_date
                      ? new Date(p.end_date).toLocaleDateString("vi-VN")
                      : "Chưa có ngày kết thúc"}
                  </small>

                  {/* ✅ Thêm nút xem chi tiết */}
                  <Link to={`/projects/${p.id}`}>
                    <Button variant="outline-success" size="sm">
                      <i className="bi bi-eye me-1"></i> Xem chi tiết
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>

            {/* Nút tròn timeline */}
            <div className="timeline-dot bg-success"></div>
          </div>
        ))}
      </div>

      {/* CSS inline */}
      <style jsx="true">{`
        .timeline::before {
          content: "";
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 4px;
          background: #198754;
          transform: translateX(-50%);
        }
        .timeline-item {
          position: relative;
        }
        .timeline-dot {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #198754;
          border: 3px solid #fff;
          z-index: 2;
        }
      `}</style>
    </div>
  );
};

export default Projects;
