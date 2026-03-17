import React, { useEffect } from "react";
// aos
import AOS from "aos";
import "aos/dist/aos.css";
import Faquestions from "./Faquestions";

const FreqAskedQues = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div data-aos="fade-up" className="text-[#7A6960]">
      <h1 className="text-3xl font-semibold text-center">
        Digital Marketing FAQs
      </h1>

      <p className="text-gray-700 text-center mt-7 mb-10 text-lg">
        आपके मन में जो सवाल हैं, उनके सीधे और आसान जवाब यहाँ मिलेंगे।
      </p>

      {/* Accordian */}
      <div data-aos="fade-right">
        <Faquestions />
      </div>
    </div>
  );
};

export default FreqAskedQues;
