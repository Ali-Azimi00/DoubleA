/* eslint-disable prettier/prettier */
/* eslint-disable prefer-const */
/* eslint-disable react/jsx-fragments */
/* eslint-disable react/jsx-indent */
import React from "react";
import { useTypingText } from "./useTypingText";

function TypeEffect() {

    let typingSpeed = 50;
    let wordLifeSpan = 200000;

    setTimeout(() => {

    })

    const { word } = useTypingText(
        ["Go!"],
        typingSpeed,
        wordLifeSpan
    );

    return (
        <React.Fragment>
            <h1 className="fontWhite col-md-auto">Ready... Set... {word}</h1>
        </React.Fragment>
    )
}

export default TypeEffect