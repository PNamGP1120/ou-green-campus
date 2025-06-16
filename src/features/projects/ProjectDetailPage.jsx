import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './ProjectDetailPage.module.css';
import Spinner from '../../components/ui/Spinner';
import { getProjectById } from '../../services/apiService';
import NotFoundPage from '../public/NotFoundPage';

const ProjectDetailPage = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const loadProject = async () => {
      const data = await getProjectById(projectId);
      setProject(data);
      setIsLoading(false);
    };
    loadProject();
  }, [projectId]);

  if (isLoading) return <div className="center-content"><Spinner /></div>;
  if (!project) return <NotFoundPage />;

  return (
    <div className={styles.detailPage}>
        <div className={styles.header} style={{backgroundImage: `url(${project.image})`}}>
            <div className={styles.headerOverlay}>
                <div className={styles.headerContent}>
                    <span className={styles.categoryTag}>{project.type}</span>
                    <h1 className={styles.title}>{project.title}</h1>
                    <p className={styles.date}>{project.date}</p>
                </div>
            </div>
        </div>
        <div className={`page-container ${styles.contentLayout}`}>
            <article className={styles.mainContent}>
                <p className={styles.description}>{project.description}</p>
                <div className={styles.articleBody} dangerouslySetInnerHTML={{ __html: project.content.replace(/\n/g, '<br />') }} />
            </article>
        </div>
    </div>
  );
};

export default ProjectDetailPage;