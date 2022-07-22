/* eslint-disable react/jsx-fragments */
/* eslint-disable react/jsx-boolean-value */
import React, { useContext, useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import Tilt from "react-tilt";
import { Container, Row, Col } from "react-bootstrap";
import ParticlesBg from "particles-bg";
import PortfolioContext from "../../context/context";
import Title from "../Title/Title";
import ProjectImg from "../Image/ProjectImg";

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

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
      <section id="projects">
        <ParticlesBg color="#000000" v={2} num={100} type="cobweb" bg={true} />
        <Container>
          <div className="project-wrapper">
            <Title title="Latest Project" />
            {projects.map((project) => {
              const { title, info, info2, info3, info4, info5, url, repo, img, id } = project;

              return (
                <Row key={id}>
                  <Col lg={4} sm={12}>
                    <Fade
                      left={isDesktop}
                      bottom={isMobile}
                      duration={1000}
                      delay={500}
                      distance="30px"
                    >
                      <div className="project-wrapper__text">
                        <h3 className="project-wrapper__text-title">
                          {title || "Project Title"}
                        </h3>
                        <div>
                          <p>
                            {info || ""}
                          </p>
                          <p className="mb-4">{">>"}{info2 || ""}</p>
                          <p className="mb-4">{">>"}{info3 || ""}</p>
                          <p className="mb-4">{">>"}{info4 || ""}</p>
                          <p className="mb-4">{">>"}{info5 || ""}</p>

                        </div>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn cta-btn--hero"
                          href={url || "#!"}
                        >
                          See Live
                        </a>

                        {repo && (
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cta-btn text-color-main"
                            href={repo}
                          >
                            Source Code
                          </a>
                        )}
                      </div>
                    </Fade>
                  </Col>
                  <Col lg={8} sm={12}>
                    <Fade
                      right={isDesktop}
                      bottom={isMobile}
                      duration={1000}
                      delay={1000}
                      distance="30px"
                    >
                      <div className="project-wrapper__image">
                        <a
                          href={url || "#!"}
                          target="_blank"
                          aria-label="Project Link"
                          rel="noopener noreferrer"
                        >
                          <Tilt
                            options={{
                              reverse: false,
                              max: 8,
                              perspective: 1000,
                              scale: 1,
                              speed: 300,
                              transition: true,
                              axis: null,
                              reset: true,
                              easing: "cubic-bezier(.03,.98,.52,.99)",
                            }}
                          >
                            <div data-tilt className="thumbnail rounded">
                              <ProjectImg alt={title} filename={img} />
                            </div>
                          </Tilt>
                        </a>
                      </div>
                    </Fade>
                  </Col>
                </Row>
              );
            })}
          </div>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Projects;
