import React from "react";
import { ProjectsList } from "../data/ProjectsList";
import "aos/dist/aos.css";

const Portfolio = () => {
  return (
    <>
      <section className="portfolio" id="portfolio">
        <div className="portfolio-heading">
          <h3 className="section-heading">My Projects</h3>
          <h1 className="section-heading-two">Completed Projects</h1>
        </div>
        <div
          className="projects-wrapper center"
          data-aos="fade-up"
          data-aos-once="false"
        >
          {ProjectsList.map(({ id, fade, name, tech, img, link, hub }) => (
            <div
              className="project"
              key={id}
              data-aos={fade}
              data-aos-once="false"
            >
              <div className="project-text">
                <h2 className="project-name">{name}</h2>
                <h4 className="project-technologies">{tech}</h4>
              </div>
              <div>{img}</div>
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                Live View
              </a>

              <a
                href={hub}
                target="_blank"
                rel="noreferrer"
                className="project-hub"
              >
                Code
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Portfolio;
