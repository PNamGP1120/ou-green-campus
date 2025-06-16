import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';
import Button from '../../components/ui/Button';

const NotFoundPage = () => {
    return (
        <div className={styles.notFoundPage}>
            <div className={styles.content}>
                <h1>404</h1>
                <h2>Trang không được tìm thấy</h2>
                <p>Rất tiếc, trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.</p>
                <Link to="/"><Button>Quay về Trang chủ</Button></Link>
            </div>
        </div>
    );
};

export default NotFoundPage;
