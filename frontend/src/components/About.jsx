import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            At IIT Tirupati, culinary delight awaits, where every meal is a symphony of flavors and freshness.From aromatic biryanis to spicy dosas, our kitchen crafts each dish with love and expertise.
            Savor the richness of South Indian cuisine with our authentic sambar and crispy vadas.
            Indulge in global tastes with our diverse menu, offering everything from Italian pasta to Mexican tacos.
             Fuel your studies with nourishing meals that not only satisfy your taste buds but also invigorate your mind and body.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
