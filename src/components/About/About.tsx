import React, { useContext, useState, useEffect } from 'react';
// import Fade from 'react-reveal/Fade';
// import { Container, Row, Col } from 'react-bootstrap';
// import Title from '../Title/Title';
// import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/data';

export default function About() {
  const context = useContext(PortfolioContext);

  // const [isDesktop, setIsDesktop] = useState(false);
  // const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    console.log('context', context);
    // if (window.innerWidth > 769) {
    //   setIsDesktop(true);
    //   setIsMobile(false);
    // } else {
    //   setIsMobile(true);
    //   setIsDesktop(false);
    // }
  }, [context]);

  return (
    <section id="about">
      Hello!
      {/* <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree || 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'}
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a target="_blank" rel="noopener noreferrer" className="cta-btn cta-btn--resume" href={resume}>
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container> */}
    </section>
  );
}
