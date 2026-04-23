import React from "react";
import frameLogo from "../../../assets/Frame.svg";
import HotelLogo from "../../../assets/Vector.svg";
import location from "../../../assets/location.svg";
import Calender from "../../../assets/Clip path group.svg";
import Guest from "../../../assets/user.svg";
import SearchIcon from "../../../assets/SVG.svg";
import { IoIosArrowDown } from "react-icons/io";

const Search = () => {
  return (
    <div className="lg:max-w-10/12 max-w-11/12 mx-auto bg-white rounded-2xl lg:-mt-127 -mt-200 md:-mt-250 relative shadow-xl font-primary lg:mb-60">
      <div className="p-7.25 space-y-[28.22px]">
        <div className="lg:flex items-center justify-between">
          <div className="flex items-center gap-6 mb-8 lg:mb-0">
            <div className="flex items-center gap-1 pl-[43.75px]">
              <img src={frameLogo} alt="logo" />
              <p className="font-semibold text-[14px] font-primary">Tours</p>
            </div>
            <div>
              <button className="flex items-center gap-1 py-2 px-5 bg-[#fab326] rounded-[50px]">
                <img src={HotelLogo} alt="Hotel logo" />
                <p className="font-semibold text-[14px] text-white">Hotels</p>
              </button>
            </div>
          </div>
          <div>
            <p className="text-[#737373] text-[14px] font-medium">
              Need some help?
            </p>
          </div>
        </div>
        <div className="border-2 border-[#E4E6E8] rounded-2xl">
          <div className="py-5.5 px-7 lg:flex items-center justify-between space-y-8 lg:space-y-0">
            {/* Location */}
            <div className="space-y-1.25 lg:border-r-2 border-[#E4E6E8] pr-[110.05px]">
              <h6 className="text-[#737373] font-bold text[14px]">Location</h6>
              <div className="flex items-center gap-1.5">
                <img src={location} alt="location" />
                <p className="font-bold text-[14px] mr-[15.65px]">
                  New York, USA
                </p>
                <IoIosArrowDown />
              </div>
            </div>
            {/* Check in Check out */}
            <div className="space-y-1.25 lg:border-r-2 border-[#E4E6E8]  pr-[120.79px]">
              <h6 className="text-[#737373] font-bold text[14px]">
                Check In & Check Out
              </h6>
              <div className="flex items-center gap-1.5">
                <img src={Calender} alt="Calender" />
                <p className="font-bold text-[14px] mr-[15.65px]">
                  02 January 2024
                </p>
                <IoIosArrowDown />
              </div>
            </div>
            {/* Guest */}
            <div className="space-y-1.25  ">
              <h6 className="text-[#737373] font-bold text[14px]">Guest</h6>
              <div className="flex items-center gap-1.5">
                <img src={Guest} alt="Calender" />
                <p className="font-bold text-[14px] mr-[15.65px]">
                  2 Adults, 2 Children
                </p>
                <IoIosArrowDown />
              </div>
            </div>
            {/* Search Button */}
            <div>
              <button className="bg-[#0640c3] text-white text-[14px] py-4 px-8 rounded-[40px] flex gap-2.5 w-full lg:w-none items-center justify-center">
                <img src={SearchIcon} alt="search icon" />
                <p className="font-bold font-primary">Search</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
