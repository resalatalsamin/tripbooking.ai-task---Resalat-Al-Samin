import React from "react";
import { Outlet } from "react-router";
import Footer from "../pages/Home/Shared/Footer/Footer";
import Navbar from "../pages/Home/Shared/Navbar/Navbar";
import Offer from "../pages/Home/Shared/Offer/Offer";

const RootLayout = () => {
  return (
    <div>
      <Offer></Offer>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
