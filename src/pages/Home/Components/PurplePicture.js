import top from "../../../assets/images/top.png";
import bottom from "../../../assets/images/bottom.png";

const PurplePicture = () => {
  return (
    <div className="container mx-auto px-3 lg:px-0">
      <div className=" bg-purple-500 rounded-lg p-5 max-w-[80rem] mx-auto">
        <div className="lg:flex my-10">
          <div className="order-2 flex items-center justify-center basis-1/3  mb-5 lg:mb-0">
            <img src={top} alt="" />
          </div>
          <div className="text-start text-white order-1 basis-2/3 flex flex-col items-center justify-center">
            <div className="">
              <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold mb-5 md:pl-10">
                The Problem
              </h1>
              <p className="md:text-xl text-sm md:pl-10">
                Atleast one in every ten callers will most likely have
                experience that they will like to express whether good or bad
                but unfortunately there is currently no platform that provides
                such to phone users.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:flex my-10">
          <div className=" flex items-center justify-center basis-1/3 mb-5 lg:mb-0">
            <img src={bottom} alt="" />
          </div>
          <div className="text-end text-white basis-2/3 flex flex-col justify-center">
            <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold mb-5 md:pr-10">
              Our Solution
            </h1>
            <p className="md:text-lg text-sm md:pr-10">
              People face a lot of issues due to low voice quality and inability
              to express their opinion on a centralized platform.RateAm app
              provides a platform that rewards all telecom subscribers by
              Crowdsourcing their network experience through a feedback rating
              process. <br />
              <p className="mt-5">
                Our solution is simple. More calls n More cash. All you need to
                do is Rate and Earn, Happy people...Happy network.
              </p>
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-10">
        <button
          type="button"
          class="text-white bg-[#7776BC] font-medium rounded text-xl px-5 mr-2 mb-2 h-[55px]"
        >
          Download The App
        </button>
      </div>
    </div>
  );
};

export default PurplePicture;
