import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import person1 from "../images/person_1.jpg";
import person2 from "../images/person_2.jpg";

function TestimonialsSection() {
  return (
    <div className="mt-20 ">
      <div className="text-center">
        <h1 className="uppercase text-sm text-gray-400">Testimony</h1>
        <h1 className="sm:text-5xl lg:text-6xl text-center mt-6 tracking-tighter font-extralight text-3xl">
          Successful Stories
        </h1>
      </div>
      <Swiper
        style={{
          "--swiper-pagination-color": "rgb(244 114 182)",
          "--swiper-pagination-bullet-size": "10px",
        }}
        className="py-20 flex-wrap sm:w-1/2 lg:w-1/2"
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={2}
        pagination={{ clickable: true, type: "bullets" }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("Slide Change")}
      >
        <SwiperSlide className="p-12 mx-2 rounded-xl shadow-xl flex flex-wrap">
          <p className="text-left">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <div className="mt-10">
            <img
              className="rounded-full border-solid border-2 border-pink-400 h-24 w-24"
              src={person1}
              alt=""
            />
          </div>
          <div className="text-center mt-10 px-3">
            <h1 className="font-semibold">Hannah Smith</h1>
            <p className="text-sm text-gray-400">Consumer</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="p-12 mx-2 rounded-xl shadow-xl flex flex-wrap justify-start items-start">
          <p className="text-left">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <div className="mt-10">
            <img
              className="rounded-full border-solid border-2 border-pink-400 h-24 w-24"
              src={person2}
              alt=""
            />
          </div>
          <div className="text-center mt-10 px-3">
            <h1 className="font-semibold">Hannah Smith</h1>
            <p className="text-sm text-gray-400">Consumer</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="p-12 mx-2 rounded-xl shadow-xl flex flex-wrap justify-start items-start">
          <p className="text-left">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <div className="mt-10">
            <img
              className="rounded-full border-solid border-2 border-pink-400 h-24 w-24"
              src={person1}
              alt=""
            />
          </div>
          <div className="text-center mt-10 px-3">
            <h1 className="font-semibold">Hannah Smith</h1>
            <p className="text-sm text-gray-400">Consumer</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="p-12 mx-2 rounded-xl shadow-xl flex flex-wrap justify-start items-start">
          <p className="text-left">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <div className="mt-10">
            <img
              className="rounded-full border-solid border-2 border-pink-400 h-24 w-24"
              src={person2}
              alt=""
            />
          </div>
          <div className="text-center mt-10 px-3">
            <h1 className="font-semibold">Hannah Smith</h1>
            <p className="text-sm text-gray-400">Consumer</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="p-12 mx-2 rounded-xl shadow-xl flex flex-wrap justify-start items-start">
          <p className="text-left">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <div className="mt-10">
            <img
              className="rounded-full border-solid border-2 border-pink-400 h-24 w-24"
              src={person1}
              alt=""
            />
          </div>
          <div className="text-center mt-10 px-3">
            <h1 className="font-semibold">Hannah Smith</h1>
            <p className="text-sm text-gray-400">Consumer</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="p-12 mx-2 rounded-xl shadow-xl flex flex-wrap justify-start items-start">
          <p className="text-left">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <div className="mt-10">
            <img
              className="rounded-full border-solid border-2 border-pink-400 h-24 w-24"
              src={person2}
              alt=""
            />
          </div>
          <div className="text-center mt-10 px-3">
            <h1 className="font-semibold">Hannah Smith</h1>
            <p className="text-sm text-gray-400">Consumer</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default TestimonialsSection;
