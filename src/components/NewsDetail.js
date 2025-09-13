import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, Badge, Spinner, Alert } from "react-bootstrap";
import Apis, { endpoints } from "../configs/Apis";

const DEFAULT_IMAGE =
  "https://ou.edu.vn/wp-content/uploads/2022/03/Anh-2-Trong-Cay-Gay-Rung-Phat-Trien-Mang-Xanh-nam-2020-1024x683.jpg";

const NewsDetail = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadNewsDetail = async () => {
    try {
      setLoading(true);
      let res = await Apis.get(`${endpoints.news}${id}/`);
      setNews(res.data);
    } catch (err) {
      console.error("Lỗi load news detail:", err);
      setNews(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadNewsDetail();
  }, [id]);

  if (loading)
    return (
      <div className="text-center my-5">
        <Spinner animation="border" variant="success" />
      </div>
    );

  if (!news)
    return (
      <Alert variant="danger" className="mt-3">
        Không tìm thấy tin tức này!
      </Alert>
    );

  return (
    <div className="container py-4">
      <Card className="shadow">
        <Card.Img
          variant="top"
          src={news.image || DEFAULT_IMAGE}
          alt={news.title}
          style={{ maxHeight: "400px", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title className="fw-bold fs-3 mb-3">{news.title}</Card.Title>
          <Card.Subtitle className="text-muted mb-2">
            <i className="bi bi-calendar-event me-2"></i>
            {new Date(news.created_at).toLocaleDateString("vi-VN")}
          </Card.Subtitle>

          {/* Hiển thị category */}
          {news.category && (
            <p>
              <Badge bg="info">
                <i className="bi bi-folder me-1"></i>
                {news.category.name}
              </Badge>
            </p>
          )}

          {/* Hiển thị tags */}
          {news.tags && news.tags.length > 0 && (
            <p>
              {news.tags.map((t) => (
                <Badge bg="secondary" className="me-1" key={t.id}>
                  <i className="bi bi-tag me-1"></i>
                  {t.name}
                </Badge>
              ))}
            </p>
          )}

          <Card.Text style={{ whiteSpace: "pre-line" }}>{news.content}</Card.Text>

          <Link to="/news" className="btn btn-outline-success mt-3">
            <i className="bi bi-arrow-left-circle me-2"></i>
            Quay lại danh sách
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NewsDetail;
