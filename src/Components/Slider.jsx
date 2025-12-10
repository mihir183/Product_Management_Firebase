import React from "react";
import { Slide } from "./data";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Slider = () => {
  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{ width: "100%", overflow: "hidden" }}
      >
        <div className="carousel-inner">
          {Slide.map((ele, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
            >
              <img
                src={ele}
                className="d-block w-100 object-fit-cover img-fluid slider-img"
                alt="slide"
              />
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Responsive CSS */}
      <style>{`
        .slider-img {
          width: 100%;
          height: 250px;     /* mobile */
        }

        @media (min-width: 576px) {  /* small devices */
          .slider-img {
            height: 350px;
          }
        }

        @media (min-width: 768px) {  /* tablets */
          .slider-img {
            height: 450px;
          }
        }

        @media (min-width: 992px) {  /* laptops */
          .slider-img {
            height: 550px;
          }
        }

        @media (min-width: 1200px) { /* large screens */
          .slider-img {
            height: 600px;
          }
        }
      `}</style>
    </>
  );
};

export default Slider;
