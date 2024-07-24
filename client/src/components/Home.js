import React from "react";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";

const Home = () => {
  return (
    <div className="container mt-5">
      <h1
        style={{
          color: "red",
          fontSize: "3em",
          textAlign: "center",
          textShadow: "2px 2px 4px #aaa",
          margin: "30px 0",
          fontFamily: "Arial, sans-serif",
        }}
      >
        Today's Specials...!!Biriyani Fest!!
      </h1>
      <Carousel />
      <br />
      <Link to="/foods" className="btn btn-primary mt-3">
        View more
      </Link>
      <br />
    </div>
  );
};

export default Home;
