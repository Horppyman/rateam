import { ScrollToTop } from "../../app/scroll";
import banner from "../../assets/images/banner.png";
import google from "../../assets/images/googleplay.png";
import Cards from "./Components/Cards";
import Newsletter from "./Components/Newsletter";
import Numbers from "./Components/Numbers";
import OrangeGlobe from "./Components/OrangeGlobe";
import PurplePicture from "./Components/PurplePicture";
import Video from "./Components/Video";
const Home = () => {
  ScrollToTop();
  return (
    <>
      <section className="container mx-auto mt-5">
        <div className="lg:flex">
          <div className="basis-1/2 px-5 lg:px-0">
            <h1 className="xl:text-[8rem] text-[4rem] font-bold">
              Rate & Earn
            </h1>
            <h2 className="lg:text-[4rem] text-[40px] font-light">
              Anytime, Anywhere
            </h2>
            <p className="text-lg font-medium my-5 px-2">
              RateAm is a digital product that enables you to rate calls,
              locations and even businesses you have interacted with and earn
              money from each rating?
            </p>
            <div className="flex items-center mt-5 px-2">
              <button
                type="button"
                class="text-white bg-[#FF674D] hover:bg-orange-600 font-medium rounded text-xl lg:w-44 w-[150px] mr-2 mb-2 lg:h-[55px] h-[45px]"
              >
                Get Started
              </button>
              <img src={google} alt="" className="h-[65px] lg:h-auto" />
            </div>
          </div>
          <div className="basis-1/2 flex items-center justify-center">
            <img src={banner} alt="" />
          </div>
        </div>
      </section>
      <Video />
      <OrangeGlobe />
      <Cards />
      <Numbers />
      <PurplePicture />
      <Newsletter />
    </>
  );
};

export default Home;
