import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Close } from "../assets/Icons/icons";
import logo from "../assets/images/rate-am.png";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <nav className="bg-white px-7 py-1 shadow-lg sticky w-full z-20 top-0 left-0 border-b border-gray-200 ">
        <div className="container flex items-center justify-between mx-auto">
          <a href="/" className="flex items-center order-2 lg:order-1">
            <img src={logo} className="h-6 mr-3 sm:h-9" alt="" />
          </a>
          <div className="flex lg:order-2 order-1">
            <Link
              to="/contact"
              className="text-red-500 font-medium rounded-lg text-lg px-5 text-center mr-3 lg:mr-0 hidden lg:inline "
            >
              Download The App
            </Link>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden "
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div className="order-3 lg:hidden"></div>
          <div
            className={`items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-8 lg:mt-0  lg:font-medium lg:border-0 text-xl lg:bg-white  ">
              <li>
                <Link
                  to="/"
                  className="block py-2 pl-3 pr-4 lg:p-0 cursor-pointer"
                  aria-current="page"
                >
                  Personal
                </Link>
                <div
                  className={`h-1 ${
                    pathname === "/" ? "w-16" : "w-0"
                  } mt-2 duration-300 transition-all ease-in-out bg-orange-400 mx-auto rounded-xl`}
                ></div>
              </li>
              <li>
                <Link
                  to="/business"
                  className="block py-2 pl-3 pr-4  lg:p-0 cursor-pointer"
                >
                  Business
                </Link>
                <div
                  className={`h-1 ${
                    pathname === "/business" ? "w-16" : "w-0"
                  } mt-2 duration-300 transition-all ease-linear bg-orange-400 mx-auto rounded-xl`}
                ></div>
              </li>
              <li>
                <Link
                  to="/network"
                  className="block py-2 pl-3 pr-4  lg:p-0 cursor-pointer"
                >
                  Network
                </Link>
                <div
                  className={`h-1 ${
                    pathname === "/network" ? "w-16" : "w-0"
                  } mt-2 duration-300 transition-all ease-linear bg-orange-400 mx-auto rounded-xl`}
                ></div>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block py-2 pl-3 pr-4  lg:p-0 cursor-pointer"
                >
                  About Us
                </Link>
                <div
                  className={`h-1 ${
                    pathname === "/about" ? "w-16" : "w-0"
                  } mt-2 duration-300 transition-all ease-linear bg-orange-400 mx-auto rounded-xl`}
                ></div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        id="drawer-example"
        className={`fixed z-40 h-screen lg:hidden p-4 overflow-y-auto bg-white 
        ${
          isOpen ? "w-full" : "w-0 opacity-0"
        } duration-500 transition-all ease-in-out `}
        tabindex="-1"
        aria-labelledby="drawer-label"
      >
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          data-drawer-dismiss="drawer-example"
          aria-controls="drawer-example"
          className="text-gray-400 bg-transparent  hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center"
        >
          <Close />
          <span className="sr-only">Close menu</span>
        </button>
        <div className=" h-full flex justify-center items-center">
          <ul className="flex flex-col p-4 mt-4 grow text-4xl font-normal text-center mb-10">
            <li className=" mb-5">
              <Link
                to="/"
                className="block py-2 pl-3 pr-4 lg:p-0 "
                aria-current="page"
              >
                Personal
              </Link>
              <div
                className={`h-1 ${
                  pathname === "/" ? "w-16" : "w-0"
                } mt-2 duration-300 transition-all ease-linear bg-orange-400 mx-auto rounded-xl`}
              ></div>
            </li>
            <li className="mb-5 ">
              <Link to="/business" className="block py-2 pl-3 pr-4  lg:p-0 ">
                Business
              </Link>
              <div
                className={`h-1 ${
                  pathname === "/business" ? "w-16" : "w-0"
                } mt-2 duration-300 transition-all ease-linear bg-orange-400 mx-auto rounded-xl`}
              ></div>
            </li>
            <li className=" mb-5 ">
              <Link to="/network" className="block py-2 pl-3 pr-4  lg:p-0 ">
                Network
              </Link>
              <div
                className={`h-1 ${
                  pathname === "/network" ? "w-16" : "w-0"
                } mt-2 duration-300 transition-all ease-linear bg-orange-400 mx-auto rounded-xl`}
              ></div>
            </li>
            <li className=" mb-5 ">
              <Link to="/about" className="block py-2 pl-3 pr-4 ">
                About Us
              </Link>
              <div
                className={`h-1 ${
                  pathname === "/about" ? "w-16" : "w-0"
                } mt-2 duration-300 transition-all ease-linear bg-orange-400 mx-auto rounded-xl`}
              ></div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;
