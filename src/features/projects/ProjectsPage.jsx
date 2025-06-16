import React, { useState, useEffect } from 'react';
import styles from './ProjectsPage.module.css';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button';
import Spinner from '../../components/ui/Spinner';
import { getAllProjects } from '../../services/apiService';
import { FaCalendarAlt, FaStar, FaLeaf, FaBullhorn, FaUsers } from 'react-icons/fa';

const iconMap = {
    'Sự kiện Đặc biệt': <FaStar />,
    'Hoạt động Sinh viên': <FaLeaf />,
    'Hoạt động Tình nguyện': <FaBullhorn />,
    'Tri ân Cộng đồng': <FaUsers />,
};

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      const data = await getAllProjects();
      setProjects(data);
      setIsLoading(false);
    };
    loadProjects();
  }, []);

  return (
    <div className={styles.projectsPage}>
        <div className="page-container">
            <div className={styles.pageHeader}>
                <h1 className="page-title">Hành trình của Chúng tôi</h1>
                <p className="page-subtitle">
                    Mỗi dự án là một câu chuyện, mỗi sự kiện là một dấu ấn. Cùng nhìn lại hành trình không ngừng nghỉ của OU Green Plus.
                </p>
            </div>

            {isLoading ? <Spinner /> : (
                <div className={styles.timeline}>
                    {projects.map((item, index) => (
                        <div key={item.id} className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}>
                             <div className={styles.timelineIcon}>{iconMap[item.type] || <FaLeaf />}</div>
                             <div className={styles.timelineContent}>
                                <div className={styles.timelineImage} style={{backgroundImage: `url(${item.image})`}}></div>
                                <div className={styles.contentWrapper}>
                                    <span className={styles.projectType}>{item.type}</span>
                                    <h2 className={styles.projectTitle}>{item.title}</h2>
                                    <span className={styles.projectDate}><FaCalendarAlt /> {item.date}</span>
                                    <p className={styles.projectDescription}>{item.description}</p>
                                    <Link to={`/du-an/${item.id}`}>
                                        <Button type="secondary">Xem chi tiết</Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    </div>
  );
};
export default ProjectsPage;