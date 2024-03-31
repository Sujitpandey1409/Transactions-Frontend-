import React, { useEffect } from "react";
import Navbar from "../component/Navbar";
import HeroSection from "../component/HeroSection";
import Card from "../component/Card";
import src from "../Assets/transaction.jpeg";
import './Home.css'
import { Link } from "react-router-dom";
const Home = () => {
  useEffect(()=>{
    const token = localStorage.getItem('accessToken')
    if(!token){window.location.replace('/')}
  },[])
  return (
    <div className="homeContainer">
      <Navbar />
      <HeroSection home={true} />
      <div className="cardsWrapper">
        <Card title={"Transfer"} icon={"+"} src={src} link={'/home'} />
      </div>
    </div>
  );
};

export default Home;
