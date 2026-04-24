import React from "react";
import leftArrow from "../../../assets/tours/Vector.svg";
import rightArrow from "../../../assets/destinations/Vector.svg";
import image1 from "../../../assets/tours/journey2.png.png";
import image2 from "../../../assets/tours/journey3.png.png";
import image3 from "../../../assets/tours/journey4.png.png";
import location from "../../../assets/location.svg";
import time from "../../../assets/duration.svg";
import user from "../../../assets/user.svg";
const FeaturedTours = () => {
  return (
    <div className="mt-15 lg:max-w-10/12 max-w-11/12 mx-auto font-primary">
      <div className="mb-14 flex items-center justify-between">
        <div>
          <h2 className="font-extrabold text-[52px]">Our Featured Tours</h2>
          <p className="font-medium text-xl text-[#737373]">
            Favorite destinations based on customer reviews
          </p>
        </div>
        <div className="lg:flex items-center gap-2.5 hidden lg:block">
          <img
            className="p-2 bg-[#E4E6E8] rounded-full"
            src={leftArrow}
            alt="leftArrow"
          />
          <img
            className="p-2 bg-[#E4E6E8] rounded-full"
            src={rightArrow}
            alt="rightArrow"
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 pb-10.25">
        {/* Tour Card 1 */}
        <div className="border-2 border-[#E4E6E8] rounded-4xl h-fit">
          <div>
            <img
              className="rounded-4xl relative"
              src={image1}
              alt="California Sunset Image"
            />
            <div className="absolute pt-5.5 pl-6.25 lg:-mt-86 -mt-75">
              <p className="py-[4.5px] px-5.5 bg-white rounded-[50px] font-bold text-[14px] text-[#FAB326]">
                Top Rated
              </p>
            </div>
          </div>

          <div className="rounded-4xl relative -mt-12 bg-white h-fit">
            <div className="p-8">
              <div>
                <h3 className="font-extrabold text-2xl">
                  California Sunset/Twilight Boat Cruise
                </h3>
              </div>

              <div className="my-2 flex gap-2">
                <img className="" src={location} alt="Location Logo" />
                <p className="font-medium text-[#737373]">
                  Manchester, England
                </p>
              </div>

              <div className="flex items-center">
                <div className="flex gap-2">
                  <img className="" src={time} alt="Watch Logo" />
                  <p className="font-medium text-[#737373] mr-[19.63px]">
                    2 days 3 nights
                  </p>
                </div>
                <div className="flex gap-2">
                  <img className="" src={user} alt="User Logo" />
                  <p className="font-medium text-[#737373]">4-6 guests</p>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <div>
                  <p className="font-medium text-[#737373]">
                    <span className="font-extrabold text-2xl text-[#000000]">
                      $48.25
                    </span>{" "}
                    / person
                  </p>
                </div>
                <div>
                  <button className="bg-[#0640c3] text-white text-[14px] py-4 px-8 rounded-[40px] flex gap-2.5 w-full lg:w-none items-center justify-center">
                    <p className="font-bold font-primary">Book Now</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Tour Card 2 */}
        <div className="border-2 border-[#E4E6E8] rounded-4xl h-fit">
          <div>
            <img
              className="rounded-4xl relative"
              src={image2}
              alt="California Sunset Image"
            />
            <div className="absolute pt-5.5 pl-6.25 lg:-mt-86 -mt-75">
              <p className="py-[4.5px] px-5.5 bg-white rounded-[50px] font-bold text-[14px] text-[#3DC262]">
                Best Sale
              </p>
            </div>
          </div>

          <div className="rounded-4xl relative -mt-12 bg-white h-fit">
            <div className="p-8">
              <div>
                <h3 className="font-extrabold text-2xl">
                  NYC: Food Tastings and Culture Tour
                </h3>
              </div>

              <div className="my-2 flex gap-2">
                <img className="" src={location} alt="Location Logo" />
                <p className="font-medium text-[#737373]">
                  Manchester, England
                </p>
              </div>

              <div className="flex items-center">
                <div className="flex gap-2">
                  <img className="" src={time} alt="Watch Logo" />
                  <p className="font-medium text-[#737373] mr-[19.63px]">
                    2 days 3 nights
                  </p>
                </div>
                <div className="flex gap-2">
                  <img className="" src={user} alt="User Logo" />
                  <p className="font-medium text-[#737373]">4-6 guests</p>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <div>
                  <p className="font-medium text-[#737373]">
                    <span className="font-extrabold text-2xl text-[#000000]">
                      $17.32
                    </span>{" "}
                    / person
                  </p>
                </div>
                <div>
                  <button className="bg-[#0640c3] text-white text-[14px] py-4 px-8 rounded-[40px] flex gap-2.5 w-full lg:w-none items-center justify-center">
                    <p className="font-bold font-primary">Book Now</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Tour Card 3 */}
        <div className="border-2 border-[#E4E6E8] rounded-4xl h-fit">
          <div>
            <img
              className="rounded-4xl relative"
              src={image3}
              alt="California Sunset Image"
            />
            <div className="absolute pt-5.5 pl-6.25 lg:-mt-86 -mt-75">
              <p className="py-[4.5px] px-5.5 bg-white rounded-[50px] font-bold text-[14px] text-[#FAB326]">
                25% Off
              </p>
            </div>
          </div>

          <div className="rounded-4xl relative -mt-12 bg-white h-fit">
            <div className="p-8">
              <div>
                <h3 className="font-extrabold text-2xl">
                  Grand Canyon Horseshoe Bend 2 days
                </h3>
              </div>

              <div className="my-2 flex gap-2">
                <img className="" src={location} alt="Location Logo" />
                <p className="font-medium text-[#737373]">
                  Manchester, England
                </p>
              </div>

              <div className="flex items-center">
                <div className="flex gap-2">
                  <img className="" src={time} alt="Watch Logo" />
                  <p className="font-medium text-[#737373] mr-[19.63px]">
                    2 days 3 nights
                  </p>
                </div>
                <div className="flex gap-2">
                  <img className="" src={user} alt="User Logo" />
                  <p className="font-medium text-[#737373]">4-6 guests</p>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <div>
                  <p className="font-medium text-[#737373]">
                    <span className="font-extrabold text-2xl text-[#000000]">
                      $15.63
                    </span>{" "}
                    / person
                  </p>
                </div>
                <div>
                  <button className="bg-[#0640c3] text-white text-[14px] py-4 px-8 rounded-[40px] flex gap-2.5 w-full lg:w-none items-center justify-center">
                    <p className="font-bold font-primary">Book Now</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedTours;
