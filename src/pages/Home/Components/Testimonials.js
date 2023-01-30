import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper";
import CountUp from "react-countup";
import man from "../../../assets/images/Testimonials/man.png";
import man2 from "../../../assets/images/Testimonials/man2.png";
import girl from "../../../assets/images/Testimonials/girl.png";
import girl2 from "../../../assets/images/Testimonials/girl2.png";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const Testimonials = () => {
  return (
    <div className="mb-10">
      <h1 className="text-center text-4xl text-gray-600 font-semibold">
        Testimonials
      </h1>
      <div className="mt-10">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
          breakpoints={{
            576: {
              slidesPerView: 1,
            },
            1008: {
              slidesPerView: 3,
            },
          }}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="bg-slate-100 border-2 mx-5 md:mx-0 border-gray-200 shadow-lg rounded-lg p-5 md:w-[25rem] h-[20rem]">
              <div className="flex space-x-5 items-center ">
                <img src={man} alt="" />
                <div className="">
                  <h1 className="text-lg font-semibold text-gray-600 ">
                    Austin
                  </h1>
                  <div className="flex">
                    <BsStarFill color="gold" />
                    <BsStarFill color="gold" />
                    <BsStarFill color="gold" />
                    <BsStarHalf color="gold" />
                    <BsStar color="gold" />
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <p className="leading-7 text-gray-500 font-medium tracking-wide">
                  I can now check out the network score of my favorite network
                  before I embark on any destination so I dont leave things to
                  chance. I mean imagine travelling to a location, only to
                  discoverthat your network is poor.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-slate-100  border-2 border-gray-200 shadow-lg mx-5 md:mx-0 rounded-lg p-5 md:w-[25rem] h-[20rem]">
              <div className="flex space-x-5 items-center ">
                <img src={girl} alt="" />
                <div className="">
                  <h1 className="text-lg font-semibold text-gray-600 ">
                    Aisha
                  </h1>
                  <div className="flex">
                    <BsStarFill color="gold" />
                    <BsStarFill color="gold" />
                    <BsStarFill color="gold" />
                    <BsStarFill color="gold" />
                    <BsStar color="gold" />
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <p className="leading-7 text-gray-500 font-medium tracking-wide">
                  Never believed that a time like this willever come. Now I can
                  conveniently let my operators know when i’m pissed and they’ll
                  respond.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-slate-100  border-2 border-gray-200 shadow-lg mx-5 md:mx-0 rounded-lg p-5 md:w-[25rem] h-[20rem]">
              <div className="flex space-x-5 items-center ">
                <img src={girl2} alt="" />
                <div className="">
                  <h1 className="text-lg font-semibold text-gray-600 ">
                    Dupe Martins
                  </h1>
                  <div className="flex">
                    <BsStarFill color="gold" />
                    <BsStarFill color="gold" />
                    <BsStarFill color="gold" />
                    <BsStarHalf color="gold" />
                    <BsStar color="gold" />
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <p className="leading-7 text-gray-500 font-medium tracking-wide">
                  As a business lady I can comfortably run my targeted sales
                  campaign to mypreferred audience, wow!.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-slate-100  border-2 border-gray-200 shadow-lg mx-5 md:mx-0 rounded-lg p-5 h-[20rem] md:w-[25rem]">
              <div className="flex space-x-5 items-center ">
                <img src={man2} alt="" />
                <div className="">
                  <h1 className="text-lg font-semibold text-gray-600 ">
                    Francis
                  </h1>
                  <div className="flex">
                    <BsStarFill color="gold" />
                    <BsStarFill color="gold" />
                    <BsStarFill color="gold" />
                    <BsStarFill color="gold" />
                    <BsStar color="gold" />
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <p className="leading-7 text-gray-500 font-medium tracking-wide">
                  So at last I don't have to run cold calls asking people if
                  they're interested in my products, instead I now access mycall
                  request orders. Sales is already looking great.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
