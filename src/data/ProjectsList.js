import Img1 from "../Images/project-1.jpg";
// import Img2 from "../Images/project-2.jpg";
import Img3 from "../Images/project-3.jpg";
import Img4 from "../Images/project-4.jpg";
import Img5 from "../Images/project-5.jpg";

export const ProjectsList = [
  {
    id: 3,
    name: "SmashBros. Clone",
    tech: "React-TypeScript-SplideJS",
    img: <img src={Img5} alt="Photoshop" className="project-img"></img>,
    link: "https://smash-website-clone.netlify.app/",
    hub: "https://github.com/MobileDev-Chad/SmashBros.-Website-Clone",
    fade: "fade-up",
  },
  {
    id: 5,
    name: "SmashBros. Ecomm",
    tech: "ReactJS-ReduxTK",
    img: <img src={Img3} alt="Photoshop" className="project-img"></img>,
    link: "https://smashbros-ecomm.netlify.app",
    hub: "https://github.com/MobileDev-Chad/SmashBros.-Ecommerce",
    fade: "fade-up",
  },
  // {
  //   id: 2,
  //   name: "FrontEnd Prep.",
  //   tech: "React TS API",
  //   img: <img src={Img2} alt="Photoshop" className="project-img"></img>,
  //   link: "http://paypal-clone1.netlify.app",
  //   hub: "https://github.com/MobileDev-Chad/Paypal-Clone",
  //   fade: "fade-down",
  // },
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
    id: 4,
    name: "Pokemon Starters",
    tech: "HTML/CSS/JavaScript",
    img: <img src={Img4} alt="Photoshop" className="project-img"></img>,
    link: "https://pokemon-starters-4.netlify.app",
    hub: "https://github.com/MobileDev-Chad/Pokemon-Starters",
    fade: "fade-up",
  },
];

export default ProjectsList;
