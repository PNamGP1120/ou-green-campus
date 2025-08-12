import React from "react";

const EventFilter = ({ onFilter }) => {
  return (
    <div className="flex gap-3 mb-6">
      <input
        type="text"
        placeholder="Tìm kiếm sự kiện..."
        className="border p-2 rounded w-full"
        onChange={(e) => onFilter(e.target.value)}
      />
      <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
        Lọc
      </button>
    </div>
  );
};

export default EventFilter;
