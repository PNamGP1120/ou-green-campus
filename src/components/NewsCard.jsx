import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NewsCard = ({ title, excerpt, image, date, slug }) => {
  return (
    <Card className="h-100 shadow-sm border-0">
      <div style={{ overflow: "hidden", borderTopLeftRadius: ".5rem", borderTopRightRadius: ".5rem" }}>
        <Card.Img
          variant="top"
          src={image}
          alt={title}
          loading="lazy"
          style={{ height: 180, objectFit: "cover" }}
        />
      </div>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="fs-6 fw-bold mb-2" style={{ minHeight: "3.6rem" }}>
          <Link to={`/tin-tuc/${slug}`} className="text-decoration-none text-dark">
            {title}
          </Link>
        </Card.Title>
        <Card.Text className="text-muted" style={{ flexGrow: 1 }}>
          {excerpt}
        </Card.Text>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <small className="text-muted">{new Date(date).toLocaleDateString()}</small>
          <Button
            as={Link}
            to={`/tin-tuc/${slug}`}
            variant="success"
            size="sm"
          >
            Xem
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default NewsCard;
