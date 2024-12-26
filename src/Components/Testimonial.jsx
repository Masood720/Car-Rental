import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsFillStarFill } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa6";

const testimonialData = [
  {
    name: "Masood",
    image: "https://picsum.photos/200",
    icon: <AiFillStar />,
    description: "Lorem ipsum dolor sit amet.",
    aosDelay: "0",
  },

  {
    name: "Perwez",
    image: "https://picsum.photos/201",
    icon: <AiFillStar />,
    description: "Lorem ipsum dolor sit amet.",
    aosDelay: "600",
  },

  {
    name: "Raquib",
    image: "https://picsum.photos/202",
    icon: <AiFillStar />,
    description: "Lorem ipsum dolor sit amet.",
    aosDelay: "1000",
  },
];

const Testimonial = () => {
  return (
    <div className="dark:bg-black dark:text-white py-14 sm:pb-24">
      <div className="container">
        {/* Header */}
        <div className="space-y-4 pb-12">
          <p
            data-aos="fade-up"
            className="text-3xl font-semibold text-center sm:text-4xl font-serif"
          >
            What Our Clients Say About Us
          </p>
          <p data-aos="fade-up" className="text-center sm:px-44">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
        {/* Card section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-black dark:text-white">
          {testimonialData.map((data) => {
            return (
              <div
              data-aos = "fade-up"
              data-aos-delay={data.aosDelay}
               key={data.name} className="dark:bg-[#333333] bg-slate-300 py-8 rounded-lg">
                <div className="grid place-items-center">
                    <img src={data.image} alt="" className="h-20 w-20 rounded-full" />
                </div>
                <div className="flex items-center justify-center mt-10 gap-2 text-2xl text-primary">
                    {data.icon}
                    {data.icon}
                    {data.icon}
                    {data.icon}
                    {data.icon}
                </div>
                <div className="grid place-items-center mt-6">
                    {data.description}
                </div>
                <div className="grid place-items-center text-lg mt-5">
                    <h1>{data.name}</h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
