import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import News from "./components/News";
import NewsDetail from "./components/NewsDetail";
import Projects from "./components/Projects";
import ProjectDetail from "./components/ProjectDetail";
import Documents from "./components/Documents";
import Chatbot from "./components/Chatbot";
import Feedback from "./components/Feedback";
import WasteClassifier from "./components/WasteClassifier";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ChatWidget from "./components/ChatWidget";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="container mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Ai cũng xem được */}
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetail />} />

          {/* Chỉ user */}
          <Route path="/projects" element={
            <ProtectedRoute role="user"><Projects /></ProtectedRoute>
          } />
          <Route path="/projects/:id" element={
            <ProtectedRoute role="user"><ProjectDetail /></ProtectedRoute>
          } />
          <Route path="/classify" element={
            <ProtectedRoute role="user"><WasteClassifier /></ProtectedRoute>
          } />
          <Route path="/chatbot" element={
            <ProtectedRoute role="user"><Chatbot /></ProtectedRoute>
          } />
          <Route path="/feedback" element={
            <ProtectedRoute role="user"><Feedback /></ProtectedRoute>
          } />

          {/* Chỉ editor */}
          <Route path="/documents" element={
            <ProtectedRoute role="editor"><Documents /></ProtectedRoute>
          } />
        </Routes>
      </main>
      <ChatWidget />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
