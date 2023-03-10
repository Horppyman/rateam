import mobile from "../../../assets/images/Mobile-Marketing.png";
import onlineAd from "../../../assets/images/Online-ads.png";
import savings from "../../../assets/images/Savings.png";
import Partnership from "./Partnership";

const Offers = ({ setNewPage }) => {
  return (
    <>
      <div className="">
        <h1 className="md:text-xl text-lg font-semibold bg-[#E7E7FF] rounded md:p-3 p-2">
          Offers
        </h1>
        {/* first card */}
        <div className=" lg:flex space-x-5 my-5 border-b-4 border-r-4 border-black mb-10">
          <div className="flex items-center justify-center">
            <img src={mobile} alt="" />
          </div>
          <div className="">
            <h1 className="text-3xl font-bold my-4">
              Advertise Now, Pay Later (ANPL)
            </h1>
            <p className="font-medium">
              We're happy to introduce the first ever Advertise Now and Pay
              Later package which
            </p>
            <ul className="list-decimal list-inside font-medium my-3">
              <li>Allows users to run their Ads with zero credits</li>
              <li>
                It enables advertisers to re-launch expired campaigns easily and
                pay on their next recharge
              </li>
            </ul>
            <button
              onClick={() => setNewPage("advert")}
              type="button"
              className="text-white bg-[#7776BC] text-lg px-3 mr-2 mb-2 py-1"
            >
              Learn More
            </button>
          </div>
        </div>
        {/* second card */}
        <div className=" lg:flex space-x-5  my-5  border-b-4 border-r-4 border-black mb-10">
          <div className="flex items-center justify-center">
            <img src={savings} alt="" />
          </div>
          <div className="">
            <h1 className="text-3xl font-bold my-4">
              RateAm Invest - InvestAm
            </h1>
            <p className="font-medium my-5">
              Commit early and conveniently to your financial health, download
              RateAm today and start saving by just phone calls.
            </p>

            <button
              onClick={() => setNewPage("rateam")}
              type="button"
              className="text-white bg-[#7776BC] text-lg px-3 mr-2 mb-2 py-1"
            >
              Learn More
            </button>
          </div>
        </div>
        {/* third card */}
        <div className=" lg:flex space-x-5 px-2 my-5  border-b-4 border-r-4 border-black mb-10">
          <div className="flex items-center justify-center">
            <img src={onlineAd} alt="" />
          </div>
          <div className="">
            <h1 className="text-3xl font-bold my-4">
              RateAm for Business - Advertise here
            </h1>
            <p className="font-medium my-3">
              Are you an SME_ Your next customer is just a call away, RateAm
              gives marketers a platform designed to <br /> get inbound leads
              via calls. That means customers who visit your website are drawn
              by the content they view with each call they rate
            </p>
            <button
              onClick={() => setNewPage("business")}
              type="button"
              className="text-white bg-[#7776BC] text-lg px-3 mr-2 mb-2 py-1"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
      <Partnership />
    </>
  );
};

export default Offers;
