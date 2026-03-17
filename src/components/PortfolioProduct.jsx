import React from "react";
import { FaLink } from "react-icons/fa6";
import "../index.css";

const PortfolioProduct = ({ image, title }) => {
  return (
    <div className="w-[26rem] overflow-hidden hover:cursor-pointer hover:text-orange-600 myLink">
      <img
        src={image}
        className="w-fit h-fit object-cover transition-all duration-300 hover:opacity-50 hover:scale-110"
        alt="Digital Marketing Results Example"
      />

      {/* Title */}
      <p className="text-center mt-2 text-sm font-medium">{title}</p>

      <div className="link">
        <FaLink size={"45px"} />
      </div>
    </div>
  );
};

export default PortfolioProduct;
