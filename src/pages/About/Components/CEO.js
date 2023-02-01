import React from "react";
import first from "../../../assets/images/About/first.png";
import second from "../../../assets/images/About/second.png";
import third from "../../../assets/images/About/third.png";
import fourth from "../../../assets/images/About/fourth.png";

const CEO = () => {
  return (
    <div className="my-16">
      <h1 className="text-center text-4xl font-light">
        <span className="font-bold">From the CEO's desk</span>
      </h1>
      <div
        className={`h-1 w-32 mt-2 duration-300 transition-all ease-in-out bg-orange-400 mx-auto rounded-xl`}
      ></div>
      <p className="text-sm font-semibold text-center max-w-2xl mx-auto mt-5">
        “Our vision for is to democratize the telecom ecosystem by putting power
        in the hands of the consumer, create value added services along the
        telecom value chain that are world-class in terms of usability,
        simplicity and most importantly speaks lifestyle.”
        <p className="font-extrabold text-base mt-1">
          {" "}
          - NNAMDI CHIME, FOUNDER AND CEO
        </p>
      </p>
      <section className="container mx-auto">
        {/* first */}
        <div
          className={`md:flex items-center space-x-5 p-4  transition-all ease-in duration-1000`}
        >
          <div className="basis-1/3 flex relative">
            <img src={first} alt="" className=" p-5 rounded-lg bg-white" />
          </div>
          <div className="basis-2/3 flex md:justify-start  mt-5 md:mt-0">
            <div className=" md:px-0">
              <h1 className="md:text-[2rem] lg:text-[3rem] text-[1.5rem] font-semibold md:pt-5">
                Create an account
              </h1>
              <p className="font-extralight text-gray-600 text-lg tracking-wide leading-7 md:my-5 my-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                delectus natus consequatur odit dolorum quam! Officia quaerat
                minima harum commodi excepturi dolor vitae enim? Provident
                consectetur laboriosam deserunt aut qui!
              </p>
              <button
                type="button"
                class="text-white  px-8 bg-[#FF674D] hover:bg-orange-600 font-medium rounded md:text-xl  mr-2 mb-2 uppercase h-[55px]"
              >
                Get Starter
              </button>
            </div>
          </div>
        </div>
        {/* second */}
        <div
          className={`md:flex items-center my-8   transition-all ease-in duration-1000`}
        >
          <div className="basis-1/2 order-2 flex justify-center mt-5 px-3 md-px-0">
            <img src={second} alt="" />
          </div>
          <div className="basis-1/2 order-1 text-right flex  justify-center md:justify-end">
            <div className=" md:px-0">
              <h1 className="md:text-[2rem] lg:text-[3rem] text-[1.5rem] font-semibold md:pt-5">
                Rate your experence
              </h1>
              <p className="font-light text-lg tracking-wide leading-6 md:my-5 my-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                delectus natus consequatur odit dolorum quam! Officia quaerat
                minima harum commodi excepturi dolor vitae enim? Provident
                consectetur laboriosam deserunt aut qui!
              </p>
              <button
                type="button"
                class="text-white  px-8 bg-[#FF674D] hover:bg-orange-600 font-medium rounded md:text-xl  mr-2 mb-2 uppercase h-[55px]"
              >
                Get Starter
              </button>
            </div>
          </div>
        </div>
        {/* third */}
        <div
          className={`md:flex items-center my-5 space-x-5   transition-all ease-in duration-1000`}
        >
          <div className="basis-1/2 flex justify-center">
            <img src={third} alt="" />
          </div>
          <div className="basis-1/2 flex md:justify-start justify-center mt-5 md:mt-0">
            <div className=" md:px-0">
              <h1 className="md:text-[2rem] lg:text-[3rem] text-[1.5rem] font-semibold md:pt-5">
                Start getting paid
              </h1>
              <p className="font-light text-lg tracking-wide leading-6 md:my-5 my-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                delectus natus consequatur odit dolorum quam! Officia quaerat
                minima harum commodi excepturi dolor vitae enim? Provident
                consectetur laboriosam deserunt aut qui!
              </p>
              <button
                type="button"
                class="text-white  px-8 bg-[#FF674D] hover:bg-orange-600 font-medium rounded md:text-xl  mr-2 mb-2 uppercase h-[55px]"
              >
                Get Starter
              </button>
            </div>
          </div>
        </div>
        {/* fourth */}
        <div
          className={`md:flex items-center my-5 space-x-5 transition-all ease-in duration-1000`}
        >
          <div className="basis-1/3 order-2 flex justify-end">
            <img src={fourth} alt="" />
          </div>
          <div className="basis-2/3 order-1 flex  justify-center md:justify-end text-right">
            <div className=" md:px-0">
              <h1 className="md:text-[2rem] lg:text-[3rem] text-[1.5rem] font-semibold md:pt-5">
                Stay connected to peers
              </h1>
              <p className="font-light text-lg tracking-wide leading-6 md:my-5 my-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                delectus natus consequatur odit dolorum quam! Officia quaerat
                minima harum commodi excepturi dolor vitae enim? Provident
                consectetur laboriosam deserunt aut qui!
              </p>
              <button
                type="button"
                class="text-white  px-8 bg-[#FF674D] hover:bg-orange-600 font-medium rounded md:text-xl  mr-2 mb-2 uppercase h-[55px]"
              >
                Get Starter
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CEO;
