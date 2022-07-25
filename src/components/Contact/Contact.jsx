/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-fragments */
import React, { useContext } from "react";
import Fade from "react-reveal/Fade";
import { Container } from "react-bootstrap";
import PortfolioContext from "../../context/context";
import Title from "../Title/Title";
import Modal from "./InfoModal"

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta } = contact;




  return (
    <React.Fragment>
      <section id="contact">
        <Container>
          <Title title="Contact" />
          <Fade bottom duration={1000} delay={800} distance="30px">
            <div className="contact-wrapper">
              <p className="contact-wrapper__text">
                {cta || "Would you like to work with me? Awesome!"}
              </p>
              <Modal />
            </div>
          </Fade>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Contact;
