import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper";
import CountUp from "react-countup";
// Link
import { Link } from "react-router-dom";
// images
import qatar from "../../../assets/images/Networks/Qatar.png";
import beeline from "../../../assets/images/Networks/BeeLine.png";
import orange from "../../../assets/images/Networks/orange.png";
import telefonica from "../../../assets/images/Networks/Telefonica.png";
import glo from "../../../assets/images/Networks/glo.png";
import Vodafone from "../../../assets/images/Networks/Vodafone.png";
import mtn from "../../../assets/images/Networks/mtn.png";
import etisalat from "../../../assets/images/Networks/etisalat.png";
import Airtel from "../../../assets/images/Networks/Airtel.png";

const Networks = () => {
  return (
    <div className="bg-[#e9e9ff] p-5 mb-10">
      <h1 className="text-center px-5 md:px-2 font-bold lg:text-3xl md:text-2xl sm:text-xl text-lg text-gray-600 my-5">
        Rate your calls across these Top African Networks
      </h1>
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
          <div className="flex flex-col items-center justify-center">
            <div className="md:pt-10 pt-5">
              <img src={qatar} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center">
            <div className="md:pt-10 pt-5">
              <img src={beeline} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center">
            <div className="md:pt-10 pt-5">
              <img src={orange} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center">
            <div className="md:pt-10 pt-5">
              <img src={telefonica} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center">
            <div className="md:pt-10 pt-5">
              <img src={glo} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center">
            <div className="md:pt-10 pt-5">
              <img src={Vodafone} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center">
            <div className="md:pt-10 pt-5">
              <img src={mtn} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center">
            <div className="md:pt-10 pt-5">
              <img src={etisalat} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center">
            <div className="md:pt-10 pt-5">
              <img src={Airtel} alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="flex flex-col items-center">
        <h1 className="md:mt-10 mt-3 md:font-semibold text-sm md:text-base text-gray-700 px-5 md:px-2">
          Brands: Connect your business with millions of callers across these
          networks
        </h1>
        <Link
          to="/register"
          className="uppercase py-2 px-5 mt-5 bg-[#FF674D] text-white rounded-lg font-bold tracking-wider md:text-lg"
        >
          Sign up now
        </Link>
      </div>
    </div>
  );
};

export default Networks;
