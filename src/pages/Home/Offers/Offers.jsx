import React from "react";
import offer1 from "../../../assets/offers/Image.png";
import offer2 from "../../../assets/offers/Image1.png";
import offer3 from "../../../assets/offers/Image2.png";
import rightArrow from "../../../assets/offers/Vector.svg";

const Offers = () => {
  return (
    <div className="mt-22.5 lg:max-w-10/12 max-w-11/12 mx-auto font-primary">
      <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-7.5">
        {/* Card 1 */}
        <div>
          <img
            className="relative"
            src={offer1}
            alt="Make every trip special"
          />
          <div className="absolute -mt-42 font-extrabold text-2xl text-white">
            <h4 className="lg:ml-50 ml-45 mb-[35.5px]">
              We Make Every <br /> Trip Special
            </h4>
            <button className="py-1.75 px-5.75 bg-[#FAB326] text-white rounded-[50px] lg:ml-58 ml-52 flex gap-[13.24px]">
              <p className="font-bold text-[12px]">View More</p>
              <img className="" src={rightArrow} alt="Right Arrow" />
            </button>
          </div>
        </div>
        {/* Card 2 */}
        <div>
          <img
            className="relative"
            src={offer2}
            alt="Make every trip special"
          />
          <div className="absolute -mt-48 font-extrabold text-2xl  pl-7.5">
            <p className="font-bold mb-[6.5px]">Limited Offers</p>
            <h4 className="mb-[23.5px]">
              Buy 1, Get 1 Free <br /> Attractions
            </h4>
            <button className="py-1.75 px-5.75 bg-[#FAB326] text-white rounded-[50px]  flex gap-[13.24px]">
              <p className="font-bold text-[12px]">View More</p>
              <img className="" src={rightArrow} alt="Right Arrow" />
            </button>
          </div>
        </div>
        {/* Card 3 */}
        <div>
          <img
            className="relative"
            src={offer3}
            alt="Make every trip special"
          />
          <div className="absolute -mt-53 font-extrabold text-2xl  pl-7.5">
            <p className="font-bold mb-[6.5px] py-0.5 px-2.5 bg-white rounded-sm">
              Limited Offers
            </p>
            <h4 className="mb-1.25 py-0.5 px-2.5 bg-white rounded-sm">
              Buy 1, Get 1 Free <br />
            </h4>
            <h5 className="mb-[23.5px] py-0.5 px-2.5 bg-white rounded-sm">
              Attractions
            </h5>
            <button className="py-1.75 px-5.75 bg-[#FAB326] text-white rounded-[50px]  flex gap-[13.24px]">
              <p className="font-bold text-[12px]">View More</p>
              <img className="" src={rightArrow} alt="Right Arrow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
