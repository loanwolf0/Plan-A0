import React, { useEffect } from "react";
import Card from "./Card";
import { HiOutlineChartPie } from "react-icons/hi2";

// aos
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="text-[#7A6960]">
      {/* Heading */}
      <h1 data-aos="fade-down" className="text-3xl font-semibold text-center">
        Digital Marketing Services
      </h1>

      <div className="flex justify-center items-center mt-2">
        <div className="bg-orange-600 h-1 w-16 rounded"></div>
      </div>

      {/* Subheading */}
      <p className="text-gray-700 text-center mt-7 mb-10 text-lg">
        हम आपके business के लिए ज्यादा leads, traffic और sales लेकर आते हैं।
      </p>

      {/* Cards */}
      <div
        className="flex flex-col lg:flex-row items-center gap-5"
        data-aos="fade-up"
      >
        {/* SEO */}
        <div>
          <Card
            img={<HiOutlineChartPie />}
            title={"SEO (Google Ranking)"}
            desc={
              "आपकी वेबसाइट को Google के top पर लाकर organic traffic बढ़ाते हैं।"
            }
          />
        </div>

        {/* Social Media */}
        <div>
          <Card
            img={<HiOutlineChartPie />}
            title={"Social Media Marketing"}
            desc={
              "Instagram और Facebook पर आपका brand grow करके audience बनाते हैं।"
            }
          />
        </div>

        {/* Ads */}
        <div>
          <Card
            img={<HiOutlineChartPie />}
            title={"Paid Ads (Google & Meta)"}
            desc={
              "High-converting ads चलाकर targeted leads और sales दिलाते हैं।"
            }
          />
        </div>

        {/* Lead Generation */}
        <div>
          <Card
            img={<HiOutlineChartPie />}
            title={"Lead Generation"}
            desc={
              "आपके business के लिए real customers generate करते हैं जो convert होते हैं।"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
