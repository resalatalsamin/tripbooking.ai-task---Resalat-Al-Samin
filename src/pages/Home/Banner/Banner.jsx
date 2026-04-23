import React from "react";
import bannerImg from "../../../assets/cox_bazar.png";
import earth from "../../../assets/earth.svg fill.svg";

const Banner = () => {
  return (
    <section className="flex flex-col   items-center justify-center">
      <div className="relative lg:h-[75vh] h-screen w-full overflow-hidden ">
        <img
          className="h-full w-full object-cover object-center brightness-60"
          src={bannerImg}
          alt="Banner"
        />
      </div>
      <div className="absolute text-5xl text-center lg:w-12/12 w-11/12 mx-auto">
        <div className="-mt-40 lg:mt-0 md:-mt-90 mb-6.25 flex flex-col justify-center items-center">
          <button className="bg-[#fab326] text-[14px] py-3.5 px-5.75 rounded-[40px] flex gap-[9.13px] items-center">
            <img src={earth} alt="Earth Logo" />
            <p className="font-bold text-white font-primary">
              Explore the world
            </p>
          </button>
        </div>
        <div className="font-primary font-extrabold text-white lg:text-[52px] md:text-[52px] text-3xl lg:mb-5 mb-8">
          <h1>Your Gateway to Extraordinary Adventures</h1>
        </div>
        <div>
          <p className="font-primary text-white lg:text-2xl md:text-2xl text-xl font-medium lg:w-[767.09px] mx-auto">
            Pack your bags and let Travila redefine your travel experience.
            Where every journey is a story waiting to be told
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
