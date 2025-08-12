import React from "react";

const EventSidebar = () => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-4">
      <h2 className="text-lg font-bold mb-4">Sự kiện nổi bật</h2>
      <ul className="space-y-3">
        <li className="text-green-600 hover:underline cursor-pointer">Hội thảo bảo vệ môi trường</li>
        <li className="text-green-600 hover:underline cursor-pointer">Ngày hội trồng cây</li>
        <li className="text-green-600 hover:underline cursor-pointer">Cuộc thi ảnh xanh</li>
      </ul>
    </div>
  );
};

export default EventSidebar;
