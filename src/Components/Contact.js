import React from "react";
import emailjs from "emailjs-com";
import "aos/dist/aos.css";
import Swal from "sweetalert2";

const SERVICE_ID = "service_wd7l01q";
const TEMPLATE_ID = "template_tdl50w9";
const PUBLIC_KEY = "YW6KbIh59quZFVzmN";

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };
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
          <label htmlFor="name" style={{ color: focused ? "blue" : "white" }}>
            Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name*"
            required
          />

          <label htmlFor="email" style={{ color: focused ? "blue" : "white" }}>
            Email:
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email*"
            required
          />

          <label
            htmlFor="message"
            style={{ color: focused ? "blue" : "white" }}
          >
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Message*"
            required
          ></textarea>

          <input
            type="submit"
            className="contact-form-btn"
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
        <p>-Developed by Chadwin Allotey 2022-</p>
      </footer>
    </>
  );
};

export default Contact;
