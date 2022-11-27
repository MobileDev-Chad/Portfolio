import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "aos/dist/aos.css";

const Contact = () => {
  const [state, handleSubmit] = useForm("contactMe");
 
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

        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" id="name" placeholder="Name*" />
          <input id="email" type="email" name="email" placeholder="Email*" />
          <ValidationError style={{color:"white"}}field="email" prefix="Email" errors={state.errors} />
          <textarea
            id="message"
            name="message"
            placeholder="Message*"
          ></textarea>

          <input
            type="submit"
            className="contact-form-btn"
            disabled={state.submitting}
            rel="noopener noreferrer"
          />
          <ValidationError errors={state.errors} />
          <div className="form-submitted">{state.succeeded && 'Submited - Thanks!'}</div>
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
              href="https://github.com/MobileDev-Chad"
              target="_blank"
              title="Go to Chadwin's Github"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a
              href="mailto:chadwin.allotey@gmail.com"
              target="_blank"
              title="Email Chad"
              rel="noopener noreferrer"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </li>
        </ul>
        <p>-Developed by Chadwin Allotey{new Date().getFullYear()}-</p>
      </footer>
    </>
  );
};

export default Contact;
