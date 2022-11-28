import Img1 from "../Images/project-1.jpg";
import Img2 from "../Images/project-2.jpg";
import Img3 from "../Images/project-0.jpg";
import Img4 from "../Images/project-4.jpg";
import Img5 from "../Images/project-0.jpg";

export const ProjectsList = [
  {
    id: 1,
    name: "Cooking App",
    tech: "ReactJS-API",
    img: <img src={Img1} alt="Photoshop" className="project-img"></img>,
    link: "https://cooking-app-1.netlify.app",
    hub: "https://github.com/MobileDev-Chad/CookingApp",
    fade: "fade-up",
  },
  {
    id: 2,
    name: "Paypal Clone",
    tech: "HTML/CSS/Javascript",
    img: <img src={Img2} alt="Photoshop" className="project-img"></img>,
    link: "http://paypal-clone1.netlify.app",
    hub: "https://github.com/MobileDev-Chad/Paypal-Clone",
    fade: "fade-down",
  },
  {
    id: 3,
    name: "Super Smash Bros. Website Clone",
    tech: "ReactJS-TypeScript",
    img: <img src={Img3} alt="Photoshop" className="project-img"></img>,
    link: "https://events-near-me-3.netlify.app",
    hub: "https://github.com/MobileDev-Chad/Events-Near-Me",
    fade: "fade-up",
  },
  {
    id: 4,
    name: "Pokemon Starters",
    tech: "HTML/CSS/Javascript",
    img: <img src={Img4} alt="Photoshop" className="project-img"></img>,
    link: "https://pokemon-starters-4.netlify.app",
    hub: "https://github.com/MobileDev-Chad/Pokemon-Starters",
    fade: "fade-down",
  },
  {
    id: 5,
    name: "SmashBros. Social Media",
    tech: "ReactJS-SocketI.O",
    img: <img src={Img5} alt="Photoshop" className="project-img"></img>,
    link: "https://smash-bros-cart-5.netlify.app",
    hub: "https://github.com/MobileDev-Chad/SmashBros.-Ecommerce",
    fade: "fade-up",
  },
];

export default ProjectsList;
