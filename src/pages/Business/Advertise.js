import { ScrollToTop } from "../../app/scroll";
import carousel from "../../assets/images/carousel.png";
import aboutUs from "../../assets/images/aboutUs.png";
import { ChevronLeft } from "../../assets/Icons/icons";

const Advertise = ({ setNextPage, setRatePage }) => {
  ScrollToTop();
  return (
    <div
      className="container mx-auto px-5 lg:px-0
    "
    >
      <div className="">
        <p className="flex items-center text-gray-700 lg:text-xl px-5">
          <span
            onClick={() => {
              setNextPage(false);
              setRatePage(false);
            }}
            className="cursor-pointer"
          >
            {" "}
            Business
          </span>
          <span className="flex items-center mx-2">
            <ChevronLeft />
          </span>{" "}
          <span className="text-sm md:text-lg lg:text-xl">
            Advertise Now, Pay Later (ANPL)
          </span>
        </p>
        <h1 className="lg:text-5xl text-2xl font-bold my-6 md:px-5 px-2">
          Advertise Now, Pay Later (ANPL)
        </h1>
      </div>
      <div className=" my-10 rounded-xl  md:px-5 px-2">
        <img src={carousel} alt="" className="w-full lg:h-[600px]" />
      </div>
      <p className="font-medium text-lg  md:px-5 px-2">
        We're happy to introduce the first ever Advertise Now and Pay Later
        package which
      </p>
      <ul className="list-decimal text-lg list-inside font-medium my-3  md:px-5 px-2">
        <li>Allows users to run their Ads with zero credits</li>
        <li>
          It enables advertisers to re-launch expired campaigns easily and pay
          on their next recharge
        </li>
      </ul>
      <p className="font-medium text-lg  md:px-5 px-2">
        The service allows for smooth implementation and uninterrupted marketing
        and advertising plans. <br /> We understand the importance of marketing
        and advertising as the core of consumer goods. Or services. <br />{" "}
        Download mobile app now to get started
      </p>
      <section className="h-[30rem]"></section>
    </div>
  );
};

export default Advertise;
