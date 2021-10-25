import React, { useEffect } from "react";
import AOS from "aos";
import { FormspreeProvider } from "@formspree/react";
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
      <About />
      <Portfolio />
      <FormspreeProvider project="1796487288750866044">
        <Contract />
      </FormspreeProvider>
      
    </div>
  );
};

export default App;
