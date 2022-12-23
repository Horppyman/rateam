import online from "../../../assets/images/Online.png";
import Customer from "../../../assets/images/Customer.png";
import about12 from "../../../assets/images/about12.png";

const WhatWeDo = () => {
  return (
    <section>
      <div className="flex  items-center px-5 lg:px-0 md:mx-5 mx-2">
        <h1 className="lg:text-5xl text-2xl flex-shrink-0 ">What We Do?</h1>
        <div className="h-4 w-full bg-gray-300 lg:mx-10 mx-5"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 my-10">
        {/* first */}
        <div className="col-span-1 flex justify-center my-3">
          <div className=" p-5 w-80 bg-gray-200 text-center rounded-lg">
            <h1 className="text-xl font-semibold">Users</h1>
            <div className="flex justify-center items-center mb-5">
              <img src={online} alt="" />
            </div>
            <p className="text-start leading-8 font-normal">
              We pay you to rate your calls and register your call experience
              complaints. We lodge these reports with your network providers and
              your regulators through our dashboard and we also provide you with
              your daily network score within your area. <br />
              <span className="text-purple-400 underline">Download App </span>
            </p>
          </div>
        </div>
        {/* second */}
        <div className="col-span-1 flex justify-center my-3">
          <div className=" p-5 w-80 bg-gray-200 text-center rounded-lg">
            <h1 className="text-xl font-semibold">Network Provider</h1>
            <div className="flex justify-center items-center mb-5">
              <img src={Customer} alt="" />
            </div>
            <p className="text-start leading-8 font-normal">
              For our Network partners, we provide you with the daily network
              score in different clusters across the country. Harness the
              sentiments of yourcustomers in realtime and provide the with the
              best experience. <br />
              <span className="text-purple-400 underline">Subscribe Now </span>
            </p>
          </div>
        </div>
        {/* third */}
        <div className="col-span-1 flex justify-center my-3">
          <div className=" p-5 w-80 bg-gray-200 text-center rounded-lg">
            <h1 className="text-xl font-semibold">Businesses</h1>
            <div className="flex justify-center items-center mb-5">
              <img src={about12} alt="" />
            </div>
            <p className="text-start leading-8 font-normal">
              Are you a small/big business, we can connect you to thousands and
              millions of daily callers to help you break boundaries, Use our
              call me back feature and drive your sales through the roof and
              Enjoy testimonials and feedback from all advert placement .<br />
              <span className="text-purple-400 underline">Signup here</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
