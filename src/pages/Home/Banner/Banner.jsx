import React from "react";
import bannerImg from "../../../assets/cox_bazar.png";
import earth from "../../../assets/earth.svg fill.svg";

const Banner = () => {
  return (
    <section className="flex flex-col   items-center justify-center">
      <div className="relative h-[75vh] w-full overflow-hidden ">
        <img
          className="h-full w-full object-cover object-center brightness-60"
          src={bannerImg}
          alt="Banner"
        />
      </div>
      <div className="absolute text-5xl text-center">
        <div className="mb-6.25 flex flex-col justify-center items-center">
          <button className="bg-[#fab326] text-[14px] py-3.5 px-5.75 rounded-[40px] flex gap-[9.13px] items-center">
            <img src={earth} alt="Earth Logo" />
            <p className="font-bold text-white font-primary">
              Explore the world
            </p>
          </button>
        </div>
        <div className="font-primary font-extrabold text-white text-[52px] mb-5">
          <h1>Your Gateway to Extraordinary Adventures</h1>
        </div>
        <div>
          <p className="font-primary text-white text-2xl font-medium ">
            Pack your bags and let Travila redefine your travel experience.
            Where <br /> every journey is a story waiting to be told
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
