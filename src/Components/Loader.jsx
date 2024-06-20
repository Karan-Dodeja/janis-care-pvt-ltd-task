import React from "react";
import PreLoader from "../Images/Winter.gif";
import "./components.css";

const Loader = () => {
  return (
    <div className="container">
      <img src={PreLoader} alt="" className="loading" />
    </div>
  );
};

export default Loader;
