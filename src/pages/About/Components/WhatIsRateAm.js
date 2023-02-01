import React from "react";
import about from "../../../assets/images/About/RateAm.png";

const WhatIsRateAm = () => {
  return (
    <div>
      <h1 className="text-center text-4xl font-light">
        What is <span className="font-bold">RateAm</span>
      </h1>
      <div
        className={`h-1 w-32 mt-2 duration-300 transition-all ease-in-out bg-orange-400 mx-auto rounded-xl`}
      ></div>
      <p className="text-sm font-semibold text-center max-w-xl mx-auto mt-5">
        RateAm is a Platform that enables you to rate calls, location and even
        businesses you have interacted with and earn money from rating
      </p>
      <section className="mb-10">
        <div className="bg-[#FF674D] text-white text-center rounded-t-2xl p-3 tracking-wider text-lg mt-10">
          About The Service
        </div>
        <div className="border-gray-800 p-5 rounded-b-2xl border-b-4 border-x-4">
          <p>RateAm is an idea whose time has come.</p>
          <p>
            Amoung the many Features of this product, rating your experience is
            crtainly the highlight. Having positioned as the next
          </p>
          <div className={`xl:flex  transition-all ease-in duration-1000`}>
            <div className=" order-2 ">
              <p>
                generation indicator for satisfaction, we provide the best
                anchor for your customerexperience management (CEM) exercises.
                Complement RateAm with other network monitoring tool from
                various points along thecustomer journey, and you have a
                comprehensive, actionable view of your customerexperience
                performance.
              </p>
              <ul className="list-disc list-inside font-medium my-3">
                Where we are heading (Midterm)
                <li> Expand service to cover internet calls</li>
                <li>Provide channels to capture other consumer pain-points</li>
              </ul>
              <p>
                We are constantly pushing the boundaries of what telecom
                experience as a service(TelX-As-AS) has to offer. We also
                foresee that there will be an entirely new category ofAPIs built
                on top of our products within a few years, and we want to be at
                the forefrontof the development
              </p>
            </div>
            <div className=" order-1 flex justify-center">
              <img
                src={about}
                alt=""
                className="object-contain xl:w-[45rem] shrink-0"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatIsRateAm;
