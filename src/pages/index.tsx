import React from 'react';
import { Helmet } from 'react-helmet';

// Components
// import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
// import Projects from '../components/Projects/Projects';
// import Contact from '../components/Contact/Contact';
// import Footer from '../components/Footer/Footer';

// Mock
import head from '../mock/head.json';
import hero from '../mock/hero.json';
import about from '../mock/about.json';
import projects from '../mock/projects.json';
import contact from '../mock/contact.json';
import footer from '../mock/footer.json';

// Providers
import { DataProvider } from '../context/data';
import { UiProvider } from '../components/Providers/UiProvider';

const data = {
  head,
  hero,
  about,
  projects,
  contact,
  footer,
};

export default () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{head.title}</title>
      <html lang={head.lang} />
      <meta name="description" content={head.description} />
    </Helmet>

    <DataProvider value={data}>
      <UiProvider>
        {/* <Hero /> */}
        <About />
        {/* <Projects />
        <Contact />
        <Footer /> */}
      </UiProvider>
    </DataProvider>
  </>
);
