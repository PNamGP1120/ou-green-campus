import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5">
      <div className="container">
        <div className="row">
          {/* Giới thiệu */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold text-success">🌱 OU Green Campus</h5>
            <p className="text-muted">
              Nền tảng số kết hợp công nghệ và giáo dục nhằm nâng cao nhận thức
              bảo vệ môi trường và xây dựng trường học xanh - sạch - đẹp.
            </p>
          </div>

          {/* Liên kết nhanh */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Liên kết nhanh</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/news" className="text-decoration-none text-light">
                  📰 Tin tức
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-decoration-none text-light">
                  🚀 Dự án
                </Link>
              </li>
              <li>
                <Link to="/documents" className="text-decoration-none text-light">
                  📚 Tài liệu
                </Link>
              </li>
              <li>
                <Link to="/chatbot" className="text-decoration-none text-light">
                  💬 Chatbot
                </Link>
              </li>
            </ul>
          </div>

          {/* Liên hệ */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Liên hệ</h5>
            <p className="mb-1">
              <i className="bi bi-geo-alt-fill me-2"></i> 97 Võ Văn Tần, Quận 3, TP.HCM
            </p>
            <p className="mb-1">
              <i className="bi bi-envelope-fill me-2"></i> support@ou.edu.vn
            </p>
            <p>
              <i className="bi bi-telephone-fill me-2"></i> 028 3930 0210
            </p>
            <div className="d-flex gap-3 mt-2">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-light fs-5">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-light fs-5">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-light fs-5">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bản quyền */}
        <div className="text-center border-top border-secondary mt-4 pt-3">
          <p className="mb-0">
            © {new Date().getFullYear()} OU Green Campus | Vì một tương lai xanh 🌍
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
