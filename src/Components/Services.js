import React, { Component } from "react";
import {
  FaCocktail,
  FaHiking,
  FaShuttleVan,
  FaSwimmingPool,
} from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni quas tempora, voluptatibus hic quasi ad?",
      },
      {
        icon: <FaHiking />,
        title: "endlass hiking and fun",
        info:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni quas tempora, voluptatibus hic quasi ad?",
      },
      {
        icon: <FaShuttleVan />,
        title: "free Shuttle",
        info:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni quas tempora, voluptatibus hic quasi ad?",
      },
      {
        icon: <FaSwimmingPool />,
        title: "hot swimming pool",
        info:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni quas tempora, voluptatibus hic quasi ad?",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
