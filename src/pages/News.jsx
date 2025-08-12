import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NewsCard from "../components/NewsCard";

const News = () => {
  const newsList = [
    {
      id: 1,
      title: "Chiến dịch trồng cây xanh tại khuôn viên trường",
      excerpt:
        "Hàng trăm sinh viên tham gia trồng cây, góp phần tạo không gian xanh.",
      image:
        "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=600&h=400&fit=crop",
      date: "2025-08-01",
      slug: "chien-dich-trong-cay",
    },
    {
      id: 2,
      title: "Workshop tái chế rác thải nhựa",
      excerpt:
        "Sự kiện giúp sinh viên học cách tái chế đồ nhựa thành vật dụng hữu ích.",
      image:
        "https://images.unsplash.com/photo-1581579188871-45ea61f2a0c8?w=600&h=400&fit=crop",
      date: "2025-08-05",
      slug: "workshop-tai-che",
    },
    {
      id: 3,
      title: "Ra mắt ứng dụng AI phân loại rác",
      excerpt:
        "Ứng dụng AI giúp nhận diện và phân loại rác nhanh chóng, chính xác.",
      image:
        "https://images.unsplash.com/photo-1598965402089-897ce54c6bb6?w=600&h=400&fit=crop",
      date: "2025-08-08",
      slug: "ra-mat-ai-phan-loai-rac",
    },
    {
      id: 4,
      title: "Cuộc thi Sáng kiến Xanh 2025",
      excerpt:
        "Cơ hội để sinh viên đề xuất giải pháp bảo vệ môi trường sáng tạo.",
      image:
        "https://images.unsplash.com/photo-1556761175-129418cb2dfe?w=600&h=400&fit=crop",
      date: "2025-08-10",
      slug: "cuoc-thi-sang-kien-xanh",
    },
    {
      id: 5,
      title: "Hội thảo Năng lượng tái tạo",
      excerpt:
        "Chia sẻ về công nghệ năng lượng sạch và cơ hội việc làm xanh.",
      image:
        "https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?w=600&h=400&fit=crop",
      date: "2025-08-11",
      slug: "hoi-thao-nang-luong-tai-tao",
    },
    {
      id: 6,
      title: "Chiến dịch 'Nói không với rác nhựa'",
      excerpt: "Vận động cộng đồng giảm sử dụng nhựa dùng một lần.",
      image:
        "https://images.unsplash.com/photo-1549921296-3ecfdbc3e5b9?w=600&h=400&fit=crop",
      date: "2025-08-12",
      slug: "chien-dich-noi-khong-voi-rac-nhua",
    },
  ];

  return (
    <section className="py-5 bg-light">
      <Container>
        <h2 className="text-center fw-bold mb-4">Tin tức môi trường</h2>
        <p className="text-center text-muted mb-5">
          Cập nhật các hoạt động, chiến dịch và sáng kiến mới nhất vì môi trường.
        </p>
        <Row>
          {newsList.map((news) => (
            <Col md={4} className="mb-4" key={news.id}>
              <NewsCard {...news} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default News;
