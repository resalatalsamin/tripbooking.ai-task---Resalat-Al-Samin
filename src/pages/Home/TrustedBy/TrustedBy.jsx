import React from "react";
import casa from "../../../assets/trusted/casa fill.png";
import egyptair from "../../../assets/trusted/egyptAir.svg.png";
import cubana from "../../../assets/trusted/cubana.svg fill.png";
import delta from "../../../assets/trusted/delta.svg fill.png";
import ata from "../../../assets/trusted/ata.svg fill.png";
import westjet from "../../../assets/trusted/westJet.svg fill.png";
import abxair from "../../../assets/trusted/abx.svg fill.png";

const TrustedBy = () => {
  return (
    <div className="bg-[#E8ECF9] font-primary mb-24 ">
      <div className="lg:pt-43.25 pt-43.25  lg:max-w-10/12 max-w-11/12 mx-auto">
        <div className="lg:flex items-center justify-between pb-15">
          <div className="md:text-center text-center lg:text-left">
            <h4 className="font-extrabold text-2xl mb-[9.5px]">Trusted by</h4>
            <p className="font-medium text-[12px] text-[#737373]">
              We are a trusted partner of airlines, payment <br /> gateways, and
              travel services around the world.
            </p>
          </div>
          {/* Cards */}
          <div className="grid lg:grid-cols-7 grid-cols-3 md:grid-cols-5 gap-6">
            <div className=" py-[22.19px] px-[9.69px] bg-white rounded-[10px] border-2 border-[#E4E6E8] w-25 h-17.5 flex items-center justify-center">
              <img className="" src={casa} alt="" />
            </div>
            <div className="py-[22.19px] px-[9.69px] bg-white rounded-[10px] border-2 border-[#E4E6E8] w-25 h-17.5 flex items-center justify-center">
              <img className="" src={egyptair} alt="" />
            </div>
            <div className="py-[22.19px] px-[9.69px] bg-white rounded-[10px] border-2 border-[#E4E6E8] w-25 h-17.5 flex items-center justify-center">
              <img className="" src={cubana} alt="" />
            </div>
            <div className="py-[22.19px] px-[9.69px] bg-white rounded-[10px] border-2 border-[#E4E6E8] w-25 h-17.5 flex items-center justify-center">
              <img className="" src={delta} alt="" />
            </div>
            <div className="py-[22.19px] px-[9.69px] bg-white rounded-[10px] border-2 border-[#E4E6E8] w-25 h-17.5 flex items-center justify-center">
              <img className="" src={ata} alt="" />
            </div>
            <div className="py-[22.19px] px-[9.69px] bg-white rounded-[10px] border-2 border-[#E4E6E8] w-25 h-17.5 flex items-center justify-center">
              <img className="" src={westjet} alt="" />
            </div>
            <div className="py-[22.19px] px-[9.69px] bg-white rounded-[10px] border-2 border-[#E4E6E8] w-25 h-17.5 flex items-center justify-center">
              <img className="" src={abxair} alt="Abx Air Logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
