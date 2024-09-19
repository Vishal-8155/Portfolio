import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import heroImg from "../images/web-dev.svg";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Hero() {
  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      once: true,     // Only animate once
    });
  }, []);

  return (
    <>
      <div className="hero pt-16 min-h-screen" id="hero">
        <Navbar />
        
        {/* Main Content */}
        <div className="m-auto mx-4 mt-8 lg:mt-4 p-2 md:p-12 h-auto" data-aos="zoom-in">
          <div id="hero" className="flex flex-col lg:flex-row py-8 justify-between text-center lg:text-left">
            
            <div className="lg:w-1/2 flex flex-col justify-center" data-aos="zoom-in" data-aos-delay="200">
              <h1 className="mb-5 md:text-5xl text-3xl font-bold text-blue-900">
                Bespoke software solutions for your unique business needs
              </h1>
              <div className="text-xl font-semibold tracking-tight mb-5 text-gray-500">
                We are a team of highly motivated and skilled developers dedicated to delivering only the best software.
              </div>
              <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                <Link
                  to="/contact"
                  className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0"
                >
                  Learn more
                  <svg
                    className="w-4 h-4 ml-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>

            <div className="flex lg:justify-end w-full lg:w-1/2" data-aos="fade-up" data-aos-delay="700">
              <img
                alt="Bespoke software solutions"
                className="rounded-t float-right duration-1000 w-full"
                src={heroImg}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
