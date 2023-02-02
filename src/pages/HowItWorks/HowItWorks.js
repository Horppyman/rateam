import React from "react";
import hit from "../../assets/images/HowItWorks/HIT.png";

const HowItWorks = () => {
  return (
    <div className="container mx-auto">
      <div className="flex my-10 items-center px-5 lg:px-0 md:mx-5 mx-2">
        <h1 className="lg:text-4xl uppercase md:text-2xl text-sm sm:text-base flex-shrink-0 font-bold">
          How It Works
        </h1>
        <div className="md:h-6 h-3 w-full bg-gray-300 lg:mx-10 mx-5"></div>
      </div>
      <div className="px-5">
        <h1 className="lg:text-xl uppercase md:text-2xl sm:text-base ">
          How It Works
        </h1>
        <p className="font-medium text-lg text-gray-500 ">
          RateAm is one app with several functions. People use it to express and
          communicate their experiences, makeconnections and discover old and
          new friends who share similar or different experiences around
          networks,grow wealth and run their businesses.
        </p>
      </div>
      <section>
        <div className="my-10">
          <h1 className="lg:text-2xl uppercase md:text-xl font-semibold sm:text-base flex-shrink-0 text-center">
            How It Works
          </h1>
          <div className="px-3">
            <img src={hit} alt="" className="mx-auto my-10" />
            <div className="flex justify-between items-center max-w-3xl mx-auto text-sm md:text-xl font-semibold">
              <h1>Call ends</h1>
              <h1>Rate screen pops up</h1>
              <h1>Rate your call</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="my-10">
        <h1 className="lg:text-2xl uppercase md:text-xl font-semibold sm:text-base flex-shrink-0 text-center my-10">
          FEATURES
        </h1>
        <section>
          <div className="bg-[#fff8f6] mb-5 p-4">
            <h1 className="font-bold text-xl"> · CALL Rating</h1>
            <p className="max-w-lg font-semibold text-gray-500 text-sm mb-3 mt-1">
              For all outgoing and incoming calls above a minute · Pop up
              notification prompting User to rate call experience
            </p>
          </div>
          <div className="bg-[#fff8f6] mb-5 p-4">
            <h1 className="font-bold text-xl"> · My Story</h1>
            <p className="max-w-lg font-semibold text-gray-500 text-sm mb-3 mt-1">
              This trendy feature sparks networking that also drives User
              Generated Contents was designed to inspire users to upload
              pictures or videos of themselves expressing their network
              experience.
            </p>
          </div>
          <div className="bg-[#fff8f6] mb-5 p-4">
            <h1 className="font-bold text-xl"> · Mood board</h1>
            <p className="max-w-lg font-semibold text-gray-500 text-sm mb-3 mt-1">
              Mood boards are designed with the stories to help you provide
              extra expressions for your experiences in a fun way using smileys
              and shot captions.
            </p>
          </div>
          <div className="bg-[#fff8f6] mb-5 p-4">
            <h1 className="font-bold text-xl"> · My Story (Businesses)</h1>
            <p className="max-w-lg font-semibold text-gray-500 text-sm mb-3 mt-1">
              Discover trending conversations and get rewarded by joining the
              discussion
            </p>
          </div>
          <div className="bg-[#fff8f6] mb-5 p-4">
            <h1 className="font-bold text-xl"> ·Wallet</h1>
            <p className="max-w-lg font-semibold text-gray-500 text-sm mb-3 mt-1">
              All earnings from Call ratings and from other activities drops in
              wallet. Earnings could be in money value, data or point based.
            </p>
          </div>
          <div className="bg-[#fff8f6] mb-5 p-4">
            <h1 className="font-bold text-xl"> · Discover/Explore</h1>
            <p className="max-w-lg font-semibold text-gray-500 text-sm mb-3 mt-1">
              All earnings from Call ratings and from other activities drops in
              wallet. Earnings could be in money value, data or point based.
            </p>
          </div>
        </section>
      </section>
    </div>
  );
};

export default HowItWorks;
