import React from "react";
import google from "../../../assets/social/Link1.png";
import apple from "../../../assets/social/Link.png";

const Deals = () => {
  return (
    <div className="mt-54.5 lg:max-w-11/12 max-w-11/12 mx-auto font-primary bg-[#0640C3] h-125.25 text-white font-primary">
      <div className="pt-28.75 ml-70.75">
        <h3 className="font-bold text-[40px]">
          Find the Best Travel <br /> Deals Instantly with AI!
        </h3>
        <p className="mt-3.5 mb-12">
          No more endless searching! Our AI scans thousands of travel packages
          to find you the best <br /> deals - Whether it’s a budget getaway or a
          luxury escape, we’ll match you with the best deal <br /> — instantly!
        </p>
        <div className="lg:flex gap-6">
          <img className="w-[195.77px] h-15" src={google} alt="google" />

          <img className="w-[195.77px] h-15" src={apple} alt="google" />
        </div>
      </div>
    </div>
  );
};

export default Deals;
