/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-indent */
import * as React from 'react';
import "react-bootstrap";
import "../styles.css";
import Accordion from 'react-bootstrap/Accordion'

function ProjAccordion(props) {

    return (
        <div>
            <Accordion>
                <Accordion.Item className="projAbout" eventKey="0">
                    <Accordion.Header className="accordionHeader"><strong>Dashboard</strong></Accordion.Header>
                    <Accordion.Body className="accordionBody">
                        {props.info5}
                    </Accordion.Body>
                    <Accordion.Body className="accordionBody py-3">
                        {props.info3}
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header className="accordionHeader"><strong>Google_Analytics</strong></Accordion.Header>
                    <Accordion.Body className="accordionBody">
                        <div>{props.info2}</div>

                    </Accordion.Body>
                    <Accordion.Body className="accordionBody py-3">
                        {props.info4}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}

export default ProjAccordion;