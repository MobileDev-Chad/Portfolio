import Svg1 from "../Images/redux.png";
import Svg2 from "../Images/firebase.svg";
import Svg3 from "../Images/react-native.svg";

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
      <i className="devicon-sass-original" style={{ color: "#ff00f6" }}></i>
    ),
    heading: "SASS",
    id: 3,
  },
  {
    icon: (
      <i className="devicon-javascript-plain" style={{ color: "#ffd800" }}></i>
    ),
    heading: "JavaScript",
    id: 4,
  },
  {
    icon: (
      <i className="devicon-typescript-plain" style={{ color: "#3178c6" }}></i>
    ),
    heading: "TypeScript",
    id: 5,
  },
  {
    icon: (
      <i className="devicon-react-original" style={{ color: "#00d8ff" }}></i>
    ),
    heading: "React",
    id: 6,
  },
  {
    icon: <img src={Svg3} alt="React Native" height="50" width="50"></img>,
    id: 7,
  },
  {
    icon: <img src={Svg1} alt="Redux" height="50" width="50"></img>,
    heading: "Redux",
    id: 8,
  },
  {
    icon: <i className="devicon-git-plain" style={{ color: "#ff001e" }}></i>,
    heading: "Git",
    id: 9,
  },
  {
    icon: (
      <i className="devicon-bootstrap-plain" style={{ color: "#9000ff" }}></i>
    ),
    heading: "Bootstrap",
    id: 10,
  },

  {
    icon: <i className="fas fa-code" style={{ color: "#eee" }}></i>,
    heading: "Rest API",
    id: 11,
  },
  {
    icon: <img src={Svg2} alt="Firebase" height="50" width="50"></img>,
    heading: "Firebase",
    id: 12,
  },
];
