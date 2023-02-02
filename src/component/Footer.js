import React from "react";
import { Link } from "react-router-dom";
import { ArrowDown } from "../assets/Icons/icons";
import logoLight from "../assets/images/logoLight.png";

const Footer = () => {
  return (
    <footer className="p-4 sm:p-6 bg-black">
      <div className="md:flex mx-auto md:justify-evenly mt-5 mb-14 container">
        <div className="mb-6 md:mb-0 md:w-52">
          <a href="/" className="flex items-center">
            <img src={logoLight} className="mr-3 h-8" alt="FlowBite Logo" />
          </a>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Company
            </h2>
            <ul className="text-gray-200">
              <li className="">
                <Link to="/faq" className="hover:underline">
                  FAQ's
                </Link>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                  Our Investors
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Partner with us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              About us
            </h2>
            <ul className="text-gray-200">
              <li className="">
                <a href="/about" className="hover:underline ">
                  About Us
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                  Our Vision
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                  Our Mission
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Contact Us
            </h2>
            <ul className="text-gray-200 ">
              <li className="">
                <a href="/contact" className="hover:underline">
                  Customer support
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
          <div className="md:ml-5">
            <button
              type="button"
              class="text-white  border-orange-500 border focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center flex items-center "
            >
              <span className="mr-3">Personal</span>
              <ArrowDown />
            </button>
          </div>
        </div>
      </div>
      {/* <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 " /> */}
      <div className="sm:flex sm:items-center sm:justify-center my-6 lg:my-8">
        <span className="text-sm text-white sm:text-center">
          © Copyright 2022 - RateAm . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
