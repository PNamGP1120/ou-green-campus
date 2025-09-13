import { useState, useEffect } from "react";
import api, { endpoints } from "../configs/Apis";

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [sessionId, setSessionId] = useState(
    localStorage.getItem("chat_session") || null
  );

  // Load lịch sử khi có sessionId
  useEffect(() => {
    const loadHistory = async () => {
      if (sessionId) {
        try {
          let res = await api.get(`/chat/history/${sessionId}/`);
          setMessages(res.data.history || []);
        } catch (err) {
          console.error("Không load được lịch sử:", err);
        }
      }
    };
    loadHistory();
  }, [sessionId]);

  const toggleChat = async () => {
    setIsOpen(!isOpen);

    // Nếu chưa có session thì tạo mới
    if (!sessionId) {
      try {
        let res = await api.post(endpoints.chatSessions); // POST /chat-sessions/
        setSessionId(res.data.id);
        localStorage.setItem("chat_session", res.data.id);
      } catch (err) {
        console.error("Không tạo được session:", err);
      }
    }
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");

    try {
      let res = await api.post(`${endpoints.chatSessions}${sessionId}/ask/`, {
        question: input,
      });

      const reply = res.data.answer || "Xin lỗi, chưa có câu trả lời.";
      setMessages((prev) => [...prev, { role: "bot", content: reply }]);
    } catch (err) {
      console.error("Chat error:", err);
      setMessages((prev) => [
        ...prev,
        { role: "bot", content: "❌ Có lỗi xảy ra, vui lòng thử lại." },
      ]);
    }
  };

  return (
    <div className="chat-widget">
      <button
        className="btn btn-success"
        onClick={toggleChat}
        style={{ position: "fixed", bottom: "20px", right: "20px" }}
      >
        💬 Chat
      </button>

      {isOpen && (
        <div
          className="border rounded shadow bg-white"
          style={{
            position: "fixed",
            bottom: "80px",
            right: "20px",
            width: "320px",
            maxHeight: "420px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div className="bg-success text-white p-2 fw-bold">
            OU Green Chatbot
          </div>

          <div className="flex-grow-1 p-2" style={{ overflowY: "auto" }}>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`mb-2 ${
                  msg.role === "user" ? "text-end" : "text-start"
                }`}
              >
                <span
                  className={`p-2 rounded ${
                    msg.role === "user"
                      ? "bg-primary text-white"
                      : "bg-light text-dark"
                  }`}
                >
                  {msg.content}
                </span>
              </div>
            ))}
          </div>

          <div className="d-flex border-top">
            <input
              className="form-control"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Nhập tin nhắn..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button className="btn btn-success" onClick={sendMessage}>
              Gửi
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatWidget;
