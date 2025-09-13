import { useState } from "react";
import axios, { endpoints } from "../configs/Apis";

const Feedback = () => {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const sendFeedback = async (e) => {
    e.preventDefault();
    try {
      await axios.post(endpoints.feedback, { message });
      setStatus("Cảm ơn bạn đã gửi góp ý!");
      setMessage("");
    } catch (err) {
      setStatus("Có lỗi xảy ra, vui lòng thử lại.");
    }
  };

  return (
    <div>
      <h2>Gửi góp ý</h2>
      <form onSubmit={sendFeedback}>
        <textarea
          className="form-control"
          rows="5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Nhập góp ý của bạn..."
        />
        <button className="btn btn-success mt-2">Gửi</button>
      </form>
      {status && <p className="mt-3">{status}</p>}
    </div>
  );
};

export default Feedback;
