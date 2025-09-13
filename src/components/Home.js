import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-page">
      {/* Banner */}
      <section
        className="d-flex align-items-center text-center text-white"
        style={{
          height: "75vh",
          background: `linear-gradient(135deg, rgba(0, 100, 60, 0.7), rgba(0, 50, 30, 0.85)),
                       url('/images/green-campus.jpg') center/cover no-repeat`,
        }}
      >
        <div className="container">
          <h1 className="display-3 fw-bold mb-4 text-shadow">
            OU Green Campus 🌱
          </h1>
          <p className="lead fs-4 mb-4 text-shadow">
            Chung tay xây dựng <b>Đại học Xanh</b> – tri thức, công nghệ và cộng đồng
            kiến tạo tương lai bền vững.
          </p>
          <Link
            to="/register"
            className="btn btn-light btn-lg rounded-pill px-5 shadow-sm"
          >
            Bắt đầu ngay
          </Link>
        </div>
      </section>

      {/* Giới thiệu các mục chính */}
      <section className="py-5" style={{ background: "#f3fdf6" }}>
        <div className="container">
          <h2 className="fw-bold text-center text-success mb-5">
            Khám phá Green Campus
          </h2>
          <div className="row g-4">
            {[
              {
                icon: "bi-newspaper",
                color: "success",
                title: "Tin tức",
                desc: "Thông tin môi trường và cộng đồng được cập nhật nhanh chóng, chính xác.",
                link: "/news",
              },
              {
                icon: "bi-lightbulb",
                color: "warning",
                title: "Dự án",
                desc: "Đóng góp ý tưởng và tham gia vào các dự án xanh sáng tạo.",
                link: "/projects",
              },
              {
                icon: "bi-cpu",
                color: "primary",
                title: "AI phân loại rác",
                desc: "Trí tuệ nhân tạo hỗ trợ phân loại rác thải thông minh và hiệu quả.",
                link: "/classify",
              },
              {
                icon: "bi-chat-dots",
                color: "danger",
                title: "Chatbot",
                desc: "Trợ lý ảo tư vấn và hỗ trợ bạn 24/7 với thông tin hữu ích.",
                link: "/chatbot",
              },
            ].map((item, idx) => (
              <div key={idx} className="col-md-6 col-lg-3">
                <div className="p-5 bg-white shadow-sm rounded-4 text-center hover-card h-100">
                  <i
                    className={`bi ${item.icon} text-${item.color} display-4 mb-3`}
                  ></i>
                  <h5 className="fw-bold mb-3">{item.title}</h5>
                  <p className="text-muted">{item.desc}</p>
                  <Link
                    to={item.link}
                    className={`btn btn-${item.color} btn-sm rounded-pill text-white px-3`}
                  >
                    Khám phá →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        className="py-5 text-center text-white"
        style={{
          background:
            "linear-gradient(120deg, #2e7d32, #43a047, #66bb6a)",
        }}
      >
        <div className="container">
          <h2 className="fw-bold mb-3">Hành động hôm nay, xanh mai sau 🌍</h2>
          <p className="fs-5 mb-4">
            Mỗi đóng góp nhỏ đều có ý nghĩa lớn. Hãy cùng OU Green Campus kiến
            tạo hành tinh xanh.
          </p>
          <Link
            to="/register"
            className="btn btn-light btn-lg rounded-pill px-5 shadow-sm"
          >
            Tham gia ngay
          </Link>
        </div>
      </section>

      {/* CSS Hover */}
      <style jsx="true">{`
        .hover-card {
          transition: all 0.3s ease;
        }
        .hover-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15);
        }
        .text-shadow {
          text-shadow: 2px 3px 15px rgba(0, 0, 0, 0.55);
        }
      `}</style>
    </div>
  );
};

export default Home;
