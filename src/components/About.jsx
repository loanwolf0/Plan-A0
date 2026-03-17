import React, { useEffect } from "react";
import CtaButton from "./CtaButton";
import img from "../img/about-img.svg";
import { BsPeople } from "react-icons/bs";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className="relative lg:mx-32">
      {/* Section Title */}
      <h1
        data-aos="fade-down"
        className="text-3xl font-semibold text-center text-[#7A6960]"
      >
        About Our Digital Marketing Agency
      </h1>

      <div className="flex justify-center items-center mt-2 mb-10">
        <div className="bg-orange-600 h-1 w-16 rounded"></div>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:gap-10 secondary-font">
        {/* Image */}
        <div
          data-aos="fade-up"
          className="lg:w-1/2 w-full md:w-3/4 py-16 px-10 md:px-0"
        >
          <img
            className="w-full"
            src={img}
            alt="Digital Marketing Agency Team Working"
          />
        </div>

        {/* Content */}
        <div className="lg:w-1/2 w-full md:w-3/4 px-10 md:p-0">
          <div data-aos="fade-left">
            <h1 className="text-[#7A6960] md:text-3xl font-semibold">
              Leading Digital Marketing Agency in India
            </h1>

            <p className="text-lg mt-5 text-gray-600 primary-font">
              Want more leads and sales? We help you get real customers through
              digital marketing.
            </p>
          </div>

          {/* Feature 1 */}
          <div
            data-aos="zoom-in"
            className="flex flex-col lg:flex-row justify-center items-center gap-5 mt-5"
          >
            <div className="bg-orange-600 w-fit p-2 md:p-5 rounded text-white">
              <BsPeople size={"28px"} />
            </div>

            <div className="w-full">
              <h2 className="text-[#7A6960] text-xl font-medium">
                Result-Driven SEO & Marketing Strategies
              </h2>

              <p className="text-base text-gray-600 primary-font lg:mt-1 mt-2">
                हम आपके business को Google पर rank कराते हैं और सही audience तक
                पहुँचाते हैं।
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div
            data-aos="zoom-in"
            className="flex flex-col lg:flex-row justify-center items-center gap-5 mt-5"
          >
            <div className="bg-orange-600 w-fit p-2 md:p-5 rounded text-white">
              <BsPeople size={"28px"} />
            </div>

            <div className="w-full">
              <h2 className="text-[#7A6960] text-xl font-medium">
                Grow Your Business with High-Converting Leads
              </h2>

              <p className="text-base text-gray-600 primary-font lg:mt-1 mt-2">
                हमारी marketing strategies से आपको targeted leads मिलती हैं जो
                sales में convert होती हैं।
              </p>
            </div>
          </div>

          {/* Main Paragraph */}
          <p
            data-aos="zoom-in"
            className="text-lg mt-5 text-gray-600 primary-font"
          >
            We work with businesses to grow their online presence using SEO,
            ads, and social media — focusing only on what brings results.
          </p>

          {/* CTA */}
          <div className="flex flex-col justify-center sm:flex-row items-center mb-12 lg:mb-0 lg:flex-row gap-10 mt-10">
            <a href="/Marketing-Website/#contact">
              <CtaButton name={"Get Free Consultation"} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
