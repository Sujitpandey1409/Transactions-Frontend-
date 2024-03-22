import React from "react";
import Navbar from "../component/Navbar";
import HeroSection from "../component/HeroSection";
import Card from "../component/Card";
import src from "../Assets/transaction.jpeg";
import './Home.css'
const Home = () => {
  return (
    <div className="homeContainer">
      <Navbar />
      <HeroSection />
      <div className="cardsWrapper">
        <Card title={"Transfer"} icon={"+"} src={src} />
      </div>
    </div>
  );
};

export default Home;
