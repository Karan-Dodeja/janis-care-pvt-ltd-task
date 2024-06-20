import React from "react";
import PreLoader from "../Images/Winter.gif";
import "./components.css";
import Header from "./Header";
import Footer from "./Footer";
import Img1 from "../Images/mask-1.jpg";
import Img2 from "../Images/mask-2.jpg";
import Img3 from "../Images/Iodine1.jpg";
import Img4 from "../Images/mask-3.jpg";
import Img5 from "../Images/mask-4.jpg";
const Home = () => {
  return (
    <>
      <div className="Home">
        <Header />
        <div className="home-banner">
          <div>
            <img src={Img1} alt="" className="banner-img-1" />
          </div>
          <div>
            <img src={Img2} alt="" className="banner-img-2" />
          </div>
          <div>
            <img src={Img3} alt="" className="banner-img-3" />
          </div>
          <div>
            <img src={Img4} alt="" className="banner-img-4" />
          </div>
          <div>
            <img src={Img5} alt="" className="banner-img-5" />
          </div>
        </div>
        <div className="home-counter">
          <div className="counter-1"></div>
          <div className="counter-2"></div>
          <div className="counter-3"></div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
