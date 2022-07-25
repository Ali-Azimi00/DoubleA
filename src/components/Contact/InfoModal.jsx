/* eslint-disable react/jsx-indent-props */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-indent */
import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Body from './ModalBody'

const InfoModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <p
                className="cta-btn cta-btn--resume"
                onClick={handleShow}
            >
                My_Info
            </p>
            <div className=''>
                <Modal id="hero2" className="" show={show} onHide={handleClose}>
                    <Modal.Header className="modalCard">
                        <Modal.Title><h2 margin-left={10} className="">My_Card</h2></Modal.Title>
                    </Modal.Header>
                    <div className="modalBackground">
                        <Modal.Body><Body /></Modal.Body>
                    </div>
                    <Modal.Footer className="modalCard">
                        {/* <button type="button" className="modalBtn" onClick={handleClose}>
                        <strong>Close</strong>
                    </button> */}
                        <p
                            className="cta-btn cta-btn--hero "
                            onClick={handleClose}
                        >
                            Close
                        </p>
                    </Modal.Footer>
                </Modal>
            </div>

        </>
    );
}

export default InfoModal