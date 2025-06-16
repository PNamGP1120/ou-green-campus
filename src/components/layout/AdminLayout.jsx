import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth'; // **SỬA LỖI: Đường dẫn đúng**
import styles from './Layout.module.css';
import { FaTachometerAlt, FaNewspaper, FaUsers, FaSignOutAlt } from 'react-icons/fa';

const AdminLayout = () => {
    const { user, logout } = useAuth();
    return (
        <div className={styles.adminLayout}>
            <aside className={styles.sidebar}>
                <div className={styles.sidebarHeader}><h3>Admin Panel</h3><p>Chào, {user?.name}</p></div>
                <nav className={styles.sidebarNav}>
                    <NavLink to="/admin" end><FaTachometerAlt /> Bảng điều khiển</NavLink>
                    <NavLink to="/admin/quan-ly-tin-tuc"><FaNewspaper /> Quản lý Tin tức</NavLink>
                    {user?.role === 'admin' && (<NavLink to="/admin/quan-ly-nguoi-dung"><FaUsers /> Quản lý Người dùng</NavLink>)}
                </nav>
                <div className={styles.sidebarFooter}><button onClick={logout}><FaSignOutAlt /> Đăng xuất</button></div>
            </aside>
            <main className={styles.adminContent}><Outlet /></main>
        </div>
    );
}
export default AdminLayout;