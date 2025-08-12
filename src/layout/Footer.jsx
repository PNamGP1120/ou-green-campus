import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white pt-5 pb-3" style={{ backgroundColor: "#2e7d32" }}>
      <Container>
        <Row>
          {/* Cột 1: Giới thiệu */}
          <Col md={4} className="mb-4">
            <h5 className="fw-bold mb-3">OU Green Plus</h5>
            <p>
              Nền tảng xanh của Trường Đại học Mở TP.HCM, kết nối cộng đồng sinh viên
              và đối tác cùng hành động vì môi trường bền vững.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-white fs-5">
                <FaFacebookF />
              </a>
              <a href="#" className="text-white fs-5">
                <FaInstagram />
              </a>
              <a href="#" className="text-white fs-5">
                <FaYoutube />
              </a>
            </div>
          </Col>

          {/* Cột 2: Liên hệ */}
          <Col md={4} className="mb-4">
            <h5 className="fw-bold mb-3">Liên hệ</h5>
            <p className="mb-2">
              <FaMapMarkerAlt className="me-2" />
              97 Võ Văn Tần, Xuân Hòa, TP.HCM
            </p>
            <p className="mb-2">
              <FaPhoneAlt className="me-2" /> (028) 1234 5678
            </p>
            <p className="mb-0">
              <FaEnvelope className="me-2" /> ougreen@ou.edu.vn
            </p>
          </Col>

          {/* Cột 3: Liên kết nhanh */}
          <Col md={4} className="mb-4">
            <h5 className="fw-bold mb-3">Liên kết nhanh</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-white text-decoration-none">
                  Trang chủ
                </a>
              </li>
              <li>
                <a href="/news" className="text-white text-decoration-none">
                  Tin tức
                </a>
              </li>
              <li>
                <a href="/projects" className="text-white text-decoration-none">
                  Dự án & Cuộc thi
                </a>
              </li>
              <li>
                <a href="/ai" className="text-white text-decoration-none">
                  Ứng dụng AI
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white text-decoration-none">
                  Liên hệ
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        <hr className="border-light" />

        <p className="text-center mb-0">
          © {new Date().getFullYear()} OU Green Plus. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
