import React from "react";
import { ChevronLeft } from "../../assets/Icons/icons";
import hero from "../../assets/images/Business/hero.png";
import hero2 from "../../assets/images/Business/hero2.png";
import branch from "../../assets/images/Business/branch.png";
import marketing from "../../assets/images/Business/marketing.png";
import suitcase from "../../assets/images/Business/suitcase.png";
import publiC from "../../assets/images/Business/public.png";
import voting from "../../assets/images/Business/voting.png";
import religion from "../../assets/images/Business/religion.png";
import Online from "../../assets/images/Business/Online.png";
import Manage from "../../assets/images/Business/Manage.png";
import Connected from "../../assets/images/Business/Connected.png";
import { ScrollToTop } from "../../app/scroll";

const RateAmBusiness = ({ setNewPage }) => {
  ScrollToTop();
  return (
    <div
      className="container mx-auto px-5 lg:px-0
  "
    >
      <div className="">
        <p className="flex items-center text-gray-700 lg:text-xl px-5">
          <span onClick={() => setNewPage("home")} className="cursor-pointer">
            {" "}
            Business
          </span>
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
        <h1 className="text-center my-10 font-bold text-2xl">USE CASE</h1>
        <section className="grid grid-cols-1 place-items-center md:place-items-start grid-flow-row-dense md:grid-cols-3 gap-5">
          {/* first */}
          <section className="mb-10 max-w-xs">
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
          {/* second */}
          <section className="mb-10 max-w-xs">
            <div className="">
              <img
                src={branch}
                alt=""
                className="bg-orange-400 w-20 p-2 mx-auto rounded
            "
              />
            </div>
            <div className="">
              <h1 className="text-lg font-bold text-gray-800 text-center mt-2">
                MSMES
              </h1>

              <p className="text-xs font-semi-bold text-gray-600 tracking-wide leading-5">
                Ideal advertising plug for SMEs withlimited budget for unlimited
                returnson Ad spend. Helps businessesdrive sales and awareness
                fortargeted niches based on budget.
              </p>
            </div>
          </section>
          {/* third */}
          <section className="mb-10 max-w-xs">
            <div className="">
              <img
                src={publiC}
                alt=""
                className="bg-orange-400 w-20 p-2 mx-auto rounded
            "
              />
            </div>
            <div className="">
              <h1 className="text-lg font-bold text-gray-800 text-center mt-2">
                BIG BRANDS
              </h1>

              <p className="text-xs font-semi-bold text-gray-600 tracking-wide leading-5">
                Brand endorsement and awareness for larger audiences. Brands
                that plan to run large scale campaigns for new or existing
                products can leverage on the reach and potency of this platform
                to create massive awareness and impact.
              </p>
            </div>
          </section>
          {/* fourth */}
          <section className="mb-10 max-w-xs">
            <div className="">
              <img
                src={suitcase}
                alt=""
                className="bg-orange-400 w-20 p-2 mx-auto rounded
            "
              />
            </div>
            <div className="">
              <h1 className="text-lg font-bold text-gray-800 text-center mt-2">
                JOBS
              </h1>

              <p className="text-xs font-semi-bold text-gray-600 tracking-wide leading-5">
                Organizations can leverage on thereach and audience of this app
                toput up job ads. Start hiring betterand smarter without limits.
                Yournext employee could just be callaway.
              </p>
            </div>
          </section>
          {/* fifth */}
          <section className="mb-10 max-w-xs">
            <div className="">
              <img
                src={religion}
                alt=""
                className="bg-orange-400 w-20 p-2 mx-auto rounded
            "
              />
            </div>
            <div className="">
              <h1 className="text-lg font-bold text-gray-800 text-center mt-2 uppercase">
                Religious
              </h1>

              <p className="text-xs font-semi-bold text-gray-600 tracking-wide leading-5">
                Religious organization can use thisAd medium to mobilize
                membersand new members for crusades,fellowships etc.
              </p>
            </div>
          </section>
          {/* sixth */}
          <section className="mb-10 max-w-xs">
            <div className="">
              <img
                src={marketing}
                alt=""
                className="bg-orange-400 w-20 p-2 mx-auto rounded
            "
              />
            </div>
            <div className="">
              <h1 className="text-lg font-bold text-gray-800 text-center mt-2">
                EVENTS PROMOTION
              </h1>

              <p className="text-xs font-semi-bold text-gray-600 tracking-wide leading-5">
                We make it makes it easy for you tocreate and promote your event
                byadvertising on callers that suitsyour niche, generate tickets
                salesand build up excitement
              </p>
              <p className="text-xs font-semi-bold text-gray-600 tracking-wide leading-5">
                · Create an event · Send an event · Reminders Broadcast to all
              </p>
            </div>
          </section>
        </section>
      </section>
      {/* last part */}
      <section>
        <h1 className=" my-10 font-bold text-2xl">BENEFITS TO BRAND</h1>
        <section>
          <div className=" flex space-x-5 my-5  mb-10">
            <div className="flex w-64 items-center justify-center">
              <img src={Connected} alt="" className="object-contain" />
            </div>
            <div className="">
              <h1 className="md:text-3xl font-bold my-4">
                REACH real callers not Bots
              </h1>
              <p className="md:font-medium text-xs md:text-base max-w-2xl">
                Unlike bot accounts on social media, RateAm will give businesses
                access to millions of daily callers cut across different
                demographics. Your next customer could be just a call away
              </p>
            </div>
          </div>
          <div className=" flex space-x-5 my-5  mb-10">
            <div className="flex w-64 items-center justify-center">
              <img src={Manage} alt="" className="object-contain" />
            </div>
            <div className="">
              <h1 className="md:text-3xl font-bold my-4">SME loans (ANPL)</h1>
              <p className="md:font-medium text-xs md:text-base max-w-2xl">
                Our platform offers advert loan services to SMEs that are
                registered and have healthyrating scores. Through our USSD
                service, they can access different bundle plans and will repay
                in their next recharge. Advertise Now, Pay Later.
              </p>
            </div>
          </div>
          <div className=" flex space-x-5 my-5  mb-10">
            <div className="flex w-64 items-center justify-center">
              <img src={Online} alt="" className="object-contain" />
            </div>
            <div className="">
              <h1 className="md:text-3xl font-bold my-4">4.5 Rating</h1>
              <p className="md:font-medium text-xs md:text-base max-w-2xl">
                20% Advertisement Discount For Brands With Good Rating Score
                (4.5) Businesses that have an average 4.5 ratings for every 100
                Raters milestone, will earn a 20% advertisement discount
                voucher. The idea here is to promote a great customer centric
                services across all registered or intending businesses
              </p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default RateAmBusiness;
