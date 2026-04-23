import React from "react";
import venice from "../../../assets/destinations/Link → popular2.png.png";
import Amsterdam from "../../../assets/destinations/Link → popular2.png.png";
import Budapest from "../../../assets/destinations/Link → popular3.png.png";
import Lisbon from "../../../assets/destinations/Link → popular4.png.png";
import London from "../../../assets/destinations/Link → popular5.png.png";
import Ottawa from "../../../assets/destinations/Link → popular6.png.png";
import Paris from "../../../assets/destinations/Link → popular7.png.png";
import rightArrow from "../../../assets/destinations/Vector.svg";

const PopularDestinations = () => {
  return (
    <div className="lg:max-w-10/12 max-w-11/12 mx-auto lg:mt-24.25 md:mt-110.25 mt-30 font-primary">
      <div className="mb-9.5">
        <h2 className="font-extrabold text-[52px]">Popular Destinations</h2>
        <p className="font-medium text-xl text-[#737373]">
          Favorite destinations based on customer reviews
        </p>
      </div>

      {/* Destination Cards */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
        {/* Venice */}
        <div className="border-2 border-[#E4E6E8] rounded-3xl">
          <div>
            <img
              className="p-4 rounded-4xl mb-[10.31px]"
              src={venice}
              alt="Venice image"
            />
          </div>
          <div className="px-4 mb-1.5">
            <h5 className="font-bold text-[18px]">Venice</h5>
          </div>
          <div className="flex items-center justify-between">
            <div className="px-4 mb-4">
              <p className="text-[14px] text-[#737373]">356 Tours</p>
            </div>
            <div className="mx-4 mb-4  bg-[#E4E6E8] rounded-full">
              <img className="p-2" src={rightArrow} alt="Right Arrow Button" />
            </div>
          </div>
        </div>
        {/* Amsterdam */}
        <div className="border-2 border-[#E4E6E8] rounded-3xl">
          <div>
            <img
              className="p-4 rounded-4xl mb-[10.31px]"
              src={Amsterdam}
              alt="Venice image"
            />
          </div>
          <div className="px-4 mb-1.5">
            <h5 className="font-bold text-[18px]">Amsterdam</h5>
          </div>
          <div className="flex items-center justify-between">
            <div className="px-4 mb-4">
              <p className="text-[14px] text-[#737373]">356 Tours</p>
            </div>
            <div className="mx-4 mb-4  bg-[#E4E6E8] rounded-full">
              <img className="p-2" src={rightArrow} alt="Right Arrow Button" />
            </div>
          </div>
        </div>
        {/* Budapest */}
        <div className="border-2 border-[#E4E6E8] rounded-3xl">
          <div>
            <img
              className="p-4 rounded-4xl mb-[10.31px]"
              src={Budapest}
              alt="Venice image"
            />
          </div>
          <div className="px-4 mb-1.5">
            <h5 className="font-bold text-[18px]">Budapest</h5>
          </div>
          <div className="flex items-center justify-between">
            <div className="px-4 mb-4">
              <p className="text-[14px] text-[#737373]">356 Tours</p>
            </div>
            <div className="mx-4 mb-4  bg-[#E4E6E8] rounded-full">
              <img className="p-2" src={rightArrow} alt="Right Arrow Button" />
            </div>
          </div>
        </div>
        {/* Lisbon */}
        <div className="border-2 border-[#E4E6E8] rounded-3xl">
          <div>
            <img
              className="p-4 rounded-4xl mb-[10.31px]"
              src={Lisbon}
              alt="Venice image"
            />
          </div>
          <div className="px-4 mb-1.5">
            <h5 className="font-bold text-[18px]">Lisbon</h5>
          </div>
          <div className="flex items-center justify-between">
            <div className="px-4 mb-4">
              <p className="text-[14px] text-[#737373]">356 Tours</p>
            </div>
            <div className="mx-4 mb-4  bg-[#E4E6E8] rounded-full">
              <img className="p-2" src={rightArrow} alt="Right Arrow Button" />
            </div>
          </div>
        </div>
        {/* London */}
        <div className="border-2 border-[#E4E6E8] rounded-3xl">
          <div>
            <img
              className="p-4 rounded-4xl mb-[10.31px]"
              src={London}
              alt="Venice image"
            />
          </div>
          <div className="px-4 mb-1.5">
            <h5 className="font-bold text-[18px]">London</h5>
          </div>
          <div className="flex items-center justify-between">
            <div className="px-4 mb-4">
              <p className="text-[14px] text-[#737373]">356 Tours</p>
            </div>
            <div className="mx-4 mb-4  bg-[#E4E6E8] rounded-full">
              <img className="p-2" src={rightArrow} alt="Right Arrow Button" />
            </div>
          </div>
        </div>
        {/* Ottawa */}
        <div className="border-2 border-[#E4E6E8] rounded-3xl">
          <div>
            <img
              className="p-4 rounded-4xl mb-[10.31px]"
              src={Ottawa}
              alt="Venice image"
            />
          </div>
          <div className="px-4 mb-1.5">
            <h5 className="font-bold text-[18px]">Ottawa</h5>
          </div>
          <div className="flex items-center justify-between">
            <div className="px-4 mb-4">
              <p className="text-[14px] text-[#737373]">356 Tours</p>
            </div>
            <div className="mx-4 mb-4  bg-[#E4E6E8] rounded-full">
              <img className="p-2" src={rightArrow} alt="Right Arrow Button" />
            </div>
          </div>
        </div>
        {/* Paris */}
        <div className="border-2 border-[#E4E6E8] rounded-3xl">
          <div>
            <img
              className="p-4 rounded-4xl mb-[10.31px]"
              src={Paris}
              alt="Venice image"
            />
          </div>
          <div className="px-4 mb-1.5">
            <h5 className="font-bold text-[18px]">Paris</h5>
          </div>
          <div className="flex items-center justify-between">
            <div className="px-4 mb-4">
              <p className="text-[14px] text-[#737373]">356 Tours</p>
            </div>
            <div className="mx-4 mb-4  bg-[#E4E6E8] rounded-full">
              <img className="p-2" src={rightArrow} alt="Right Arrow Button" />
            </div>
          </div>
        </div>
        {/* Browse  */}
        <div className="border-2 border-[#E4E6E8] rounded-3xl bg-[#0640C3]">
          <div className="mb-16.5">
            <h4 className="pl-7.25 pt-7 pr-[75.67px] pb-[10.5px] font-extrabold text-2xl text-white">
              Crafting Your Perfect Travel Experience
            </h4>
          </div>
          <div className="flex items-center justify-between mx-4.75 mb-9 bg-[#FAB326] rounded-2xl">
            <p className="font-bold text-white py-3 pl-6.5">
              Browse all destinations
            </p>
            <div className="mr-6.5 my-[20.5px] bg-white rounded-full">
              <img className="p-2" src={rightArrow} alt="Right Arrow Button" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularDestinations;
