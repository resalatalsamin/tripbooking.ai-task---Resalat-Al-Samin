import React from "react";
import Banner from "../Banner/Banner";
import Search from "../Search/Search";
import TrustedBy from "../TrustedBy/TrustedBy";
import PopularDestinations from "../PopularDestinations/PopularDestinations";
import FeaturedTours from "../FeaturedTours/FeaturedTours";
import Offers from "../Offers/Offers";
import TopHotels from "../TopHotels/TopHotels";
import Deals from "../Deals/Deals";
import Payment from "../Payment/Payment";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <TrustedBy></TrustedBy>
      <Search></Search>
      <PopularDestinations></PopularDestinations>
      <FeaturedTours></FeaturedTours>
      <Offers></Offers>
      <TopHotels></TopHotels>
      <Deals></Deals>
      <Payment></Payment>
    </div>
  );
};

export default Home;
