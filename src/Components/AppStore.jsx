import React from "react";
import banner from "../assets/images/yellow.jpeg";
import googleplay from "../assets/images/googleplay.png";
import appStore from "../assets/images/appstore.png";

const bannerImage = {
  backgroundImage: `url("${banner}")`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100%",
  width: "100%",
};

const AppStore = () => {
  return (
    <div className="container bg-slate-100 dark:bg-dark dark:text-white py-10">
      <div
        className="text-black py-10 sm:min-h-[400px] sm:grid sm:place-items-center rounded-xl"
        style={bannerImage}
      >
        <div>
          <div className="space-y-6 max-w-xl mx-auto">
            <h1
              data-aos="fade-up"
              className="text-2xl text-center sm:text-4xl font-semibold font-serif"
            >
              Get Started With Our App
            </h1>
            <p data-aos="fade-up" className="text-center sm:px-20">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Dignissimos aitlse.
            </p>
            <div
              data-aos="fade-up"
              data-aos-delay="500"
              className="flex justify-center items-center flex-wrap gap-4"
            >
              <a href="#">
                <img
                  src={googleplay}
                  alt=""
                  className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                />
              </a>

              <a href="#">
                <img
                  src={appStore}
                  alt=""
                  className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppStore;
