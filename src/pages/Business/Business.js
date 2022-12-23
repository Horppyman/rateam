import { useState } from "react";
import { ScrollToTop } from "../../app/scroll";
import aboutUs from "../../assets/images/aboutUs.png";
import Advertise from "./Advertise";
import Offers from "./Components/Offers";
import Partnership from "./Components/Partnership";
import RateAm from "./RateAm";
const Business = () => {
  const [nextPage, setNextPage] = useState(false);
  const [ratePage, setRatePage] = useState(false);
  ScrollToTop();
  return (
    <div
      className="container mx-auto px-7 lg:px-0
  "
    >
      <div className="bg-orange-500 my-10 rounded-xl mx-5">
        <img src={aboutUs} alt="" className="w-full" />
      </div>
      {!nextPage ? (
        <>
          <Offers setNextPage={setNextPage} setRatePage={setRatePage} />
          <Partnership />
        </>
      ) : ratePage ? (
        <RateAm setNextPage={setNextPage} setRatePage={setRatePage} />
      ) : (
        <Advertise setNextPage={setNextPage} setRatePage={setRatePage} />
      )}
      <section className="h-[30rem]"></section>
    </div>
  );
};

export default Business;
