import React from "react";
import "./css/carousel.css";

function Carousel() {
  return (
    <div>
      <div className="main w-full top-0">
          <form className="search-body flex justify-center items-center pt-32">
            <input
              type="search"
              placeholder="Search food"
              className="search-input h-10 "
            />
            <button className="search-btn-outer " type="submit">
              <img src="search.png" alt="" className="search-btn bg-white p-1 h-full" />
            </button>
          </form>
        <div className="text-container flex flex-col w-70 h-2.5 ml-44 pt-14">
          <div className="resturant-name">
            <h3 className="font-Pompiere text-white text-5xl uppercase font-semibold">
              My kitchen
            </h3>
          </div>
          <div className="title">
            <h1 className="text-orange-500 text-8xl uppercase font-poppins font-bold leading-none">
              food <br />
              like Home
            </h1>
          </div>
          <div className="para">
            <p className="text-white text-4xl font-Pompiere">
              Where Nature Meets The Gastronomic Desire Of Foodies
            </p>
          </div>
          <div className="icons mr-2">
            <i className="fa-brands fa-facebook icon" id="fb-icon"></i>
            <i className="fa-solid fa-map-location icon" id="map-icon"></i>
            <i className="fa-solid fa-phone icon" id="call-icon"></i>
            <i className="fa-brands fa-instagram icon" id="instagram-icon"></i>
          </div>
          <div class="button">
            <button class="btn">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
