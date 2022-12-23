import { ScrollToTop } from "../../app/scroll";
import carousel from "../../assets/images/carousel.png";
import piggy from "../../assets/images/Piggy.png";
import { ChevronLeft } from "../../assets/Icons/icons";

const RateAm = ({ setNextPage, setRatePage }) => {
  ScrollToTop();
  return (
    <div
      className="container mx-auto px-5 lg:px-0
  "
    >
      <div className=" md:px-5 px-2">
        <p className="flex items-center text-gray-700 lg:text-xl">
          <span
            className="cursor-pointer"
            onClick={() => {
              setNextPage(false);
              setRatePage(false);
            }}
          >
            {" "}
            Business
          </span>
          <span className="flex items-center mx-2">
            <ChevronLeft />
          </span>{" "}
          RateAm Invest - InvestAm
        </p>
        <h1 className="lg:text-5xl text-2xl font-bold my-6">
          RateAm Invest - InvestAm
        </h1>
      </div>
      <div className=" my-10 rounded-xl flex justify-center  md:mx-5 mx-2 bg-[#ffd1ca]">
        <img src={piggy} alt="" className="" />
      </div>
      <p className="font-medium text-lg md:text-xl mb-5  md:px-5 px-2">
        Commit early and conveniently to your financial health, download RateAm
        today and start saving by just phone calls.
      </p>
      <p className="font-medium text-lg md:text-xl mb-5  md:px-5 px-2">
        <span className="font-bold"> • Mission</span> <br /> We are helping
        people get comfortable with the idea of investing. What we have
        discovered is that once people build a familiarity with investments,
        they build a habit to invest more.
      </p>
      <p className="font-medium text-lg md:text-xl  mb-5  md:px-5 px-2">
        <span className="font-bold"> • How it works</span>
        <br /> This service takes your call earnings and automatically helps you
        invest them in a diversified portfolio. This personalized solution
        simplifies investing and earns you far more than you would by leaving
        cash in a savings account.
      </p>
      <p className="font-medium text-lg md:text-xl mb-5  md:px-5 px-2">
        “The app allows users to earn money from each call they rate, remits it
        and invest these earnings by taking a small amounts from their everyday
        earnings and automatically investing it”
      </p>
      <p className="font-medium text-lg md:text-xl  mb-5  md:px-5 px-2">
        Users can commit to investing any amount starting from N1000 and have
        the option to set up per call, daily or one-time mandate for either
        their incoming or outgoing calls as per their choice. Once your
        contribution has reached a set milestone (N1000), the money will
        automatically move into the investment pool. Customers can access their
        savings at any time, during times of an emergency or fulfil a short- or
        longterm life goal at their convenience.
      </p>

      <p className="font-medium text-lg md:text-xl mb-5  md:px-5 px-2">
        Download{" "}
        <span className="underline text-purple-400 cursor-pointer">RateAm</span>{" "}
        mobile app now to get started
      </p>
      <section className="h-[30rem]"></section>
    </div>
  );
};

export default RateAm;
