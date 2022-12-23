import React, { useState } from "react";
import {
  Facebook,
  Link,
  Reddit,
  Refresh,
  Share,
  Star,
  Twitter,
  Whatsapp,
} from "../../../assets/Icons/icons";
import smile from "../../../assets/images/smile.png";
import sad from "../../../assets/images/sad.png";

const RateNetwork = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="text-center mt-[140px]">
        <section className="flex justify-center lg:justify-between">
          <div className="hidden lg:inline-flex"></div>
          <div className="">
            <h1 className="uppercase font-semibold">
              Abuja <span> • </span> MTN NG
            </h1>
            <h1 className=" font-bold text-lg">Average Network Score</h1>
            <div className="h-1 w-28 mt-4 duration-300 transition-all ease-linear bg-black mx-auto rounded-xl"></div>
          </div>
          <div className="w-[100px] hidden lg:inline-flex">
            <div className="md:pr-10 flex space-x-5">
              <div
                className="cursor-pointer"
                onClick={() => setShowModal(!showModal)}
              >
                <Share />
              </div>
              <Refresh />
            </div>
          </div>
        </section>
        <h1 className="flex lg:items-baseline items-center justify-center">
          <Star />
          <span className="lg:text-[17rem] md:text-[10rem] text-[5rem] font-bold">
            {" "}
            3.5
          </span>
        </h1>
        <h1 className="text-sm text-gray-400">4,217 Rating - last 24hrs</h1>
        <div className="h-[2px] w-16 mt-4 duration-300 transition-all ease-linear bg-gray-600 mx-auto rounded-xl"></div>
        <section className="flex justify-around my-10 md:w-[600px] items-center mx-auto">
          <div className="">
            <img src={smile} alt="" />
          </div>
          <div class=" h-6 bg-gray-200 w-72">
            <div
              class="h-6 bg-orange-600 text-sm px-2 text-white text-start align-baseline"
              style={{ width: "68%" }}
            >
              Happy 68%
            </div>
          </div>
          <div className="">
            <img src={sad} alt="" />
          </div>
        </section>
        <h1 className="text-gray-400 text-center text-xl">
          Time: Africa/Nigeria (GMT) Dec 17 2022 17:30:00
        </h1>
      </div>
      <div
        id="defaultModal"
        tabIndex="-1"
        aria-hidden="true"
        data-modal-show="true"
        className={`${
          !showModal ? "hidden" : ""
        } bg-slate-200 bg-opacity-90 flex justify-center items-center transition-all ease-in-out top-0 right-0 bottom-0 left-0 z-50 h-screen fixed`}
      >
        <div
          className={`relative p-4 w-full max-w-xl  flex justify-center items-center h-fit md:h-auto transition-all ease-in-out ${
            !showModal ? "opacity-0 " : "opacity-100 "
          }`}
        >
          <div className="relative grow bg-white rounded-lg shadow">
            <div className="flex pt-3 px-3 space-x-2 items-center rounded-t">
              <button
                onClick={() => setShowModal(false)}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-full text-sm p-1.5 inline-flex items-center"
                data-modal-toggle="defaultModal"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="px-5">
              <h1 className="text-xl font-semibold">Share This Score</h1>
              <p className="text-gray-600 my-2">
                Share the average score of your network with your friend.
              </p>
              <div className="flex justify-around items-center my-5">
                <div className="flex flex-col items-center justify-center">
                  <span className="flex justify-center items-center bg-gray-200 rounded-full h-14 w-14">
                    <Whatsapp />
                  </span>
                  <h1 className="text-gray-400 text-center">Whatsapp</h1>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <span className="flex justify-center items-center bg-gray-200 rounded-full h-14 w-14">
                    <Facebook />
                  </span>
                  <h1 className="text-gray-400 text-center">Facebook</h1>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <span className="flex justify-center items-center bg-gray-200 rounded-full h-14 w-14">
                    <Reddit />
                  </span>
                  <h1 className="text-gray-400 text-center">Reddit</h1>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <span className="flex justify-center items-center bg-gray-200 rounded-full h-14 w-14">
                    <Twitter />
                  </span>
                  <h1 className="text-gray-400 text-center">Twitter</h1>
                </div>
              </div>
              <form className="mb-5">
                <label
                  for="default-search"
                  class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
                >
                  Search
                </label>
                <div class="relative">
                  <input
                    type="search"
                    id="default-search"
                    className="block p-4 pl-10 w-full  text-gray-900 bg-gray-50 rounded-lg border border-gray-300 outline-none  "
                    placeholder="https://examples.com/social-share-modal"
                    required
                  />
                  <button
                    type="submit"
                    className=" absolute right-2.5 bottom-2.5 text-lg font-medium rounded-lg  px-4 py-2 "
                  >
                    <Link />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RateNetwork;
