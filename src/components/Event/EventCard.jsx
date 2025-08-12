import React from "react";

const EventCard = ({ title, date, location, description, image }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-500">{date} | {location}</p>
        <p className="text-gray-700 mt-2 line-clamp-3">{description}</p>
        <button className="mt-3 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
          Xem chi tiết
        </button>
      </div>
    </div>
  );
};

export default EventCard;
