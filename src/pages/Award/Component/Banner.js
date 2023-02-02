import React from "react";
import banner from "../../../assets/images/Award/award.png";
import logo from "../../../assets/images/Award/logo.png";
import { AiFillStar } from "react-icons/ai";

const Banner = () => {
  return (
    <div>
      <div>
        <img src={banner} alt="" className="mx-auto" />
        <div className="flex justify-between items-center bg-slate-100 max-w-3xl py-3 my-5 px-5 mx-auto">
          <div className="flex items-center">
            <h1 className="md:text-3xl text-xl font-semibold text-[#ff674d] mr-5">
              4th.
            </h1>
            <img src={logo} alt="" className="h-10" />
          </div>
          <div className="flex items-center">
            <AiFillStar />
            <span className="md:text-4xl sm:text-2xl text-lg font-semibold">
              3.0
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
