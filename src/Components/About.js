import React from "react";
import { InfoCard } from "../data/InfoCard";
import { SkillsList } from "../data/SkillsList";
import "aos/dist/aos.css";

const About = () => {
  return (
    <>
      <section className="about section" id="about">
        <div className="about-heading">
          <h3 className="section-heading">About Me</h3>
          <h1 className="section-heading-two">Know Me More</h1>
        </div>

        <div className="about-text">
          <div className="about-text-left">
            Hi, I'm <b>Chadwin Allotey</b>
            <p data-aos="fade-up" data-aos-once="true">
              I'm a junior developer with a passion for learning. I enjoy
              developing simple, clean and slick websites that provide real
              value to the end user. As a new developer I hope you can take the
              time to look through my portfolio and determine if I would be a
              suitible candidate for your company. I'm eager to learn and grow
              as I start my journey in this new career path.
            </p>
          </div>

          <div className="about-text-right">
            <i class="fab fa-leanpub"></i>
            Knowledge is <br />
            <b>Power!</b>
          </div>
        </div>

        <div className="about-info">
          {InfoCard.map(({ id, title, text }) => (
            <div className="iCard" key={id}>
              <ul>
                <li>{title}</li>
                <li>{text}</li>
              </ul>
            </div>
          ))}
        </div>

        <ul className="skills-container">
          {SkillsList.map(({ id, icon, heading }) => (
            <li
              className="skills-title"
              data-aos="fade-up"
              data-aos-once="false"
              key={id}
            >
              <div>{icon}</div>
              <p>{heading}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default About;
