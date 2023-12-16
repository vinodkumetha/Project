import React from "react";
import "./design-services-home.css"
const Designservices = (props) => {
  return (
    <div className="design-container">
      <div className="design-card">
        <img
          src="./assets/web-design-background-2.jpg"
          className="design-card-img"
          
          alt="img"
        />
        <div className="design-card-body">
          <h5 className="design-card-title ">
            <span className="title" style={{ color: "#1bbd36" }}>Web Designing</span> Services at
            Your Door Step
          </h5>
          <h6 className="design-card-subtitle">
            The design of a website holds the power to transform a mere visitor into a potential customer, paving the way for meaningful connections and conversions.
          </h6>
          <p className="design-card-text" >
            Create a splendid first impression with spectacular web designing
            services. ITinfo DigitalWeb Designing services at your Door step
            Absolutely! Making that first impression count is like opening a
            door to endless possibilities, and ITinfo Digital is the keymaster.
            The versatility to create websites for various niches is like having
            a diverse palette for an artist endless creativity!
          </p>
        </div>

      </div>

    </div>
  );
};

export default Designservices;