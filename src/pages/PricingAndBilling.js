import React from "react";
import { Close } from "../assets/Icons/icons";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

const PricingAndBilling = () => {
  return (
    <div className="container mx-auto my-10 px-5">
      <h1 className="md:text-4xl text-2xl font-semibold my-16 text-gray-500">
        Pricing And Billing
      </h1>
      <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-8 ">
        <div className="bg-gray-200 shadow-2xl max-w-xl md:px-5 mb-10 mx-auto lg:mx-0 rounded-lg  py-4">
          <p className="text-2xl pt-10 text-center font-bold text-gray-800">
            Freemium
          </p>
          <div
            className={`h-1 w-20 mb-10 mt-3 duration-300 transition-all ease-in-out bg-gray-600 mx-auto rounded-xl`}
          ></div>
          <section className="flex flex-col justify-around">
            <div className="flex justify-between items-center mb-10 md:text-lg text-sm font-semibold">
              <h1 className="ml-10">No of Ratings per day</h1>
              <h1 className="w-36 border-l-2 border-black pl-5">5 Calls</h1>
            </div>
            <div className="flex justify-between items-center mb-10 md:text-lg text-sm font-semibold">
              <h1 className="ml-10">Badge</h1>
              <h1 className="w-36 border-l-2 border-black pl-5 text-red-500">
                <AiOutlineClose
                  size={25}
                  className="text-semibold"
                  color="red"
                />
              </h1>
            </div>
            <div className="flex justify-between items-center mb-10 md:text-lg text-sm font-semibold">
              <h1 className="ml-10">Chat room rate</h1>
              <h1 className="w-36 border-l-2 border-black pl-5">Fixed Price</h1>
            </div>
            <div className="flex justify-between items-center mb-10 md:text-lg text-sm font-semibold">
              <h1 className="ml-10">Call Rating Activision time</h1>
              <h1 className="w-36 border-l-2 border-black pl-5">{` 1+ minute`}</h1>
            </div>
            <div className="flex justify-between items-center mb-10 md:text-lg text-sm font-semibold">
              <h1 className="ml-10">Connection request</h1>
              <h1 className="w-36 border-l-2 border-black pl-5">3 per day</h1>
            </div>
            <div className="flex justify-between items-center mb-10 md:text-lg text-sm font-semibold">
              <h1 className="ml-10">Earnings per call</h1>
              <h1 className="w-36 border-l-2 border-black pl-5">5 points</h1>
            </div>
          </section>
          <div className="flex justify-center items-center  md:text-lg text-sm font-semibold">
            <button
              className="bg-gray-400 w-full mx-10 hover:bg-gray-700 px-8 py-5 mb-5 text-2xl  uppercase rounded font-bold transition duration-150"
              title="Purchase"
            >
              <h1 className="py-3"> Free</h1>
            </button>
          </div>
        </div>
        <div className="bg-[#ffedea] shadow-2xl max-w-xl md:px-5 mb-10 mx-auto lg:mx-0 rounded-lg  py-4">
          <p className="text-2xl pt-10 text-center font-bold text-gray-800">
            Premium
          </p>
          <div
            className={`h-1 w-20 mb-10 mt-3 duration-300 transition-all ease-in-out bg-gray-600 mx-auto rounded-xl`}
          ></div>
          <section className="flex flex-col justify-around">
            <div className="flex justify-between items-center mb-10 text-sm md:text-lg font-semibold">
              <h1 className="ml-10">No of Ratings per day</h1>
              <h1 className="w-36 border-l-2 border-black pl-5">Unlimited</h1>
            </div>
            <div className="flex justify-between items-center mb-10 text-sm md:text-lg font-semibold">
              <h1 className="ml-10">Badge</h1>
              <h1 className="w-36 border-l-2 border-black pl-5">
                <AiOutlineCheck
                  size={25}
                  className="text-semibold"
                  color="green"
                />
              </h1>
            </div>
            <div className="flex justify-between items-center mb-10 text-sm md:text-lg font-semibold">
              <h1 className="ml-10">Chat room rate</h1>
              <h1 className="w-36 border-l-2 border-black pl-5">
                Flexible Price
              </h1>
            </div>
            <div className="flex justify-between items-center mb-10 text-sm md:text-lg  font-semibold">
              <h1 className="ml-10">Call Rating Activision time</h1>
              <h1 className="w-36 border-l-2 border-black pl-5">{`< 1 minute`}</h1>
            </div>
            <div className="flex justify-between items-center mb-10 text-sm md:text-lg font-semibold">
              <h1 className="ml-10">Connection request</h1>
              <h1 className="w-36 border-l-2 border-black pl-5">Unlimited</h1>
            </div>
            <div className="flex justify-between items-center mb-10 text-sm md:text-lg font-semibold">
              <h1 className="ml-10">Earnings per call</h1>
              <h1 className="w-36 border-l-2 border-black pl-5">10 points</h1>
            </div>
          </section>
          <div className="flex justify-center items-center  text-sm md:text-lg font-semibold">
            <button
              className="bg-[#ff674d] w-full mx-10 hover:bg-orange-700 px-8 py-5 mb-5 text-2xl text-white uppercase rounded font-bold transition duration-150"
              title="Purchase"
            >
              <span>
                {" "}
                N5,000<span className="text-xs">yearly</span>
              </span>
              <p>
                <span className="text-xs">
                  ( N500 <span className="text-[9px]">monthly</span> )
                </span>
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingAndBilling;
