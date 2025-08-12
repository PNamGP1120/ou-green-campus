// src/components/Event/EventTimeline.jsx
import React from "react";
import "./EventTimeline.css";

const events = [
  {
    date: "10/08/2025",
    title: "Chăm sóc rừng Cát Tiên",
    description: "Hơn 70 người tham gia hoạt động chăm sóc và bảo vệ rừng.",
  },
  {
    date: "05/07/2025",
    title: "Ngày hội Sống Xanh",
    description: "Chuỗi hoạt động nâng cao nhận thức về môi trường.",
  },
  {
    date: "20/06/2025",
    title: "Thu gom pin cũ",
    description: "Tổ chức thu gom và xử lý pin thải an toàn.",
  },
];

export default function EventTimeline() {
  return (
    <div className="timeline-container">
      <h2 className="text-center mb-4">📅 Sự kiện nổi bật</h2>
      <div className="timeline">
        {events.map((event, index) => (
          <div
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            key={index}
          >
            <div className="timeline-content">
              <h3>{event.date}</h3>
              <h4>{event.title}</h4>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
