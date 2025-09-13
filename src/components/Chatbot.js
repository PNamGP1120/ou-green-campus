import { useState } from "react";
import axios, { endpoints } from "../configs/Apis";

const Chatbot = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [sources, setSources] = useState([]);

  const askBot = async () => {
    try {
      let res = await axios.post(endpoints.chatbot, { question });
      setAnswer(res.data.answer);
      setSources(res.data.sources || []);
    } catch (err) {
      setAnswer("Có lỗi xảy ra khi gọi chatbot.");
    }
  };

  return (
    <div>
      <h2>Chatbot Môi Trường 🤖</h2>
      <textarea
        className="form-control"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Nhập câu hỏi..."
      />
      <button className="btn btn-success mt-2" onClick={askBot}>Hỏi</button>

      {answer && (
        <div className="mt-3">
          <h5>Trả lời:</h5>
          <p>{answer}</p>
          {sources.length > 0 && (
            <>
              <h6>Nguồn tham khảo:</h6>
              <ul>
                {sources.map((s, idx) => <li key={idx}>{s}</li>)}
              </ul>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Chatbot;
