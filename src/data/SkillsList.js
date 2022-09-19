import { SiFirebase } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiExpress } from "react-icons/si";

export const SkillsList = [
  {
    icon: <i className="devicon-html5-plain" style={{ color: "#ff6200" }}></i>,
    heading: "HTML",
    id: 1,
  },
  {
    icon: <i className="devicon-css3-plain" style={{ color: "#0036ff" }}></i>,
    heading: "CSS",
    id: 2,
  },

  {
    icon: (
      <i className="devicon-javascript-plain" style={{ color: "#ffd800" }}></i>
    ),
    heading: "JavaScript",
    id: 3,
  },
  {
    icon: (
      <i className="devicon-typescript-plain" style={{ color: "#3178c6" }}></i>
    ),
    heading: "TypeScript",
    id: 4,
  },
  {
    icon: (
      <i className="devicon-react-original" style={{ color: "#00d8ff" }}></i>
    ),
    heading: "React",
    id: 5,
  },
  {
    icon: <img src={Svg3} alt="Firebase" height="50" width="50"></img>,

    id: 6,
  },
  {
    icon: <img src={Svg1} alt="Redux" height="50" width="50"></img>,
    heading: "Redux",
    id: 7,
  },
  {
    icon: <i className="devicon-git-plain" style={{ color: "#ff001e" }}></i>,
    heading: "Git",
    id: 8,
  },
  {
    icon: (
      <i className="devicon-bootstrap-plain" style={{ color: "#9000ff" }}></i>
    ),
    heading: "Bootstrap",
    id: 9,
  },

  {
    icon: <i className="fas fa-code" style={{ color: "#eee" }}></i>,
    heading: "Rest API",
    id: 10,
  },
  {
    icon: <SiFirebase />,
    id: 11,
  },
];
