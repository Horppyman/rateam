import React from "react";
import { Envelope } from "../../../assets/Icons/icons";

const Newsletter = () => {
  return (
    <div className="container mx-auto my-16 px-5 md:px-0">
      <div className="flex flex-col justify-center items-center">
        <Envelope />
        <p className="text-xl my-5">Subscribe to our newsletter</p>
      </div>

      <form action="" className="md:flex justify-center items-center">
        <div className="flex flex-col md:flex-row">
          <input
            type="text"
            className=" h-[55px] outline-none p-3 md:w-[500px] border  border-gray-300"
            placeholder="Email"
          />
          <button
            type="button"
            class="text-white mt-5 md:mt-0 w-full bg-[#FF674D] hover:bg-orange-600 font-medium rounded md:text-xl md:w-44 mr-2 mb-2 h-[55px]"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default Newsletter;
