/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
/* eslint-disable spaced-comment */
/* eslint-disable no-shadow */
/* eslint-disable no-plusplus */
/* eslint-disable prefer-const */
/* eslint-disable react/jsx-fragments */
import React, { useEffect, useState } from 'react';
// import swal2 from '@sweetalert/with-react';
import Tilt from "react-tilt";
import PiPic from '../../images/profile.jpg'
import TypeEffect from './TypeEffect';
import ProjectImg from "../Image/ProjectImg";


function PiTyper() {
    let piNum = Math.PI;

    const [fullPi, setFullPi] = useState({
        pi: String(piNum),
        piCheck: '',
        segmentIndex: 0,
        highlight: false,
        mismatch: false,
        missMatchCount: 0,
    });

    const [window] = useState({
        piWindow: fullPi.pi,
    });

    const [submitField, setSubmitField] = useState({
        submit: '',
        currentKey: '',
    });

    let setKey = (key) => {
        setSubmitField((prevState) => {
            let pd = { ...prevState };
            pd.currentKey = key;
            return pd;
        });
    };

    let clearDeck = () => {
        setFullPi((prevState) => {
            let pd = { ...prevState };
            pd.missMatchCount = 0;
            pd.segmentIndex = 0;
            pd.piCheck = '';

            return pd;
        });
    };

    useEffect(() => {
        if (fullPi.missMatchCount >= 3) {
            clearDeck();
        }

        let keyDownHandler = (e) => {
            // console.log("buttonpressed", e.key)
            if (e.key === 'Escape') {
                e.preventDefault();
                clearDeck();
            }
            if (Number(e.key) || e.key === '.') {
                //console.log('its a number', Number(e.key));
                setKey(e.key);
            }
        };

        document.addEventListener('keydown', keyDownHandler);

        if (window.piWindow[fullPi.segmentIndex] === submitField.currentKey) {
            setFullPi((prevState) => {
                let pd = { ...prevState };
                pd.highlight = true;

                setTimeout(() => {
                    setFullPi((prevState) => {
                        let pd = { ...prevState };
                        pd.highlight = false;
                        return pd;
                    });
                }, 400);

                pd.piCheck += submitField.currentKey;
                pd.segmentIndex++;

                return pd;
            });
        }
        if (window.piWindow[fullPi.segmentIndex] !== submitField.currentKey) {
            setFullPi((prevState) => {
                let pd = { ...prevState };
                setFullPi((prevState) => {
                    let pd = { ...prevState };
                    pd.highlight = false;
                    pd.mismatch = true;
                    pd.missMatchCount++;
                    setTimeout(() => {
                        setFullPi((prevState) => {
                            let pd = { ...prevState };
                            pd.mismatch = false;
                            return pd;
                        });
                    }, 400);
                    return pd;
                });
                return pd;
            });
        }
        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        };
    }, [submitField.currentKey]);

    const BlinkingComponent = ({ highlighting, mismatching }) => (
        <div className="row">
            <h1 className={highlighting ? ' highlight1' : mismatching ? 'highlight2' : 'fontWhite'}>
                {'>>'}
                {fullPi.piCheck}
                {'<<'}
            </h1>
        </div>
    );

    return (
        <React.Fragment>
            <div className="project-wrapper__image">
                <a
                    href={"PiPic" || "#!"}
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
                            <ProjectImg alt="picture here" filename={PiPic} />
                        </div>
                    </Tilt>
                </a>
            </div>
            <TypeEffect />
            <BlinkingComponent
                className="col-md-auto"
                highlighting={fullPi.highlight}
                mismatching={fullPi.mismatch}
            />
        </React.Fragment>
    );
}

export default PiTyper;
