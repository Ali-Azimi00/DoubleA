/* eslint-disable react/jsx-fragments */
/* eslint-disable spaced-comment */
/* eslint-disable react/jsx-boolean-value */
import React, { useContext, useState, useEffect } from "react";
// import { Container } from 'react-bootstrap';
import Shake from "react-reveal/Shake";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";
import ParticlesBg from "particles-bg";
import PortfolioContext from "../../context/context";

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <React.Fragment>
      <container>
        <section id="hero" className="jumbotron" style={{ border: "thin" }}>
          <div className="row justify-content-md-center">
            <div className="col-9">
              <Bounce
                left={isDesktop}
                bottom={isMobile}
                duration={3000}
                delay={500}
                distance="300px"
              >
                <h1 className="hero-title text-light">
                  {title || "Hi, my name is"}{" "}
                  <span className="text-color-main">{name || "Ali Azimi"}</span>
                  <br />
                </h1>
              </Bounce>
              <Bounce
                left={isDesktop}
                bottom={isMobile}
                duration={3000}
                delay={2000}
                distance="300px"
              >
                <h1 className="hero-title text-light">
                  {subtitle || "I'm a Full-Stack Software Engineer"}
                </h1>
              </Bounce>
              <Bounce
                left={isDesktop}
                bottom={isMobile}
                duration={3000}
                delay={2500}
                distance="300px"
              >
                <Shake
                  left={isDesktop}
                  bottom={isMobile}
                  duration={1000}
                  delay={9500}
                >
                  <p className="hero-cta">
                    <span className="cta-btn cta-btn--hero">
                      <Link to="about" smooth duration={3500}>
                        {cta || "Know more"}
                      </Link>
                    </span>
                  </p>
                </Shake>
              </Bounce>
            </div>
            <div className="row align-items-end">
              <div className="col-12">
                <Fade
                  right={isDesktop}
                  bottom={isMobile}
                  duration={3000}
                  delay={5000}
                  distance="10px"
                >
                  <p className={isDesktop ? "cta-btnDesktop" : "cta-btnMobile"}>
                    <a href="/game" className="cta-btn2 cta-btn--hero2">
                      {" "}
                      Games
                    </a>
                  </p>
                </Fade>
                <Fade
                  right={isDesktop}
                  bottom={isMobile}
                  duration={3000}
                  delay={5500}
                  distance="100px"
                >
                  <p className={isDesktop ? "cta-btnDesktop" : "cta-btnMobile"}>
                    <div className="cta-spacer">
                      <a href="about" className="cta-btn2 cta-btn--hero2">
                        <div>Analytics</div>
                      </a>
                    </div>
                  </p>
                </Fade>
                <Fade
                  right={isDesktop}
                  bottom={isMobile}
                  duration={3000}
                  delay={6000}
                  distance="100px"
                >
                  <p className={isDesktop ? "cta-btnDesktop" : "cta-btnMobile"}>
                    <div className="cta-spacer">
                      <div className="cta-spacer">
                        <a href="about" className="cta-btn2 cta-btn--hero2">
                          <div>More_Fun_Stuff</div>
                        </a>
                      </div>
                    </div>
                  </p>
                </Fade>
              </div>
            </div>
          </div>
          <ParticlesBg
            color="#080707"
            num={150}
            type="lines"
            bg={true}
            position="absolute"
          />
        </section>
      </container>
    </React.Fragment>
  );
};

export default Header;
