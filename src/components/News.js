import { useEffect, useState } from "react";
import { Alert, Button, Card, Col, Row, Form, InputGroup } from "react-bootstrap";
import Apis, { endpoints } from "../configs/Apis";
import { useSearchParams, Link } from "react-router-dom";
import MySpinner from "./layout/MySpinner";

// Ảnh mặc định nếu tin không có ảnh
const DEFAULT_IMAGE =
  "https://ou.edu.vn/wp-content/uploads/2022/03/Anh-2-Trong-Cay-Gay-Rung-Phat-Trien-Mang-Xanh-nam-2020-1024x683.jpg";

const News = () => {
  const [news, setNews] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useSearchParams();
  const [searchText, setSearchText] = useState(q.get("search") || "");

  // ✅ Load danh sách tin tức
  const loadNews = async () => {
    try {
      setLoading(true);
      let url = `${endpoints.news}?page=${page}`;

      let cate = q.get("cateId");
      if (cate) url += `&category=${cate}`;

      let tag = q.get("tagId");
      if (tag) url += `&tags=${tag}`;

      let search = q.get("search");
      if (search) url += `&search=${search}`;

      let res = await Apis.get(url);
      let data = Array.isArray(res.data) ? res.data : res.data.results || [];

      if (page === 1) setNews(data);
      else setNews((prev) => [...prev, ...data]);

      if (data.length === 0) setPage(0);
    } catch (ex) {
      console.error("Lỗi load news:", ex);
      setNews([]);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Load categories + tags
  useEffect(() => {
    const loadFilters = async () => {
      try {
        let cRes = await Apis.get(endpoints.categories);
        let tRes = await Apis.get(endpoints.tags);

        setCategories(Array.isArray(cRes.data) ? cRes.data : cRes.data.results || []);
        setTags(Array.isArray(tRes.data) ? tRes.data : tRes.data.results || []);
      } catch (err) {
        console.error("Lỗi load filter:", err);
      }
    };
    loadFilters();
  }, []);

  useEffect(() => {
    if (page > 0) loadNews();
  }, [page, q]);

  useEffect(() => {
    setPage(1);
  }, [q]);

  // ✅ Debounce tìm kiếm
  useEffect(() => {
    const timer = setTimeout(() => {
      let params = new URLSearchParams(q);
      if (searchText) params.set("search", searchText);
      else params.delete("search");
      setQ(params);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchText]);

  // ✅ Hàm thay đổi filter
  const handleFilterChange = (name, value) => {
    let params = new URLSearchParams(q);
    if (value) params.set(name, value);
    else params.delete(name);
    setQ(params);
  };

  return (
    <div className="container py-4">
      <h2 className="text-success fw-bold text-center mb-4">
        <i className="bi bi-newspaper me-2"></i> Tin tức
      </h2>

      {/* Bộ lọc */}
      <Row className="mb-3">
        <Col md={4} className="mb-2">
          <InputGroup>
            <InputGroup.Text>
              <i className="bi bi-search"></i>
            </InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Tìm kiếm..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </InputGroup>
        </Col>

        <Col md={4} className="mb-2">
          <InputGroup>
            <InputGroup.Text>
              <i className="bi bi-folder"></i>
            </InputGroup.Text>
            <Form.Select
              value={q.get("cateId") || ""}
              onChange={(e) => handleFilterChange("cateId", e.target.value)}
            >
              <option value="">Tất cả chuyên mục</option>
              {categories.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </Form.Select>
          </InputGroup>
        </Col>

        <Col md={4} className="mb-2">
          <InputGroup>
            <InputGroup.Text>
              <i className="bi bi-tags"></i>
            </InputGroup.Text>
            <Form.Select
              value={q.get("tagId") || ""}
              onChange={(e) => handleFilterChange("tagId", e.target.value)}
            >
              <option value="">Tất cả thẻ</option>
              {tags.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name}
                </option>
              ))}
            </Form.Select>
          </InputGroup>
        </Col>
      </Row>

      {/* Danh sách tin tức */}
      {news.length === 0 && !loading && (
        <Alert variant="warning" className="mt-2">
          Không có tin tức nào!
        </Alert>
      )}

      <Row>
        {news.map((n) => (
          <Col className="p-2" md={4} xs={12} key={n.id}>
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={n.image || DEFAULT_IMAGE}
                alt={n.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title className="text-truncate">{n.title}</Card.Title>
                <Card.Text className="text-muted">
                  {n.content?.slice(0, 120)}...
                </Card.Text>
                <Link to={`/news/${n.id}`} className="btn btn-sm btn-success">
                  <i className="bi bi-book me-1"></i> Đọc thêm
                </Link>
              </Card.Body>
              <Card.Footer className="small text-muted">
                <i className="bi bi-calendar-event me-1"></i>
                {new Date(n.created_at).toLocaleDateString("vi-VN")}
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>

      {loading && <MySpinner />}

      {page > 0 && news.length > 0 && (
        <div className="text-center mt-3 mb-3">
          <Button variant="outline-success" onClick={() => setPage(page + 1)}>
            <i className="bi bi-arrow-down-circle me-1"></i> Xem thêm...
          </Button>
        </div>
      )}
    </div>
  );
};

export default News;
