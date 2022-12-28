import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import first from "../../../assets/images/First.png";
import second from "../../../assets/images/second.png";
import third from "../../../assets/images/third.png";
import fourth from "../../../assets/images/fourth.png";
import Numbers from "./Numbers";

const Cards = () => {
  const { ref: First, inView: FirstIsVisible } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { ref: Second, inView: SecondIsVisible } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { ref: Third, inView: ThirdIsVisible } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { ref: Fourth, inView: FourthIsVisible } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <section className="container mx-auto">
      {/* first */}
      <div
        className={`md:flex items-center space-x-5 p-4  ${
          FirstIsVisible ? "opacity-100" : "opacity-0 translate-x-10"
        } transition-all ease-in duration-1000`}
        ref={First}
      >
        <div className="basis-1/2 flex justify-center relative">
          <img
            src={first}
            alt=""
            className="lg:absolute lg:-bottom-56  p-5 rounded-lg bg-white border shadow"
          />
        </div>
        <div className="basis-1/2 flex md:justify-start  mt-5 md:mt-0">
          <div className=" md:px-0">
            <h1 className="md:text-[2rem] lg:text-[4rem] text-[1.5rem] font-semibold md:pt-5">
              Rate Calls And <br /> Earn Points
            </h1>
            <p className="md:text-xl  md:my-5 my-3">Convert Points to Cash</p>
            <button
              type="button"
              class="text-white  capitalize px-5 bg-[#FF674D] hover:bg-orange-600 font-medium rounded md:text-xl  mr-2 mb-2 h-[55px]"
            >
              Download the app
            </button>
          </div>
        </div>
      </div>
      {/* second */}
      <div
        className={`md:flex items-center my-8  ${
          SecondIsVisible ? "opacity-100" : "opacity-0 translate-x-10"
        } transition-all ease-in duration-1000`}
        ref={Second}
      >
        <div className="basis-1/2 order-2 flex justify-center mt-5 px-3 md-px-0">
          <img src={second} alt="" />
        </div>
        <div className="basis-1/2 order-1 text-right flex  justify-center md:justify-end">
          <div className="px-3">
            <h1 className="md:text-[2rem] lg:text-[4rem]  text-[1.5rem] font-semibold">
              Interact with others <br />
              in the community
            </h1>
            <p className="md:text-xl my-5">
              Participate in Challenges and win cash
            </p>
            <button
              type="button"
              class="text-white capitalize px-5 bg-[#FF674D] hover:bg-orange-600 font-medium rounded md:text-xl  mr-2 mb-2 h-[55px]"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
      {/* third */}
      <div
        className={`md:flex items-center my-5 space-x-5  ${
          ThirdIsVisible ? "opacity-100" : "opacity-0 translate-x-10"
        } transition-all ease-in duration-1000`}
        ref={Third}
      >
        <div className="basis-1/2 flex justify-center">
          <img src={third} alt="" />
        </div>
        <div className="basis-1/2 flex md:justify-start justify-center mt-5 md:mt-0">
          <div className="px-5 md:px-0">
            <h1 className="md:text-[1.5rem] lg:text-[4rem]  text-[1.5rem] font-semibold">
              Discover Shops, Jobs, <br /> Event & New Places
            </h1>
            <p className="my-5 md:text-[20px] text-sm">
              Top-ranked businesses for telecom customers with thousands <br />{" "}
              of daily reviews on businesses all in the palm of your hand.
              <br />
              <br />
              Whether you are looking for a pizzeria that is open now or <br />{" "}
              a coffee shop nearby, RateAm is your local guide <br /> to finding
              just the place to eat,shop,drink,relax and play
            </p>
            <button
              type="button"
              class="text-white capitalize px-5 bg-[#FF674D] hover:bg-orange-600 font-medium rounded md:text-xl  mr-2 mb-2 h-[55px]"
            >
              Download the app
            </button>
          </div>
        </div>
      </div>
      {/* fourth */}
      <div
        className={`md:flex items-center my-5 space-x-5  ${
          FourthIsVisible ? "opacity-100" : "opacity-0 translate-x-10"
        } transition-all ease-in duration-1000`}
        ref={Fourth}
      >
        <div className="basis-1/2 order-2 flex justify-center">
          <img src={fourth} alt="" />
        </div>
        <div className="basis-1/2 order-1 flex  justify-center md:justify-end text-right">
          <div className="px-5 md:px-0">
            <h1 className="md:text-[2rem] lg:text-[4rem]  text-[1.5rem] font-semibold">
              Nationwide Network <br />
              Experience
            </h1>
            <p className="my-5 md:text-[20px] text-sm">
              Checkout the network strength for different locations <br />{" "}
              (states) within your country. Click on, any state to see <br />{" "}
              activity details (total number of calls, and average ratings etc)
            </p>
            <button
              type="button"
              class="text-white capitalize px-5 bg-[#FF674D] hover:bg-orange-600 font-medium rounded md:text-xl  mr-2 mb-2 h-[55px]"
            >
              subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
