import React from "react";
import { Card } from "react-bootstrap";

const IntroCard = ({ icon, title, text, bg }) => {
  return (
    <Card className="h-100 shadow-sm border-0 p-4 intro-card">
      {/* Icon + Title cùng hàng */}
      <div className="d-flex align-items-center justify-content-center mb-3">
        <div
          className="d-flex align-items-center justify-content-center rounded-circle me-3"
          style={{
            width: "60px",
            height: "60px",
            backgroundColor: bg,
          }}
        >
          {icon}
        </div>
        <Card.Title className="fw-bold fs-4 mb-0">{title}</Card.Title>
      </div>

      <Card.Text className="text-muted text-center">{text}</Card.Text>

      <style jsx>{`
        .intro-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          text-align: center;
        }
        .intro-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </Card>
  );
};

export default IntroCard;
