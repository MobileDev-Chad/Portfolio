import Img1 from "../Images/project-1.jpg";
import Img2 from "../Images/project-2.jpg";
import Img3 from "../Images/project-3.jpg";
import Img5 from "../Images/project-5.jpg";

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
  // {
  //   id: 2,
  //   name: "Paypal Clone",
  //   tech: "HTML/CSS/Javascript",
  //   img: <img src={Img2} alt="Photoshop" className="project-img"></img>,
  //   link: "http://paypal-clone1.netlify.app",
  //   hub: "https://github.com/MobileDev-Chad/Paypal-Clone",
  //   fade: "fade-down",
  // },
  {
    id: 3,
    name: "SmashBros. Clone",
    tech: "ReactJS-TypeScript",
    img: <img src={Img3} alt="Photoshop" className="project-img"></img>,
    link: "https://smash-website-clone.netlify.app/",
    hub: "https://github.com/MobileDev-Chad/SmashBros.-Website-Clone",
    fade: "fade-up",
  },
  {
    id: 5,
    name: "SmashBros. Ecomm",
    tech: "ReactJS-ReduxTK",
    img: <img src={Img5} alt="Photoshop" className="project-img"></img>,
    link: "https://smashbros-ecomm.netlify.app",
    hub: "https://github.com/MobileDev-Chad/SmashBros.-Ecommerce",
    fade: "fade-up",
  },
];

export default ProjectsList;
