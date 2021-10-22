import Img1 from "../Images/project-1.jpg";
import Img2 from "../Images/project-2.jpg";
import Img3 from "../Images/project-3.jpg";
import Img4 from "../Images/project-4.jpg";
import Img5 from "../Images/project-5.jpg";

export const ProjectsList = [
  {
    id: 1,
    name: "Cooking App",
    tech: "ReactJS-API",
    img: <img src={Img1} alt="Photoshop" className="project-img"></img>,
    link: "https://cooking-app-1.netlify.app",
    hub: "https://github.com/WebDev-Chad/CookingApp",
    fade: "fade-up",
  },
  {
    id: 2,
    name: "Paypal Clone",
    tech: "HTML/CSS/Javascript",
    img: <img src={Img2} alt="Photoshop" className="project-img"></img>,
    link: "https://paypal-clone-2.netlify.app",
    hub: "https://github.com/WebDev-Chad/Paypal-Clone",
    fade: "fade-down",
  },
  {
    id: 3,
    name: "🚧Events Near Me🚧",
    tech: "ReactJS-API",
    img: <img src={Img3} alt="Photoshop" className="project-img"></img>,
    link: "https://events-near-me-3.netlify.app",
    hub: "https://github.com/WebDev-Chad/Events-Near-Me",
    fade: "fade-up",
  },
  {
    id: 4,
    name: "Pokemon Starters",
    tech: "HTML/CSS/Javascript",
    img: <img src={Img4} alt="Photoshop" className="project-img"></img>,
    link: "https://pokemon-starters-4.netlify.app",
    hub: "https://github.com/WebDev-Chad/Pokemon-Starters",
    fade: "fade-down",
  },
  {
    id: 5,
    name: "🚧SmashBros. Ecom🚧",
    tech: "ReactJS-Cart",
    img: <img src={Img5} alt="Photoshop" className="project-img"></img>,
    link: "https://www.youtube.com/watch?v=9Q7wy8r3i8w",
    hub: "https://www.youtube.com/watch?v=9Q7wy8r3i8w",
    fade: "fade-up",
  },
];

export default ProjectsList;