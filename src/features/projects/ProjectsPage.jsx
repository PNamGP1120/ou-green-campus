import React from 'react';
import styles from './ProjectsPage.module.css';
import { FaCalendarAlt, FaBullhorn, FaLeaf, FaUsers, FaStar } from 'react-icons/fa';
import Button from '../../components/ui/Button';
import { Link } from 'react-router-dom';

// Dữ liệu giả lập cho các dự án trên dòng thời gian
const timelineData = [
    {
        id: 1,
        date: 'Tháng 6, 2025',
        icon: <FaStar />,
        title: 'Cuộc thi Đại sứ Môi trường',
        description: 'Tìm kiếm những gương mặt sinh viên tiên phong, có ảnh hưởng và những dự án đột phá trong lĩnh vực bảo vệ môi trường.',
        type: 'Sự kiện Đặc biệt',
        image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2940&auto=format&fit=crop',
    },
    {
        id: 2,
        date: 'Tháng 2, 2025',
        icon: <FaLeaf />,
        title: 'Sự kiện OU Green+ Tour',
        description: 'Một chuỗi trạm thông tin và hoạt động tương tác nhằm thúc đẩy lối sống xanh và bền vững trong cộng đồng sinh viên OU.',
        type: 'Hoạt động Sinh viên',
        image: 'https://images.unsplash.com/photo-1576085898323-21a33d8a743a?q=80&w=2839&auto=format&fit=crop',
    },
    {
        id: 3,
        date: 'Tháng 12, 2024',
        icon: <FaBullhorn />,
        title: 'Ấn Xanh 2025',
        description: 'Hoạt động tình nguyện thường niên nhân dịp Tết đến, mang những món quà và sự sẻ chia ấm áp đến các hoàn cảnh khó khăn.',
        type: 'Hoạt động Tình nguyện',
        image: 'https://images.unsplash.com/photo-1517456793572-1d6ef2f78e59?q=80&w=2940&auto=format&fit=crop',
    },
    {
        id: 4,
        date: 'Tháng 9, 2024',
        icon: <FaUsers />,
        title: 'Sự kiện OU Thanks',
        description: 'Tổ chức các hoạt động ý nghĩa nhằm tri ân cộng đồng, các đối tác và những người đã luôn ủng hộ hành trình của CLB.',
        type: 'Tri ân Cộng đồng',
        image: 'https://images.unsplash.com/photo-1521404924853-4e1957214a13?q=80&w=2940&auto=format&fit=crop',
    },
];

const ProjectsPage = () => {
  return (
    <div className={styles.projectsPage}>
        <div className={styles.container}>
            <div className={styles.pageHeader}>
                <h1 className={styles.pageTitle}>Hành trình của Chúng tôi</h1>
                <p className={styles.pageSubtitle}>
                    Mỗi dự án là một câu chuyện, mỗi sự kiện là một dấu ấn. Cùng nhìn lại hành trình không ngừng nghỉ của OU Green Plus trên con đường xây dựng một tương lai bền vững.
                </p>
            </div>

            <div className={styles.timeline}>
                {timelineData.map((item, index) => (
                    <div key={item.id} className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}>
                        <div className={styles.timelineIcon}>{item.icon}</div>
                        <div className={styles.timelineContent}>
                            <div className={styles.timelineImage} style={{backgroundImage: `url(${item.image})`}}></div>
                            <div className={styles.contentWrapper}>
                                <span className={styles.projectType}>{item.type}</span>
                                <h2>{item.title}</h2>
                                <span className={styles.projectDate}><FaCalendarAlt /> {item.date}</span>
                                <p>{item.description}</p>
                                <Link to={`/du-an/${item.id}`}>
                                    <Button type="secondary">Xem chi tiết</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default ProjectsPage;