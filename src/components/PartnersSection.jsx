import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const PartnersSection = () => {
  const partners = [
    {
      id: 1,
      name: "WWF Vietnam",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/WWF_logo.svg/320px-WWF_logo.svg.png",
    },
    {
      id: 2,
      name: "Greenpeace",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Greenpeace_logo.svg/320px-Greenpeace_logo.svg.png",
    },
    {
      id: 3,
      name: "UN Environment",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/UNEP_logo.svg/320px-UNEP_logo.svg.png",
    },
    {
      id: 4,
      name: "Earth Hour",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Earth_Hour_logo.svg/320px-Earth_Hour_logo.svg.png",
    },
  ];

  return (
    <section className="py-5" style={{ backgroundColor: "#e8f5e9" }}>
      <Container>
        <h2 className="text-center fw-bold mb-4 text-success">
          Đối tác & Nhà tài trợ
        </h2>
        <p className="text-center text-muted mb-5">
          Chúng tôi tự hào hợp tác với các tổ chức và doanh nghiệp hàng đầu vì
          một tương lai xanh.
        </p>
        <Row className="justify-content-center">
          {partners.map((partner) => (
            <Col
              xs={6}
              md={3}
              className="text-center mb-4"
              key={partner.id}
            >
              <div
                style={{
                  background: "#fff",
                  padding: "20px",
                  borderRadius: "12px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  height: "150px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                className="partner-card"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "80px",
                    objectFit: "contain",
                  }}
                />
              </div>
              <p className="mt-3 fw-semibold">{partner.name}</p>
            </Col>
          ))}
        </Row>
      </Container>

      <style>
        {`
          .partner-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 6px 15px rgba(0,0,0,0.1);
          }
        `}
      </style>
    </section>
  );
};

export default PartnersSection;
