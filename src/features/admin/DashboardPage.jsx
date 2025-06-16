import React from 'react';
import { useAuth } from '../../hooks/useAuth'; // **SỬA LỖI: Đường dẫn đúng**
import styles from './DashboardPage.module.css';

const DashboardPage = () => {
    const { user } = useAuth();
    return (
        <div>
            <h1 className={styles.title}>Bảng điều khiển</h1>
            <p className={styles.welcome}>Chào mừng trở lại, {user?.name}!</p>
        </div>
    );
};
export default DashboardPage;