import React from "react";
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import { Link } from "react-router-dom";
import Services from "../Components/Services";

import FeturedRooms from "../Components/FeaturedRooms";

export default function Home() {
  return (
    <React.Fragment>
      <Hero>
        <Banner
          title="namTach rooms"
          subtitle=" luxurious rooms starting from $200"
        >
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeturedRooms />
    </React.Fragment>
  );
}
