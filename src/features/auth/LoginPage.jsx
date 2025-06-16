import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth'; // **SỬA LỖI: Đường dẫn đúng**
import { useNavigate } from 'react-router-dom';
import styles from './LoginPage.module.css';
import Button from '../../components/ui/Button';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
    navigate('/admin');
  };

  return (
    <div className={styles.loginPage}>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <h2>Đăng nhập Hệ thống</h2>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Nhập email (vd: admin@ou.edu.vn)" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Mật khẩu</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <Button type="primary">Đăng nhập</Button>
      </form>
    </div>
  );
};
export default LoginPage;