import React from "react";
import Header from "../pages/header/Header";
import HeaderBottom from "../component/@headerbottom/HeaderBottom";
import MainSection from "../pages/main-section/MainSection";

const Home = () => {
  return (
    <div>
      <Header />
      <HeaderBottom />
      <MainSection />
    </div>
  );
};

export default Home;
