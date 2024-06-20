import React from "react";
import PreLoader from "../Images/Winter.gif";
import "./components.css";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Header />
      <div className="Home">
        <div className="home-banner">
          <div className="banner-img-1">
            <img src="" alt="" />
          </div>
          <div className="banner-img-2">
            <img src="" alt="" />
          </div>
          <div className="banner-img-3">
            <img src="" alt="" />
          </div>
          <div className="banner-img-4">
            <img src="" alt="" />
          </div>
          <div className="banner-img-5">
            <img src="" alt="" />
          </div>
        </div>
        <div className="home-counter">
          <div className="counter-1"></div>
          <div className="counter-2"></div>
          <div className="counter-3"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
