import React from "react";
import Skills from "./Skills";
import WebDev from "../../Images/venu-4.jpg";

const About = () => {
  return (
    <section id="About" className="text-gray-900 pb-20">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
          <img
            src={WebDev}
            className="rounded-lg w-full object-cover"
            alt="Venugopal Bongoni"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="text-xl font-bold mb-3 text-gray-800 uppercase">
            About Me
          </h2>

          <h3 className="text-3xl font-bold mb-3 text-gray-800">
            Master Financial Planner
            <br />
            based in Hyderabad, India 📍
          </h3>
          <p className="mt-5 text-xl text-gray-500">
            Hey, my name is Venugopal Bongoni, and I'm a Wealth Management
            Specialist. My passion is to assist clients in organizing and
            growing their finances to meet their goals.
          </p>
          <p className="mt-4 text-xl text-gray-500">
            MBA Graduate with 20 Years of Experience in the field of Financial
            Service.
          </p>

          <p className="mt-4 text-xl text-gray-500">
            Helping people to achieve their Financial Goal within specified
            time.
          </p>
          <p className="mt-4 text-xl text-gray-500">
            Guiding people how to Reach Short Term and Long Term Goals.
          </p>
          <p className="mt-4 text-xl text-gray-500">
            Understanding the Risk appetite of individuals, directing the right
            method on how to achieve Financial Freedom.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
