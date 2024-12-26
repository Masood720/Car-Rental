import React from "react";
import whiteCar from "../assets/images/car1.png";
import Car2 from "../assets/images/car2.png";
import Car3 from "../assets/images/car3.png";

const cars = [
  {
    name: "BMW UX",
    price: 100,
    image: whiteCar,
    aosDelay: "0",
  },

  {
    name: "KIA UX",
    price: 140,
    image: Car2,
    aosDelay: "500",
  },

  {
    name: "SUV",
    price: 100,
    image: Car3,
    aosDelay: "1000",
  },
];
const CarList = () => {
  return (
    <div className="pb-24 pt-12 bg-slate-100 dark:bg-dark dark:text-white">
      <div className="container">
        {/* Heading */}
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold font-serif mb-3"
        >
          Lorem, ipsum dolor.
        </h1>
        <p data-aos="fade-up" className="text-sm pb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vitae
          repellendus nobis.
        </p>

        {/* Car List Card */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 ">
            {cars.map((car) => {
              return (
                <div key={car.name}
                  data-aos="fade-up"
                  data-aos-delay={car.aosDelay}
                  className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group"
                >
                  <div className="w-full h-[120px]">
                    <img
                      className="w-full h-[120px] object-contain hover:sm:translate-x-8 group-hover:translate-x-6 duration-700"
                      src={car.image}
                      alt=""
                    />
                  </div>

                  <div className="space-y-2">
                    <h1 className="text-primary font-semibold">{car.name}</h1>
                    <div className="flex items-center justify-between text-xl font-semibold">
                      <p>${car.price}/Day</p>
                      <a href="#">Details</a>
                    </div>
                  </div>
                  <div className="text-xl font-semibold absolute top-0 left-3">
                    <p>12Km</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Car list Card End */}
        <div>
          <div data-aos="fade-up" className="grid place-items-center mt-8">
            <button className="button-outline">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarList;
