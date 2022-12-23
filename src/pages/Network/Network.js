import React from "react";
import { ScrollToTop } from "../../app/scroll";
import { ChevronLeft } from "../../assets/Icons/icons";
import RateNetwork from "./Components/RateNetwork";

const Network = () => {
  ScrollToTop();

  return (
    <>
      <div className="container min-h-[77vh] mx-auto md:px-16 my-10 px-4">
        <div className="shadow-lg p-5 border ">
          <h1 className="text-[2rem] font-semibold my-10 px-5">NETWORK</h1>
          <p className="text-lg px-5">
            Check the overall average rating of all the network providers in
            Nigeria. Every rating score is determined using user reviews from{" "}
            <br /> every state.
          </p>
          <div className="grid lg:grid-cols-3 grid-cols-1 my-10 px-5">
            {/* first */}
            <div className="lg:w-72">
              <label
                for="countries"
                className="block mb-2 text-sm font-medium text-gray-600"
              >
                <span className="font-bold text-gray-900 lg:text-lg text-sm">
                  Network Provider
                </span>{" "}
                <br />
                <span>Select the network provider</span>
              </label>
              <select
                id="countries"
                className="bg-gray-100 border border-gray-300  appearance-none text-lg text-red-600 rounded-lg outline-none block w-full p-2.5 "
              >
                <option selected>MTN NG</option>
                <option value="AIRTEL">AIRTEL</option>
                <option value="GLO">GLO</option>
                <option value="ETISALAT">ETISALAT</option>
              </select>
            </div>
            {/* second */}
            <div className="lg:w-72">
              <label
                for="countries"
                className="block mb-2 text-sm font-medium text-gray-600"
              >
                <span className="font-bold text-gray-900 lg:text-lg text-sm">
                  Time frame
                </span>{" "}
                <br />
                <span>Select the time frame</span>
              </label>
              <select
                id="countries"
                className="bg-gray-100 border border-gray-300  appearance-none text-lg text-red-600 rounded-lg outline-none block w-full p-2.5 "
              >
                <option selected>Last 24H</option>
                <option value="One Week">One Week</option>
              </select>
            </div>
            {/* third */}
            <div className="lg:w-72">
              <label
                for="location"
                className="block mb-2 text-sm font-medium text-gray-600"
              >
                <span className="font-bold text-gray-900 lg:text-lg text-sm">
                  Location
                </span>{" "}
                <br />
                <span>Select a location</span>
              </label>
              <select
                id="location"
                className="bg-gray-100 border border-gray-300  appearance-none text-lg text-red-600 rounded-lg outline-none block w-full p-2.5 "
              >
                <option selected>Abuja</option>
                <option value="Lagos">Lagos</option>
              </select>
            </div>
          </div>
          <section className="my-10">
            <RateNetwork />
          </section>
        </div>
      </div>
      <section className="h-64"></section>
    </>
  );
};

export default Network;
