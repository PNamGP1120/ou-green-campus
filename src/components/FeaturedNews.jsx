import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import NewsCard from "./NewsCard";

const FeaturedNews = ({ articles = [] }) => {
    const sample = [
        {
            id: 1,
            title: "Chiến dịch trồng cây xanh tại khuôn viên trường",
            excerpt: "Hàng trăm sinh viên tham gia trồng cây, góp phần tạo không gian xanh.",
            image: "https://picsum.photos/seed/trees/600/400",
            date: "2025-08-01",
            slug: "chien-dich-trong-cay",
        },
        {
            id: 2,
            title: "Workshop tái chế rác thải nhựa",
            excerpt: "Sự kiện giúp sinh viên học cách tái chế đồ nhựa thành vật dụng hữu ích.",
            image: "https://picsum.photos/seed/recycle/600/400",
            date: "2025-08-05",
            slug: "workshop-tai-che",
        },
        {
            id: 3,
            title: "Ngày hội đổi rác lấy quà",
            excerpt: "Người tham gia mang rác tái chế đến đổi lấy cây xanh và quà tặng hữu ích.",
            image: "https://picsum.photos/seed/swap/600/400",
            date: "2025-08-08",
            slug: "ngay-hoi-doi-rac-lay-qua",
        },
        {
            id: 4,
            title: "Triển lãm sản phẩm xanh sáng tạo",
            excerpt: "Giới thiệu các sản phẩm tái chế và thân thiện môi trường do sinh viên thiết kế.",
            image: "https://picsum.photos/seed/exhibit/600/400",
            date: "2025-08-10",
            slug: "trien-lam-san-pham-xanh",
        },
        {
            id: 5,
            title: "Khóa học trực tuyến về biến đổi khí hậu",
            excerpt: "Cung cấp kiến thức cơ bản và nâng cao nhận thức về tác động của biến đổi khí hậu.",
            image: "https://picsum.photos/seed/climate/600/400",
            date: "2025-08-12",
            slug: "khoa-hoc-bien-doi-khi-hau",
        },
        {
            id: 6,
            title: "Cuộc thi ảnh 'Sống xanh mỗi ngày'",
            excerpt: "Khuyến khích mọi người chia sẻ hình ảnh về lối sống xanh và tiết kiệm năng lượng.",
            image: "https://picsum.photos/seed/greenlife/600/400",
            date: "2025-08-15",
            slug: "cuoc-thi-anh-song-xanh",
        },
    ];


    const list = articles.length > 0 ? articles : sample;

    return (
        <section className="py-5">
            <Container>
                <div className="d-flex align-items-center justify-content-between mb-4">
                    <div>
                        <h3 className="fw-bold mb-0">Tin tức môi trường nổi bật</h3>
                        <small className="text-muted">Cập nhật mới nhất từ OU Green Plus</small>
                    </div>
                    <Button as={Link} to="/tin-tuc" variant="outline-success">
                        Xem tất cả tin tức
                    </Button>
                </div>

                <Row className="g-4">
                    {list.slice(0, 6).map((a) => (
                        <Col key={a.id} sm={6} md={4}>
                            <NewsCard {...a} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default FeaturedNews;
