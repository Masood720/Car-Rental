import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const skillData = [
  {
    name: "Best Price",
    icon: (
      <FaCameraRetro className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    aosDelay: "0",
  },

  {
    name: "Fast and Safe",
    icon: (
      <GiNotebook className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    aosDelay: "500",
  },

  {
    name: "Experiece Drivers",
    icon: (
      <SlNote className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    aosDelay: "1000",
  },
];

const Services = () => {
  return (
    <div className="py-14 dark:bg-black dark:text-white sm:min-h-[600px] sm:grid sm:place-items-center">
      <div className="container">
        <div className="pb-12">
          <h1 className="text-3xl font-semibold text-center font-serif sm:text-4xl">
            Why Choose Us
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 text-center sm:text-4xl md:grid-cols-3 gap-4">
          {skillData.map((skill) => {
            return (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card text-center group place-items-center space-y-3 sm:space-y-6 p-2 sm:py-12 bg-dark hover:bg-primary duration-300 text-white hover:text-black rounded-lg"
              >
                <div className="grid place-items-center">{skill.icon}</div>
                <h1 className="text-lg font-semibold">{skill.name}</h1>
                <p className="text-base">{skill.description}</p>
                <a
                  href={skill.link}
                  className="inline-block text-lg font-semibold py-3 text-primary group-hover:text-black duration-300"
                >
                  Learn More
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
