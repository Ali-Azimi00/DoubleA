/* eslint-disable react/jsx-fragments */
import React, { useEffect, useState } from "react";
// import { Routes, Route } from "react-router-dom";
// import Switch from "react-switch"
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import "./styles.css";
// import Game from "../pages/game";

import { PortfolioProvider } from "../context/context";

import {
  heroData,
  aboutData,
  projectsData,
  contactData,
  footerData,
} from "../mock/data";

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <React.Fragment>
      <PortfolioProvider value={{ hero, about, projects, contact, footer }}>
        <Home path="/" />
        <Contact />
        <Footer />
      </PortfolioProvider>
    </React.Fragment>
  );
}

export default App;
