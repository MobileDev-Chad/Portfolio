import React from "react";
import "aos/dist/aos.css";

const Contact = () => {
  return (
    <>
      <section
        className="contact"
        id="contact"
        data-aos="fade-up"
        data-aos-once="false"
      >
        <div className="contact-heading">
          <h3 className="section-heading">Contact</h3>
          <h1 className="section-heading-two">Get in touch</h1>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Name*" />
          <input type="email" placeholder="Email*" />
          <textarea placeholder="Message*"></textarea>
          <input
            type="submit"
            value="Submit"
            className="contact-form-btn"
            target="_blank"
            form="contactForm"
            rel="noopener noreferrer"
          />
        </form>
      </section>
      <footer className="center">
        <ul className="socialIcons">
          <li>
            <a
              href="https://www.linkedin.com/in/chadwin-allotey-5271a4165/"
              target="_blank"
              title="Go to Chadwin's Linkedin"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/WebDev-Chad"
              target="_blank"
              title="Go to Chadwin's Github"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a
              href="mailto:chadwin.allotey@gmail.com.com"
              target="_blank"
              title="Email Chad"
              rel="noopener noreferrer"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </li>
        </ul>
        <p>-Developed by Chadwin Allotey 2021-</p>
      </footer>
    </>
  );
};

export default Contact;
