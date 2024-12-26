import React from "react";
import car1 from "../assets/images/car1.png";

const About = () => {
  return (
    <div className="dark:bg-dark dark:text-white bg-slate-100 duration-300 sm:min-h-[600px] sm:grid sm:place-items-center">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div data-aos="slide-right" data-aos-duration="1500">
            <img
              src={car1}
              alt=""
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]"
            />
          </div>

          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-4xl font-bold font-serif"
              >
                About us
              </h1>

              <p data-aos="fade-up" data-aos-duration="600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                tempore atque ut doloremque est.
              </p>

              <p data-aos="fade-up" data-aos-duration="1000">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
              <button
                data-aos="fade-up"
                data-aos-duration="1500"
                className="button-outline"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
