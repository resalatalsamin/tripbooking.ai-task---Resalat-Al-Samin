import React from "react";
import frameLogo from "../../../assets/Frame.svg";
import HotelLogo from "../../../assets/Vector.svg";
import location from "../../../assets/location.svg";

const Search = () => {
  return (
    <div className="max-w-9/12 mx-auto bg-white rounded-2xl -mt-25 relative shadow-xl">
      <div className="p-7.25 space-y-[28.22px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1">
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
          <div className="py-5.5 px-7">
            {/* Location */}
            <div className="space-y-1.25">
              <h6>Location</h6>
              <div className="flex items-center gap-1.5">
                <img src={location} alt="location" />
                <p className="font-bold text-[14px] ">New York, USA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
