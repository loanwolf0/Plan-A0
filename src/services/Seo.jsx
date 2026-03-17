import React from "react";
import Template from "./Template";
import image from "../img/portfolio/app-1.jpg";
import NavBar from "../components/NavBar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Seo = () => {
  return (
    <div>
      <div className="secondary-font">
        <NavBar />
      </div>

      <Template
        title={"SEO Services (Google Ranking)"}
        desc={
          "हम आपकी वेबसाइट को Google के top पर लाने में मदद करते हैं ताकि आपको लगातार organic traffic और real customers मिलें। सही keywords, on-page SEO और content optimization के साथ हम आपके business की online visibility बढ़ाते हैं।"
        }
        image={image}
      />

      <Newsletter />
      <Footer />
    </div>
  );
};

export default Seo;
