import React from "react";
import "./MorningSection.css";

import bgImage from "../assets/Images/coffee-land.jpg";
import cup from "../assets/Images/coffeecup.png";
import beans from "../assets/Images/wings.png";

const MorningSection = () => {
  return (
    <section
      className="morning"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="morning-overlay">

        <div className="morning-content">

          {/* LEFT TEXT */}
          <div className="morning-text">
            <h2>
              Get a chance to have an <br />
              <span>Amazing morning</span>
            </h2>

            <p>
              We are giving you one time opportunity to
              experience a better life with coffee.
            </p>

            <button className="morning-btn">
              Order Now
            </button>
          </div>

          {/* RIGHT IMAGES */}
          <div className="morning-images">
            <img src={cup} alt="Coffee Cup" className="cup-img" />
          </div>

        </div>

        {/* Beans Positioned Relative To Section */}
        <img src={beans} alt="Coffee Beans" className="beans-img" />

      </div>
    </section>
  );
};

export default MorningSection;