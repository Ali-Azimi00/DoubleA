/* eslint-disable react/jsx-fragments */
/* eslint-disable spaced-comment */
/* eslint-disable react/jsx-boolean-value */
import React, { useContext, useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import Shake from "react-reveal/Shake";
import { Container, Row, Col } from "react-bootstrap";
// import ParticlesBg from 'particles-bg';
import Title from "../Title/Title";
import AboutImg from "../Image/AboutImg";
import PortfolioContext from "../../context/context";
import ResumePdf from "../AliAzimi-Software_Engineer.pdf";
//import Pdf from '../Image/AliAzimi-Software'

const About = () => {
  const { about } = useContext(PortfolioContext);
  const {
    img,
    paragraphOne,
    paragraphTwo,
    paragraphThree,
    paragraphFour,
    resume,
  } = about;

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

  const onResumeClick = () => {
    window.open(ResumePdf);
  };

  return (
    <React.Fragment>
      <section id="about">
        {/* <ParticlesBg color="#FFFFFF	" num={50} type="cobweb" bg={true} g="5" /> */}
        <Container>
          <Title title="About Me" />
          <Row className="about-wrapper">
            <Col>
              <Fade bottom duration={1000} delay={600} distance="30px">
                <div className="about-wrapper__image">
                  <AboutImg alt="profile picture" filename={img} />
                </div>
              </Fade>
            </Col>
            <Col>
              <Fade
                left={isDesktop}
                bottom={isMobile}
                duration={1000}
                delay={1000}
                distance="30px"
              >
                <div className="about-wrapper__info">
                  <p className="about-wrapper__info-text">
                    {paragraphOne ||
                      "...................."}
                  </p>
                  <p className="about-wrapper__info-text">
                    {paragraphTwo ||
                      "...................."}
                  </p>
                  <p className="about-wrapper__info-text">
                    {paragraphThree ||
                      "..................."}
                  </p>
                  <p className="about-wrapper__info-text">
                    {paragraphFour ||
                      "..................."}
                  </p>
                  {resume && (
                    <Shake delay={3500} duration={1000}>
                      <span className="d-flex mt-3">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn cta-btn--resume"
                          href="/"
                          onClick={onResumeClick}
                        >
                          Resume
                        </a>
                      </span>
                    </Shake>
                  )}
                </div>
              </Fade>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default About;
