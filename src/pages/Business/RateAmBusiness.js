import React from "react";
import { ChevronLeft } from "../../assets/Icons/icons";
import hero from "../../assets/images/Business/hero.png";
import hero2 from "../../assets/images/Business/hero2.png";
import branch from "../../assets/images/Business/branch.png";
import marketing from "../../assets/images/Business/marketing.png";
import suitcase from "../../assets/images/Business/hero2.png";
import publiC from "../../assets/images/Business/public.png";
import voting from "../../assets/images/Business/voting.png";
import religion from "../../assets/images/Business/religion.png";

const RateAmBusiness = () => {
  return (
    <div
      className="container mx-auto px-5 lg:px-0
  "
    >
      <div className="">
        <p className="flex items-center text-gray-700 lg:text-xl px-5">
          <span className="cursor-pointer"> Business</span>
          <span className="flex items-center mx-2">
            <ChevronLeft />
          </span>{" "}
          <span className="text-sm md:text-lg lg:text-xl">
            RateAm for business
          </span>
        </p>
        <h1 className="lg:text-5xl text-2xl font-bold my-6 md:px-5 px-2">
          RateAm for business - Advertise{" "}
          <span className="underline text-orange-500"> here</span>
        </h1>
      </div>
      <div className=" my-10 rounded-xl flex justify-center mx-2">
        <img src={hero} alt="" className="w-full" />
      </div>
      <p className="font-medium text-lg md:text-xl mb-5  md:px-5 px-2">
        RateAM For Business (reinventing The Sme Digital Experience) In
        designing RateAm, we had the foresight to see new sales where none
        existed. We had an ambitious planto bring ecommerce to the phone callers
        community
      </p>
      <p className="font-medium text-lg md:text-xl mb-5  md:px-5  tracking-wider">
        Your next customer is just a call away!!!
      </p>
      <p className="font-medium text-lg md:text-xl mb-5  md:px-5 px-2">
        RateAm gives marketers a platform designed to get inbound leads via
        calls. That means that customers who visit your website are drawn by the
        content they view with each call they rate.
      </p>
      <div className=" my-10 rounded-xl flex justify-center mx-2">
        <img src={hero2} alt="" className="w-full" />
      </div>
      <section className="md:px-5">
        <h1 className="text-lg font-semibold my-3">OUT RATEAM ADVERTISING</h1>
        <p className="font-medium text-lg md:text-xl mb-5   tracking-wider text-gray-500">
          Businesses are sure to achieve their business goals quickly and easily
          when they promote their businesses the apps that delight people every
          day. No more cold calls!!!
        </p>
        <h1 className="text-lg font-semibold my-3">Why RateAm Ads?</h1>
        <p className="font-medium text-lg md:text-xl mb-5   tracking-wider text-gray-500">
          With RateAm ads, you can reach millions of unique smart phone users in
          Nigeria daily and much more people at the PAN African level. Imagine
          the imact your brand will gain from such advertising.
        </p>
        <h1 className="text-lg font-semibold my-3">Mission</h1>
        <p className="font-medium text-lg md:text-xl mb-5   tracking-wider text-gray-500">
          Our mission is to be the new leader in mobile advertising in Nigeria
          and beyond. We aim to create high visibility for brands among the
          affluent smartphone users with data connectivity
        </p>
      </section>
      <section>
        <h1 className="text-center font-bold text-2xl">USE CASE</h1>
        <section className="grid grid-flow-col-dense grid-cols-3 grid-rows-3">
          <section className="mb-10">
            <div className="">
              <img
                src={voting}
                alt=""
                className="bg-orange-400 w-20 p-2 mx-auto rounded
            "
              />
            </div>
            <div className="">
              <h1 className="text-lg font-bold text-gray-800 text-center mt-2">
                ELECTIONEERING CAMPAIGNS
              </h1>
              <h6 className="text-sm font-bold text-gray-800 mt-3">
                National/State Elections
              </h6>
              <p className="text-xs font-semi-bold text-gray-600 tracking-wide leading-5">
                Politicians can mobilize support groups and market their mandate
                through this app by running targeted Ads with customized
                payments like 100/200 etc per view/expression. Ideal build
                positive sentiments and inspire electorate.
              </p>
              <h6 className="text-sm font-bold text-gray-800 mt-3">
                Student Elections
              </h6>
              <p className="text-xs font-semi-bold text-gray-600 tracking-wide leading-5">
                Student will enjoy the social validation that comes with using
                this App to run targeted campaigns during school elections. The
                use of this among student is intended to become part of students
                lifestyle.
              </p>
            </div>
          </section>
          <section className="mb-10">
            <div className="">
              <img
                src={voting}
                alt=""
                className="bg-orange-400 w-20 p-2 mx-auto rounded
            "
              />
            </div>
            <div className="">
              <h1 className="text-lg font-bold text-gray-800 text-center mt-2">
                ELECTIONEERING CAMPAIGNS
              </h1>
              <h6 className="text-sm font-bold text-gray-800 mt-3">
                National/State Elections
              </h6>
              <p className="text-xs font-semi-bold text-gray-600 tracking-wide leading-5">
                Politicians can mobilize support groups and market their mandate
                through this app by running targeted Ads with customized
                payments like 100/200 etc per view/expression. Ideal build
                positive sentiments and inspire electorate.
              </p>
              <h6 className="text-sm font-bold text-gray-800 mt-3">
                Student Elections
              </h6>
              <p className="text-xs font-semi-bold text-gray-600 tracking-wide leading-5">
                Student will enjoy the social validation that comes with using
                this App to run targeted campaigns during school elections. The
                use of this among student is intended to become part of students
                lifestyle.
              </p>
            </div>
          </section>
        </section>
      </section>
    </div>
  );
};

export default RateAmBusiness;
