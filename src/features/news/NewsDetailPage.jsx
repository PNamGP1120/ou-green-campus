import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './NewsDetailPage.module.css';
import Spinner from '../../components/ui/Spinner';
import Card from '../../components/ui/Card';
import { getNewsById, getAllNews } from '../../services/apiService';
import NotFoundPage from '../public/NotFoundPage';

const NewsDetailPage = () => {
  const { newsId } = useParams();
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
        setIsLoading(true);
        window.scrollTo(0, 0);

        const currentArticle = await getNewsById(newsId);
        if (currentArticle) {
            setArticle(currentArticle);
            const allNews = await getAllNews();
            const related = allNews
                .filter(item => item.id !== currentArticle.id && item.category === currentArticle.category) // Lấy các bài cùng chuyên mục
                .slice(0, 3); // Lấy 3 bài viết liên quan
            setRelatedArticles(related);
        }
        setIsLoading(false);
    };
    loadData();
  }, [newsId]);

  if (isLoading) return <div className='center-content'><Spinner /></div>;
  if (!article) return <NotFoundPage />;

  return (
    <div className={styles.newsDetailPage}>
        <div className={styles.header} style={{backgroundImage: `url(${article.image || 'https://placehold.co/1920x800/e8f5e9/616161?text=OU+Green'})`}}>
            <div className={styles.headerOverlay}>
                <div className={styles.headerContent}>
                     <span className={styles.categoryTag}>{article.category}</span>
                     <h1 className={styles.title}>{article.title}</h1>
                     <p className={styles.date}>{article.date}</p>
                </div>
            </div>
        </div>
        <div className={`page-container ${styles.contentLayout}`}>
            <article className={styles.mainContent}>
                <p className={styles.description}>{article.description}</p>
                <div className={styles.articleBody} dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, '<br />') }} />
            </article>
        </div>

        {relatedArticles.length > 0 && (
            <section className={styles.relatedSection}>
                <div className="page-container">
                    <h2>Bài viết liên quan</h2>
                    <div className={styles.relatedGrid}>
                        {relatedArticles.map(item => (
                            <Card
                                key={item.id}
                                title={item.title}
                                description={item.description}
                                image={item.image}
                                link={`/tin-tuc/${item.id}`}
                                category={item.category}
                                date={item.date}
                            />
                        ))}
                    </div>
                </div>
            </section>
        )}
    </div>
  );
};
export default NewsDetailPage;