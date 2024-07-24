import React from "react";

const Carousel = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://cdn.pixabay.com/photo/2023/06/27/15/16/rice-8092512_1280.jpg"
            className="d-block w-100"
            alt="First slide"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Veg Biriyani(Basmati)</h5>
            <p>North Indian Style Veg Biriyani</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://cdn.pixabay.com/photo/2022/11/18/05/40/biriyani-7599454_1280.jpg "
            className="d-block w-100"
            alt="Second slide"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Chettinad Chicken Biriyani</h5>
            <p>more spicy and delicious with chicken 65</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://cdn.pixabay.com/photo/2021/02/25/07/47/mandi-6048376_1280.jpg"
            className="d-block w-100"
            alt="Third slide"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Mandi combos</h5>
            <p>Mandi/Al faham/shawaya</p>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carousel;
