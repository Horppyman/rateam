import { useState } from "react";
import { ScrollToTop } from "../../app/scroll";
import aboutUs from "../../assets/images/aboutUs.png";
import Advertise from "./Advertise";
import Offers from "./Components/Offers";
import Partnership from "./Components/Partnership";
import RateAm from "./RateAm";
import RateAmBusiness from "./RateAmBusiness";
const Business = () => {
  const [nextPage, setNextPage] = useState(false);
  const [ratePage, setRatePage] = useState(false);
  const [rateAmPage, setRateAmPage] = useState(false);
  ScrollToTop();
  return (
    <div
      className="container mx-auto  lg:px-0
  "
    >
      <div className="bg-orange-500 rounded-lg my-10 md:rounded-xl mx-3 md:mx-5">
        <img src={aboutUs} alt="" className="w-full h-16 md:h-auto" />
      </div>
      <section className="px-3 lg:px-0">
        {!nextPage ? (
          <>
            <Offers setNextPage={setNextPage} setRatePage={setRatePage} />
            <Partnership />
          </>
        ) : ratePage ? (
          <RateAm setNextPage={setNextPage} setRatePage={setRatePage} />
        ) : rateAmPage ? (
          <Advertise setNextPage={setNextPage} setRatePage={setRatePage} />
        ) : (
          <RateAmBusiness />
        )}
      </section>
      <section className="h-[30rem]"></section>
    </div>
  );
};

export default Business;
