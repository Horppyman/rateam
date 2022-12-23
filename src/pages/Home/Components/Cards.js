import { useState, useEffect } from "react";

import first from "../../../assets/images/First.png";
import second from "../../../assets/images/second.png";
import third from "../../../assets/images/third.png";
import fourth from "../../../assets/images/fourth.png";
import Numbers from "./Numbers";

const Cards = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 540) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }, [window.innerWidth]);
  return (
    <section className="container mx-auto">
      {/* first */}
      <div className="lg:flex items-center p-4">
        <div className="basis-1/2 flex justify-center relative">
          <img
            src={first}
            alt=""
            className="lg:absolute lg:-bottom-56  p-5 rounded-lg bg-white border shadow"
          />
        </div>
        <div className="basis-1/2 flex lg:justify-start justify-center mt-5 lg:mt-0">
          <div className="px-10 lg:px-0">
            <h1 className="lg:text-[4rem] text-[40px] font-semibold md:pt-5">
              Rate Calls And <br /> Earn Points
            </h1>
            <p className="text-xl my-5">Convert Points to Cash</p>
            <button
              type="button"
              class="text-white capitalize px-5 bg-[#FF674D] hover:bg-orange-600 font-medium rounded text-xl  mr-2 mb-2 h-[55px]"
            >
              Download the app
            </button>
          </div>
        </div>
      </div>
      {/* second */}
      <div className="lg:flex items-center my-8">
        <div className="basis-1/2 order-2 flex justify-center mt-5 px-3 md-px-0">
          <img src={second} alt="" />
        </div>
        <div className="basis-1/2 order-1 text-right flex  justify-center lg:justify-end">
          <div className="px-3">
            <h1 className="lg:text-[4rem] text-[40px] font-semibold">
              Interact with others <br />
              in the community
            </h1>
            <p className="text-xl my-5">
              Participate in Challenges and win cash
            </p>
            <button
              type="button"
              class="text-white capitalize px-5 bg-[#FF674D] hover:bg-orange-600 font-medium rounded text-xl  mr-2 mb-2 h-[55px]"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
      {/* third */}
      <div className="lg:flex items-center ">
        <div className="basis-1/2 flex justify-center">
          <img src={third} alt="" />
        </div>
        <div className="basis-1/2 flex lg:justify-start justify-center mt-5 lg:mt-0">
          <div className="px-5 lg:px-0">
            <h1 className="lg:text-[4rem] text-[35px] font-semibold">
              Discover Shops, Jobs, <br /> Event & New Places
            </h1>
            <p className="my-5">
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
              class="text-white capitalize px-5 bg-[#FF674D] hover:bg-orange-600 font-medium rounded text-xl  mr-2 mb-2 h-[55px]"
            >
              Download the app
            </button>
          </div>
        </div>
      </div>
      {/* fourth */}
      <div className="lg:flex items-center ">
        <div className="basis-1/2 order-2 flex justify-center">
          <img src={fourth} alt="" />
        </div>
        <div className="basis-1/2 order-1 flex  justify-center lg:justify-end text-right">
          <div className="px-5 lg:px-0">
            <h1 className="lg:text-[4rem] text-[40px] font-semibold">
              Nationwide Network <br />
              Experience
            </h1>
            <p className="my-5">
              Checkout the network strength for different locations <br />{" "}
              (states) within your country. Click on, any state to see <br />{" "}
              activity details (total number of calls, and average ratings etc)
            </p>
            <button
              type="button"
              class="text-white capitalize px-5 bg-[#FF674D] hover:bg-orange-600 font-medium rounded text-xl  mr-2 mb-2 h-[55px]"
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
