import React from "react";
import { Carousel, Container, Button } from "react-bootstrap";

const Hero = () => {
  const slides = [
    {
      image: "https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/503995178_1129710752537008_4340195453190670729_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=Q6AONteWIsMQ7kNvwH6TbgR&_nc_oc=AdniigCfTahARtHvg3YCgQQU2wzIjrX9PJPRIk0fCumgKjgLTbYDrRigO3gUJzKwQlI&_nc_zt=23&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=KDIPRD2rHIWlfe9_MF6Cjw&oh=00_AfVpIeTfcmKUBySsMduLSr_p4q_bN0jmW-UirCy0oRgyTg&oe=689F544C",
      title: "Chung tay bảo vệ môi trường",
      text: "Hãy hành động hôm nay để trái đất xanh hơn ngày mai.",
      buttonText: "Tham gia ngay",
    },
    {
      image: "https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/526886629_1170728188435264_5091119577094942021_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=SCHp2x9pxscQ7kNvwGTdWfn&_nc_oc=AdmIuzYJPe4VLov6TstiH8ykd0-puGMzq4JXMLEoNWAiudWt2hpAwUuz5YvLS3ldng0&_nc_zt=23&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=D-KpX-78_pymAOzTJZpw2w&oh=00_AfXmUve0Bua_JXkyXgou8gUr3NgagIU_J5tl0Fea7b9gHw&oe=689F5326",
      title: "Phân loại rác tại nguồn",
      text: "Giúp giảm ô nhiễm và tái chế hiệu quả.",
      buttonText: "Tìm hiểu thêm",
    },
    {
      image: "https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/518270235_1152894193551997_2916275621364815628_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=AZMXT0bFciUQ7kNvwFOZZKp&_nc_oc=Adn2BShk_6PNHnYzrFylKOoBgtDMhiU-Q6OXh9WER7BPTyHribUukqhbt6UV-KnHVek&_nc_zt=23&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=-CIrnUjU2MbEa7dfk0BHBQ&oh=00_AfVNDzSUvmxjY2P7y73AB885Se-oGbvYrGL0QFs8OC6REA&oe=689F621F",
      title: "Cộng đồng OU Green Plus",
      text: "Kết nối – Học hỏi – Hành động vì môi trường.",
      buttonText: "Khám phá",
    },
  ];

  return (
    <Carousel fade interval={4000}>
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <div
            style={{
              height: "90vh",
              backgroundImage: `linear-gradient(
                rgba(0,0,0,0.4),
                rgba(0,0,0,0.4)
              ), url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Container className="text-center text-white px-4">
              <h1
                className="fw-bold display-3 mb-3 animate__animated animate__fadeInDown"
                style={{
                  textShadow: "2px 2px 15px rgba(0,0,0,0.8)",
                }}
              >
                {slide.title}
              </h1>
              <p
                className="lead mb-4 animate__animated animate__fadeInUp"
                style={{
                  maxWidth: "700px",
                  margin: "0 auto",
                  textShadow: "1px 1px 5px rgba(0,0,0,0.7)",
                }}
              >
                {slide.text}
              </p>
              <Button
                variant="success"
                size="lg"
                className="px-5 py-3 fw-bold animate__animated animate__zoomIn"
                style={{
                  borderRadius: "50px",
                  fontSize: "1.25rem",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = "scale(1.05)";
                  e.target.style.boxShadow = "0 6px 20px rgba(0,0,0,0.4)";
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = "scale(1)";
                  e.target.style.boxShadow = "0 4px 15px rgba(0,0,0,0.3)";
                }}
              >
                {slide.buttonText} <i className="bi bi-arrow-right-circle"></i>
              </Button>
            </Container>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Hero;
