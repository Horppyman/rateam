import { useState } from "react";
import { ScrollToTop } from "../../app/scroll";
import aboutUs from "../../assets/images/aboutUs.png";
import Advertise from "./Advertise";
import Offers from "./Components/Offers";
import Partnership from "./Components/Partnership";
import RateAm from "./RateAm";
import RateAmBusiness from "./RateAmBusiness";
const Business = () => {
  const [offersValue, setOffersValue] = useState(true);
  const [rateAmValue, setRateAmValue] = useState(false);
  const [advertiseValue, setAdvertiseValue] = useState(false);
  const [businessValue, setBusinessValue] = useState(false);

  const setNewPage = (path) => {
    if (path == "home") {
      setOffersValue(true);
      setRateAmValue(false);
      setAdvertiseValue(false);
      setBusinessValue(false);
    } else if (path == "rateam") {
      setOffersValue(false);
      setRateAmValue(true);
      setAdvertiseValue(false);
      setBusinessValue(false);
    } else if (path == "advert") {
      setOffersValue(false);
      setRateAmValue(false);
      setAdvertiseValue(true);
      setBusinessValue(false);
    } else if (path == "business") {
      setOffersValue(false);
      setRateAmValue(false);
      setAdvertiseValue(false);
      setBusinessValue(true);
    }
  };
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
        {offersValue && <Offers setNewPage={setNewPage} />}

        {rateAmValue && <RateAm setNewPage={setNewPage} />}

        {advertiseValue && <Advertise setNewPage={setNewPage} />}

        {businessValue && <RateAmBusiness setNewPage={setNewPage} />}
      </section>
      <section className="h-[30rem]"></section>
    </div>
  );
};

export default Business;
