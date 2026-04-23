import React from "react";
import Banner from "../Banner/Banner";
import Search from "../Search/Search";
import TrustedBy from "../TrustedBy/TrustedBy";
import PopularDestinations from "../PopularDestinations/PopularDestinations";
import FeaturedTours from "../FeaturedTours/FeaturedTours";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <TrustedBy></TrustedBy>
      <Search></Search>
      <PopularDestinations></PopularDestinations>
      <FeaturedTours></FeaturedTours>
    </div>
  );
};

export default Home;
