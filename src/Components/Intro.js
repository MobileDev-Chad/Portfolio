import React from "react";
import "aos/dist/aos.css";

const Intro = () => {
  return (
    <>
      <section
        className="intro center"
        id="intro"
        data-aos="fade-up"
        data-aos-once="false"
      >
        <div className="intro-text">
          <h2>Hi, I'm a FrontEnd</h2>
          <h1
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          >
            Developer
          </h1>
          <h4>based in Mississauga, ON.</h4>
          <a href="#portfolio">
            <button className="intro-btn">View My Works</button>
          </a>

          <div className="intro-icon">
            <i className="fas fa-arrow-down"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default Intro;
