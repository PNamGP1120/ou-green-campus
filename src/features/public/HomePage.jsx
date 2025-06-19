import React, { useState, useEffect, useCallback } from 'react';
import styles from './HomePage.module.css';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import { FaTree, FaUsers, FaHeart, FaHandshake, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ougreenLogo from '../../assets/images/logo.png'; // Đảm bảo bạn có file logo.png trong assets/images

// Dữ liệu giả lập
const slideData = [
    { image: 'https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/485934169_1069757845198966_3326906785981094135_n.jpg?stp=dst-jpg_p180x540_tt6&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=V-BxDMQl2gMQ7kNvwHjjofv&_nc_oc=AdkI03GK_liZTxps7_-3Bd-4XX-e_vZLUlDkafbhNOliIPwyL8ZXkDdhqpUKnend-ec&_nc_zt=23&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=X4E0NghQYv-JvfVHYxujoA&oh=00_AfMs9Z8EEGZyvrPZEM4X_B0rZEWMZBYTE4OsWavUIU8p8g&oe=685951CE', headline: 'Hành động hôm nay, Vững bước tương lai', subheadline: 'Cùng OU Green Campus kiến tạo một môi trường học tập xanh, sạch và bền vững.' },
    { image: 'https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/488657668_1078194451021972_2303715136951804171_n.jpg?stp=dst-jpg_p526x395_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=YbIDcZOfErkQ7kNvwENC59E&_nc_oc=AdlJCT9uPUPcG365AoYaqcjzS7BxFwJKoyYCX3OTocehCzHfb9kX25Zo8oj6LsYgj3c&_nc_zt=23&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=xRTAZMEDsOoyDNDwA1wdjA&oh=00_AfPuyZNPnj0rELL-DeRzzb0PBH7tlAq7Yn-p8_gC18yEtA&oe=685981B4', headline: 'Mỗi hành động nhỏ, Tạo nên thay đổi lớn', subheadline: 'Tham gia các dự án cộng đồng và lan tỏa tinh thần sống có trách nhiệm.' },
    { image: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?q=80&w=2940&auto=format&fit=crop', headline: 'Biến rác thải thành tài nguyên', subheadline: 'Khám phá sức mạnh của tái chế và kinh tế tuần hoàn cùng chúng tôi.' },
];

const metricsData = [
    { icon: <FaUsers />, value: '1000+', label: 'Tình nguyện viên' },
    { icon: <FaTree />, value: '1300+', label: 'Cây xanh đã trồng' },
    { icon: <FaHeart />, value: '20000+', label: 'Lượt theo dõi' },
    { icon: <FaHandshake />, value: '15+', label: 'Đối tác đồng hành' },
];

const featuredNews = [
    { id: 1, title: 'Khởi động chiến dịch "Chủ nhật Xanh" 2025', description: 'Cùng nhau làm sạch khuôn viên trường để xây dựng môi trường học tập trong lành.', image: 'https://scontent.fsgn8-3.fna.fbcdn.net/v/t39.30808-6/490825097_1087079796800104_5051326714632778878_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=tY9C03pZCpYQ7kNvwH5zQMZ&_nc_oc=AdmIjPd2N8Sg71M6aaqTT1cmK_dv77HK041YKNUVND4l_Rh97VAz6pLJN0DTbzjMuIQ&_nc_zt=23&_nc_ht=scontent.fsgn8-3.fna&_nc_gid=W5CeUibIR6FzhpDvfiOkXQ&oh=00_AfOFsxTkLBgxlozI1JTWzrRkD5_pbBvqMOlThQO_1ZLrHg&oe=685981D1' },
    { id: 2, title: 'Workshop Tái chế: Biến rác thải thành nghệ thuật', description: 'Buổi hướng dẫn sáng tạo đầy cảm hứng dành cho sinh viên OU.', image: 'https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/490749242_1087079400133477_1135801961133612242_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=QabpBC7Qy8IQ7kNvwEiZBu6&_nc_oc=AdlQFYX2CRGHYz2brfK5dLWr8ioCJJxDcldFtkZcJ_l7wXfNRPiAymPF-Nx0niG7hOg&_nc_zt=23&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=--t-SBrZ_NS7d2wtNL6hJQ&oh=00_AfPglvcxy5UI101oCLr7xdc90OpQ2urm4XPht742UIjmow&oe=685958BC' },
    { id: 3, title: 'OU Green Plus thăm và tặng quà tại làng trẻ em SOS', description: 'Một hoạt động cộng đồng ý nghĩa, mang lại niềm vui và sự sẻ chia.', image: 'https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/487860747_1077310937776990_6555439447005493608_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=RariHwXYmV0Q7kNvwHtah8H&_nc_oc=Adn_zMmXKVR0Q7zcx_9vdZIMCAc0fJ34aybcfAJRDh9q9qmW-YwtWupPFVgZerRUHog&_nc_zt=23&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=3qQqmoiwny6u1s4j-Y3rjQ&oh=00_AfNTaFGP6jd-zC8Gxymg4f4WRnW2yrAIqCF-U5GcvbXPXg&oe=685981D3' },
];

const upcomingEvent = {
    title: 'Cuộc thi "Đại sứ Môi trường OU" 2025',
    description: 'Tỏa sáng với những dự án môi trường sáng tạo và trở thành gương mặt đại diện cho thế hệ sinh viên hành động vì một tương lai xanh.',
    date: 'Vòng sơ loại: 01/08 - 30/08/2025'
};

const HomePage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentSlide(current => (current + 1) % slideData.length);
    }, []);

    const prevSlide = () => {
        setCurrentSlide(current => (current - 1 + slideData.length) % slideData.length);
    };

    const goToSlide = (slideIndex) => {
        setCurrentSlide(slideIndex);
    }

    useEffect(() => {
        const timer = setTimeout(nextSlide, 7000);
        return () => clearTimeout(timer);
    }, [currentSlide, nextSlide]);

    return (
        <div className={styles.homePage}>
            {/* 1. SLIDESHOW */}
            <section className={styles.hero}>
                {slideData.map((slide, index) => (
                    <div key={index} className={index === currentSlide ? `${styles.slide} ${styles.active}` : styles.slide} style={{ backgroundImage: `url(${slide.image})` }}>
                        <div className={styles.heroOverlay}>
                            <h1>{slide.headline}</h1>
                            <p>{slide.subheadline}</p>
                            <Link to="/du-an"><Button size="lg">Khám phá dự án</Button></Link>
                        </div>
                    </div>
                ))}
                <button onClick={prevSlide} className={`${styles.arrow} ${styles.prev}`}><FaChevronLeft /></button>
                <button onClick={nextSlide} className={`${styles.arrow} ${styles.next}`}><FaChevronRight /></button>
                <div className={styles.dots}>
                    {slideData.map((_, index) => (<div key={index} className={index === currentSlide ? `${styles.dot} ${styles.active}` : styles.dot} onClick={() => goToSlide(index)}></div>))}
                </div>
            </section>

            {/* 2. GIỚI THIỆU VỀ CHÚNG TÔI */}
            <section className={styles.aboutSection}>
                <div className={styles.container}>
                    <div className={styles.aboutGrid}>
                        <div className={styles.aboutImage}>
                            <img src={ougreenLogo} alt="Logo CLB OU Green Plus" />
                        </div>
                        <div className={styles.aboutContent}>
                            <h2 className={styles.sectionTitle}>CLB OU Green Plus</h2>
                            <p>Câu Lạc Bộ OU Green Plus, trực thuộc Phòng Công Tác Sinh Viên, được thành lập với sứ mệnh Xây Dựng Và Lan Tỏa Ý Thức Bảo Vệ Môi Trường trong cộng đồng sinh viên và xã hội.</p>
                            <p>Chúng tôi tin rằng mỗi hành động nhỏ đều có thể tạo ra tác động lớn, góp phần xây dựng một tương lai bền vững và xanh hơn cho tất cả mọi người.</p>
                            <Link to="/hanh-dong"><Button type="secondary">Tìm hiểu thêm</Button></Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. SỐ LIỆU ĐẠT ĐƯỢC */}
            <section className={styles.metricsSection}>
                <div className={styles.container}>
                    <div className={styles.metricsGrid}>
                        {metricsData.map((metric, index) => (
                            <div key={index} className={styles.metricItem}>
                                <div className={styles.metricIcon}>{metric.icon}</div>
                                <div className={styles.metricValue}>{metric.value}</div>
                                <div className={styles.metricLabel}>{metric.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. TIN TỨC NỔI BẬT */}
            <section className={styles.newsSection}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Tin tức & Câu chuyện</h2>
                    <div className={styles.newsGrid}>
                        {featuredNews.map(item => (
                            <Card key={item.id} title={item.title} description={item.description} image={item.image} link={`/tin-tuc/${item.id}`} />
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. SỰ KIỆN MỚI NHẤT */}
            <section className={styles.eventSection}>
                <div className={styles.container}>
                    <div className={styles.eventGrid}>
                        <div className={styles.eventContent}>
                            <span className={styles.preTitle}>Sự kiện tâm điểm</span>
                            <h2 className={styles.sectionTitle}>{upcomingEvent.title}</h2>
                            <p className={styles.eventDescription}>{upcomingEvent.description}</p>
                            <div className={styles.eventDetails}>
                                <span>🗓️</span> {upcomingEvent.date}
                            </div>
                            <Button>Khám phá cuộc thi</Button>
                        </div>
                        <div className={styles.eventImage}>
                            {/* Ảnh minh họa cho cuộc thi */}
                            {/* <img src="https://images.unsplash.com/photo-1593113646773-ae18c60a8434?q=80&w=2940&auto=format&fit=crop" alt="Sự kiện" /> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default HomePage;