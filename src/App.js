import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Contract from "./Components/Contact";

const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Intro />
         <About/>  
         <Portfolio />   
      <Contract />   
    </div>
  );
};

export default App;
