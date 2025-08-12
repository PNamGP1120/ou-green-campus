import React from "react";
import Hero from "../components/Hero";
import IntroSection from "../components/IntroSection";
import FeaturedNews from "../components/FeaturedNews";
import FeaturedLibrary from "../components/FeaturedLibrary";
import ActiveProjects from "../components/ActiveProjects";
import AiWasteClassifier from "../components/AiWasteClassifier";
import CallToActionSection from "../components/CallToActionSection";
import PartnersSection from "../components/PartnersSection";

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <IntroSection />
      <FeaturedNews />
      <FeaturedLibrary />
      <ActiveProjects />
      <AiWasteClassifier />
      <CallToActionSection />
      <PartnersSection />
    </div>
  );
};

export default Home;
