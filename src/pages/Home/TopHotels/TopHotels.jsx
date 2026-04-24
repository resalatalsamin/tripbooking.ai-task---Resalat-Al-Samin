import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import gradient from "../../../assets/89317a691ebd3da8f3477755ea64dd5e1ed1c1c7.png";
import leftArrow from "../../../assets/tours/Vector.svg";
import rightArrow from "../../../assets/destinations/Vector.svg";
import image1 from "../../../assets/tours/journey2.png.png";
import image2 from "../../../assets/tours/journey3.png.png";
import image3 from "../../../assets/tours/journey4.png.png";
import location from "../../../assets/location.svg";
import time from "../../../assets/duration.svg";
import user from "../../../assets/user.svg";

const TopHotels = () => {
  return (
    <div className="mt-20.25 mb-14.5 font-primary">
      <div className="absolute">
        <img className="bg-[#009AC533] h-215" src={gradient} alt="" />
      </div>
      <div>
        <div className="pt-20  font-primary w-11/12 lg:max-w-none mx-auto relative">
          <div className="mb-7.5 flex items-center justify-between">
            <div>
              <h2 className="font-extrabold text-[52px]">Our Featured Tours</h2>
              <p className="font-medium text-xl text-[#737373]">
                Favorite destinations based on customer reviews
              </p>
            </div>
            <div className="lg:flex items-center gap-2.5 hidden z-10">
              <img
                className="prev-tours cursor-pointer p-2 bg-[#E4E6E8] rounded-full"
                src={leftArrow}
                alt="leftArrow"
              />
              <img
                className="next-tours cursor-pointer p-2 bg-[#E4E6E8] rounded-full"
                src={rightArrow}
                alt="rightArrow"
              />
            </div>
          </div>

          {/* <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 pb-10.25"> */}

          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true} // Helps with navigation initialization
            navigation={{
              prevEl: ".prev-tours",
              nextEl: ".next-tours",
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="pb-10.25"
          >
            {/* Tour Card 1 */}
            <SwiperSlide>
              <div className="border-2 border-[#E4E6E8] rounded-4xl h-fit">
                <div>
                  <img
                    className="rounded-4xl relative"
                    src={image1}
                    alt="California Sunset Image"
                  />
                  <div className="absolute pt-5.5 pl-6.25 lg:-mt-68 -mt-75">
                    <p className="py-[4.5px] px-5.5 bg-white rounded-[50px] font-bold text-[14px] text-[#FAB326]">
                      Top Rated
                    </p>
                  </div>
                </div>

                <div className="rounded-4xl relative -mt-12 bg-white h-fit">
                  <div className="p-8">
                    <div>
                      <h3 className="font-extrabold text-2xl">
                        California Sunset/Twilight <br /> Boat Cruise
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
                        <button className="bg-[#0640c3] text-white text-[14px] py-2.25 px-4.5 rounded-[40px] flex gap-2.5 w-full lg:w-none items-center justify-center">
                          <p className="font-bold font-primary">Book Now</p>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* Tour Card 2 */}
            <SwiperSlide>
              <div className="border-2 border-[#E4E6E8] rounded-4xl h-fit">
                <div>
                  <img
                    className="rounded-4xl relative"
                    src={image2}
                    alt="California Sunset Image"
                  />
                  <div className="absolute pt-5.5 pl-6.25 lg:-mt-68 -mt-75">
                    <p className="py-[4.5px] px-5.5 bg-white rounded-[50px] font-bold text-[14px] text-[#3DC262]">
                      Best Sale
                    </p>
                  </div>
                </div>

                <div className="rounded-4xl relative -mt-12 bg-white h-fit">
                  <div className="p-8">
                    <div>
                      <h3 className="font-extrabold text-2xl">
                        NYC: Food Tastings and <br /> Culture Tour
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
                        <button className="bg-[#0640c3] text-white text-[14px] py-2.25 px-4.5 rounded-[40px] flex gap-2.5 w-full lg:w-none items-center justify-center">
                          <p className="font-bold font-primary">Book Now</p>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* Tour Card 3 */}
            <SwiperSlide>
              <div className="border-2 border-[#E4E6E8] rounded-4xl h-fit">
                <div>
                  <img
                    className="rounded-4xl relative"
                    src={image3}
                    alt="California Sunset Image"
                  />
                  <div className="absolute pt-5.5 pl-6.25 lg:-mt-68 -mt-75">
                    <p className="py-[4.5px] px-5.5 bg-white rounded-[50px] font-bold text-[14px] text-[#FAB326]">
                      25% Off
                    </p>
                  </div>
                </div>

                <div className="rounded-4xl relative -mt-12 bg-white h-fit">
                  <div className="p-8">
                    <div>
                      <h3 className="font-extrabold text-2xl">
                        Grand Canyon Horseshoe <br /> Bend 2 days
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
                        <button className="bg-[#0640c3] text-white text-[14px] py-2.25 px-4.5 rounded-[40px] flex gap-2.5 w-full lg:w-none items-center justify-center">
                          <p className="font-bold font-primary">Book Now</p>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Card 4 */}
            <SwiperSlide>
              <div className="border-2 border-[#E4E6E8] rounded-4xl h-fit">
                <div>
                  <img
                    className="rounded-4xl relative"
                    src={image1}
                    alt="California Sunset Image"
                  />
                  <div className="absolute pt-5.5 pl-6.25 lg:-mt-68 -mt-75">
                    <p className="py-[4.5px] px-5.5 bg-white rounded-[50px] font-bold text-[14px] text-[#FAB326]">
                      Top Rated
                    </p>
                  </div>
                </div>

                <div className="rounded-4xl relative -mt-12 bg-white h-fit">
                  <div className="p-8">
                    <div>
                      <h3 className="font-extrabold text-2xl">
                        California Sunset/Twilight <br /> Boat Cruise
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
                        <button className="bg-[#0640c3] text-white text-[14px] py-2.25 px-4.5 rounded-[40px] flex gap-2.5 w-full lg:w-none items-center justify-center">
                          <p className="font-bold font-primary">Book Now</p>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>

    // </div>
  );
};

export default TopHotels;
