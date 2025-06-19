import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import AdminLayout from '../components/layout/AdminLayout';
import ProtectedRoute from './ProtectedRoute';
import PublicRoute from './PublicRoute';
import HomePage from '../features/public/HomePage';
import ProjectsPage from '../features/projects/ProjectsPage';
import NewsPage from '../features/news/NewsPage';
import NewsDetailPage from '../features/news/NewsDetailPage';
import ContactPage from '../features/public/ContactPage';
import NotFoundPage from '../features/public/NotFoundPage';
import LoginPage from '../features/auth/LoginPage';
import DashboardPage from '../features/admin/DashboardPage';
import ProjectDetailPage from '../features/projects/ProjectDetailPage';
import MinigamePage from '../features/minigame/MinigamePage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/du-an" element={<ProjectsPage />} />
        <Route path="/du-an/:projectId" element={<ProjectDetailPage />} />
        <Route path="/tin-tuc" element={<NewsPage />} />
        {/* Thêm route cho trang chi tiết tin tức */}
        <Route path="/tin-tuc/:newsId" element={<NewsDetailPage />} />
        <Route path="/minigame" element={<MinigamePage />} />
        <Route path="/lien-he" element={<ContactPage />} />
        <Route path="/dang-nhap" element={<PublicRoute><LoginPage /></PublicRoute>} />

      </Route>
      <Route path="/admin" element={<ProtectedRoute allowedRoles={['admin', 'editor']}><AdminLayout /></ProtectedRoute>}>
        <Route index element={<DashboardPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
export default AppRoutes;