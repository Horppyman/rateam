import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper";
import CountUp from "react-countup";

const Numbers = () => {
  return (
    <div className=" text-black relative my-10 bg-gray-200 ">
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
            <div className="pt-10">
              <span className=" font-bold tracking-wide">Unrated calls</span>
              <div className="h-1 w-16 mt-2 bg-indigo-400 mx-auto rounded-xl"></div>
            </div>
            <p className="lg:text-[5rem] text-[4rem] font-bold text-gray-400 pb-10">
              <CountUp separator="," end={Math.floor(Math.random() * 117903)} />
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center">
            <div className="pt-10">
              <span className=" font-bold tracking-wide">
                RateAm active users
              </span>
              <div className="h-1 w-16 mt-2 bg-indigo-400 mx-auto rounded-xl"></div>
            </div>
            <p className="lg:text-[5rem] text-[4rem] font-bold text-gray-400 pb-10">
              <CountUp separator="," end={Math.floor(Math.random() * 78903)} />
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center">
            <div className="pt-10">
              <span className=" font-bold tracking-wide">Rated calls</span>
              <div className="h-1 w-16 mt-2 bg-indigo-400 mx-auto rounded-xl"></div>
            </div>
            <p className="lg:text-[5rem] text-[4rem] font-bold text-gray-400 pb-10">
              <CountUp separator="," end={Math.floor(Math.random() * 457876)} />
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center">
            <div className="pt-10">
              <span className=" font-bold tracking-wide">Smartphone users</span>
              <div className="h-1 w-16 mt-2 bg-indigo-400 mx-auto rounded-xl"></div>
            </div>
            <p className="lg:text-[5rem] text-[4rem] font-bold text-gray-400 pb-10">
              <CountUp suffix="m" end={Math.floor(Math.random() * 93)} />
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center">
            <div className="pt-10">
              <span className=" font-bold tracking-wide">
                Average daily calls
              </span>
              <div className="h-1 w-16 mt-2 bg-indigo-400 mx-auto rounded-xl"></div>
            </div>
            <p className="lg:text-[5rem] text-[4rem] font-bold text-gray-400 pb-10">
              <CountUp suffix="m" end={Math.floor(Math.random() * 903)} />
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center">
            <div className="pt-10">
              <span className=" font-bold tracking-wide">
                Number of calls today
              </span>
              <div className="h-1 w-16 mt-2 bg-indigo-400 mx-auto rounded-xl"></div>
            </div>
            <p className="lg:text-[5rem] text-[4rem] font-bold text-gray-400 pb-10">
              <CountUp
                separator=","
                end={Math.floor(Math.random() * 21991825)}
              />
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Numbers;
