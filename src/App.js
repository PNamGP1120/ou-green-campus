import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './layout/Footer';
import Header from './layout/Header';
import './App.css'; // Thêm dòng này
import Home from './pages/Home';
import News from './pages/News';
import Library from './pages/Library';
import Event from './pages/Event';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tin-tuc" element={<News />} />
            <Route path="/thu-vien" element={<Library />} />
            <Route path="/su-kien" element={<Event />} />
            <Route path="/dang-nhap" element={<Login />} />
            <Route path="/dang-ky" element={<Register />} />
            <Route path="/ho-so" element={<Profile />} />
            {/* Thêm các route khác ở đây */}
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
