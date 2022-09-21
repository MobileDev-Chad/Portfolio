import Svg1 from "../Images/html.png";
import Svg2 from "../Images/css-3.svg";
import Svg3 from "../Images/javascript.svg";
import Svg4 from "../Images/typescript.svg";
import Svg5 from "../Images/react.svg";
import Svg6 from "../Images/react-native.svg";
import Svg7 from "../Images/redux.svg";
import Svg8 from "../Images/git.svg";
import Svg9 from "../Images/mongodb.svg";
import Svg10 from "../Images/firebase.svg";

export const SkillsList = [
  {
    icon: <img src={Svg1} alt="HTML" height="50" width="50"></img>,
    heading: "HTML",
    id: 1,
  },
  {
    icon: <img src={Svg2} alt="CSS" height="50" width="50"></img>,

    heading: "CSS",
    id: 2,
  },
  {
    icon: <img src={Svg3} alt="JavaScript" height="50" width="50"></img>,
    heading: "JavaScript",
    id: 4,
  },
  {
    icon: <img src={Svg4} alt="TypeScript" height="50" width="50"></img>,
    heading: "TypeScript",
    id: 5,
  },
  {
    icon: <img src={Svg5} alt="React" height="50" width="50"></img>,

    heading: "React",
    id: 6,
  },
  {
    icon: <img src={Svg6} alt="React Native" height="50" width="50"></img>,
    id: 7,
  },
  {
    icon: <img src={Svg7} alt="Redux" height="50" width="50"></img>,
    heading: "Redux",
    id: 8,
  },
  {
    icon: <img src={Svg8} alt="Git" height="50" width="50"></img>,
    heading: "Git",
    id: 9,
  },
  {
    icon: <img src={Svg9} alt="MongoDb" height="50" width="50"></img>,
    heading: "MongoDb",
    id: 10,
  },

  {
    icon: <i className="fas fa-code" style={{ color: "#eee" }}></i>,
    heading: "Rest API",
    id: 11,
  },
  {
    icon: <img src={Svg10} alt="Firebase" height="50" width="50"></img>,
    heading: "Firebase",
    id: 12,
  },
];
