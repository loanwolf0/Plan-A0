import React, { useEffect } from "react";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io";
import { Link } from "react-router-dom";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className="md:grid grid-cols-4 p-5 md:p-0 text-[#7A6960]">
      {/* About / Contact */}
      <div data-aos="fade-right">
        <h1 className="text-xl font-semibold mb-3">Digital Marketing Agency</h1>

        <p className="mb-3 text-sm">
          हम आपके business को online grow करने में मदद करते हैं — SEO, Ads और
          Social Media के साथ।
        </p>

        <div>
          <p className="font-medium">
            Phone:
            <span className="font-normal ml-1"> +91 9876543210</span>
          </p>

          <p className="font-medium">
            Email:
            <span className="font-normal ml-1"> contact@youragency.com</span>
          </p>
        </div>
      </div>

      {/* Useful Links */}
      <div data-aos="fade-right" data-aos-delay="300" className="mt-10 md:mt-0">
        <h1 className="font-medium text-lg mb-2">Quick Links</h1>

        <ul>
          <li className="mb-2 arrow">
            <a href="#" className="text-zinc-700">
              Home
            </a>
          </li>

          <li className="mb-2 arrow">
            <a href="#about" className="text-zinc-700">
              About
            </a>
          </li>

          <li className="mb-2 arrow">
            <a href="#services" className="text-zinc-700">
              Services
            </a>
          </li>

          <li className="mb-2 arrow">
            <a href="#contact" className="text-zinc-700">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Services */}
      <div data-aos="fade-right" data-aos-delay="500" className="mt-10 md:mt-0">
        <h1 className="font-medium text-lg mb-2">Our Services</h1>

        <ul>
          <li className="mb-2 arrow">
            <Link to="/seo-optimization" className="text-zinc-700">
              SEO Services
            </Link>
          </li>

          <li className="mb-2 arrow">
            <Link to="/social-media-marketing" className="text-zinc-700">
              Social Media Marketing
            </Link>
          </li>

          <li className="mb-2 arrow">
            <Link to="/paid-ads" className="text-zinc-700">
              Google & Meta Ads
            </Link>
          </li>

          <li className="mb-2 arrow">
            <Link to="/lead-generation" className="text-zinc-700">
              Lead Generation
            </Link>
          </li>
        </ul>
      </div>

      {/* Social */}
      <div data-aos="fade-right" data-aos-delay="700" className="mt-10 md:mt-0">
        <h1 className="font-medium text-lg mb-2">Follow Us</h1>

        <p className="text-sm">
          हमसे जुड़े रहें और digital marketing से जुड़ी updates पाते रहें।
        </p>

        <div className="flex justify-between pr-5 mt-5">
          <div className="border border-zinc-400 p-2 rounded-full hover:border-orange-600 hover:text-orange-600 cursor-pointer">
            <IoLogoTwitter size={"26px"} />
          </div>

          <div className="border border-zinc-400 p-2 rounded-full hover:border-orange-600 hover:text-orange-600 cursor-pointer">
            <IoLogoFacebook size={"26px"} />
          </div>

          <div className="border border-zinc-400 p-2 rounded-full hover:border-orange-600 hover:text-orange-600 cursor-pointer">
            <IoLogoInstagram size={"26px"} />
          </div>

          <div className="border border-zinc-400 p-2 rounded-full hover:border-orange-600 hover:text-orange-600 cursor-pointer">
            <IoLogoLinkedin size={"26px"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
