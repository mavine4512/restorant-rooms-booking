import React from "react";
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import { Link } from "react-router-dom";
import RoomContainer from "../Components/RoomContainer";

const Rooms = () => {
  return (
    <React.Fragment>
      <Hero hero="roomsHero">
        <Banner title="namTech rooms">
          <Link to="/" className="btn-primary">
            Return to home
          </Link>
        </Banner>
      </Hero>
      <RoomContainer />
    </React.Fragment>
  );
};
export default Rooms;
