/* eslint-disable react/jsx-fragments */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-indent */
import React, { useState, useEffect } from 'react';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Projects from '../Projects/Projects';


import { PortfolioProvider } from '../../context/context';

import { heroData, aboutData, projectsData, contactData, footerData } from '../../mock/data';

function Home() {
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
                <div className="row">
                    <div className="col">
                        <Hero />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <About />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Projects />
                    </div>
                </div>
            </PortfolioProvider>
        </React.Fragment>
    );
}

export default Home;
