import React from "react";
import Template from "./Template";
import image from "../img/portfolio/app-2.jpg";
import NavBar from "../components/NavBar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const SocialMedia = () => {
  return (
    <div>
      <div className="secondary-font">
        <NavBar />
      </div>

      <Template
        title={"Social Media Marketing"}
        desc={
          "हम आपके business को Instagram और Facebook पर grow करने में मदद करते हैं। सही content strategy, reels और ads के जरिए हम आपकी audience बढ़ाते हैं और आपको ज्यादा engagement, leads और sales दिलाते हैं।"
        }
        image={image}
      />

      <Newsletter />
      <Footer />
    </div>
  );
};

export default SocialMedia;
