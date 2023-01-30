import { ScrollToTop } from "../../app/scroll";
import banner from "../../assets/images/banner.png";
import google from "../../assets/images/googleplay.png";
import Cards from "./Components/Cards";
import Newsletter from "./Components/Newsletter";
import Numbers from "./Components/Numbers";
import OrangeGlobe from "./Components/OrangeGlobe";
import PurplePicture from "./Components/PurplePicture";
import Video from "./Components/Video";
import { useInView } from "react-intersection-observer";
import Networks from "./Components/Networks";
import Testimonials from "./Components/Testimonials";
import Faq from "./Components/Faq";
const Home = () => {
  const { ref: Main, inView: MainIsVisible } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { ref: Second, inView: SecondIsVisible } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });
  const { ref: Third, inView: ThirdIsVisible } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const { ref: Fourth, inView: FourthIsVisible } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { ref: Fifth, inView: FifthIsVisible } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  ScrollToTop();
  return (
    <section className="">
      <section
        className={`container h-screen mx-auto mt-5 px-4 ${
          MainIsVisible ? "opacity-100" : "opacity-0 translate-x-28"
        } transition-all ease-in duration-1000`}
        ref={Main}
      >
        <div className="lg:flex">
          <div className="basis-1/2 flex items-center px-4 lg:px-0">
            <div className="">
              <h1 className="xl:text-[5rem] md:text-[4rem] text-[3rem] font-bold">
                RATE & EARN
              </h1>
              <h2 className="xl:text-[4rem] lg:text-[40px] text-[1.5rem] font-light">
                Anytime, Anywhere
              </h2>
              <p className="sm:text-lg font-medium my-5 px-2">
                RateAm is a digital product that enables you to rate calls,
                locations and even businesses you have interacted with and earn
                money from each rating?
              </p>
              <div className="flex items-center mt-5 px-2">
                <button
                  type="button"
                  class="text-white shrink-0 bg-[#FF674D]  hover:bg-orange-600 font-medium rounded md:text-xl lg:w-44 md:w-[150px] px-4 mr-2 mb-2 mt-2 lg:h-[53px] h-[45px]"
                >
                  Get Started
                </button>
                <img src={google} alt="" className="h-[65px] lg:h-auto" />
              </div>
            </div>
          </div>
          <div className="basis-1/2 flex items-center justify-center">
            <img src={banner} alt="" />
          </div>
        </div>
      </section>
      <Networks />
      <section
        className={` ${
          SecondIsVisible ? "opacity-100" : "opacity-0 translate-x-10"
        } transition-all ease-in duration-1000`}
        ref={Second}
      >
        <Video />
      </section>
      <section
        className={` ${
          ThirdIsVisible ? "opacity-100" : "opacity-0 translate-x-10"
        } transition-all ease-in duration-1000`}
        ref={Third}
      >
        <OrangeGlobe />
      </section>
      <Cards />
      <section
        className={` ${
          FourthIsVisible ? "opacity-100" : "opacity-0 translate-x-10"
        } transition-all ease-in duration-1000`}
        ref={Fourth}
      >
        <Numbers />
      </section>
      <section
        className={` ${
          FifthIsVisible ? "opacity-100" : "opacity-0 translate-x-10"
        } transition-all ease-in duration-1000`}
        ref={Fifth}
      >
        <PurplePicture />
      </section>
      <Testimonials />
      <Faq />
      <Newsletter />
    </section>
  );
};

export default Home;
