import React from "react";
import ProfileImg from "../../Images/venugpoal-profile.jpg";
import { FaFacebookSquare } from "react-icons/fa";

const SocialShareData = [
  {
    Icon: FaFacebookSquare,
    url: 'https://www.facebook.com/Sbilife.venu?mibextid=ZbWKwL',
  }
];

const Hero = () => {
  return (
    <section className="py-24 min-h-screen">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="text-center lg:text-left lg:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-500">Hello 👋 ,</h2>
          <h1 className="text-4xl mt-2 font-extrabold text-blue">
            I'm a Master Financial Planner.
          </h1>
          <p className="mt-3 text-2xl font-semibold text-gray-700">
            I guide clients to achieve their financial goals.
          </p>
          <p className="mt-3 text-xl font-semibold text-gray-700">
            Contact Details: 91060918454, venugopalgoudbongoni@gmail.com
          </p>

          {/* Social Share */}
          <div className="flex justify-center lg:justify-start space-x-4 mt-8">
            {SocialShareData.map((each, index) => (
              <a
                key={index}
                href={each.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-gray-600 text-[34px]"
              >
                <each.Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Profile Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0">
          <div className="relative w-80 h-80 lg:w-96 lg:h-96 bg-gray-400 border-4 border-gray-400 rounded-lg shadow-xl">
            <div className="absolute inset-0 bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${ProfileImg})` }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
