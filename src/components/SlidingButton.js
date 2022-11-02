import React, {useState} from 'react';

// Utils
import styled, { keyframes } from "styled-components";

// Create a random number between [-300,-100] U [100, 300]
const getRandomArbitrary = (min = 100, max = 300) => {
    const sign = Math.random() // will determine wether the number will be negative or positive
    if (sign >= 0.5){ // sign < 0.5 => -1 and sign >= 0.5 => 1
        return Math.random() * (max - min) + min;
    }
    else {
        return (Math.random() * (max - min) + min) * (-1);
    }
  }

// Here we create a button styled components, who need to be declared outside of the functionnal component
// I use transform CSS attribute to move the button around
// Thanks to the getRandomArbitrary function we can create randomness in the button's mouvment
// The button can got either right or left randomly 
// The distance from it's origin is random too
const Slide = styled.button`
    display: inline-block;
    padding: 1rem 1rem;
    font-size: 1.2rem;
    background: ${({shouldSlide}) => (shouldSlide ? '#d7dadd' : '#1fae51')};
    
    transform: translateX(
    ${({ state, shouldSlide }) => (state === true && shouldSlide === true ? getRandomArbitrary() : 0)}px
    );
`;

// In the following commented section, we have the solution of the sliding button using CSS Animations
// I have choose not to use this part, because it didn't render very well
// You can still try it by uncommenting this part and commenting the styled.button component.

// const slide = keyframes`
// from {
//     transform: translateX(0px);
// }

// to {
//     transform: translateX(${getRandomArbitrary()}px);
// }
// `;

// const Slide = styled.button`
//     display: inline-block;
//     padding: 1rem 1rem;
//     font-size: 1.2rem;
//     animation-name: ${({ shouldSlide }) => (shouldSlide === true ? slide : '')};
//     animation-play-state: ${({ state }) => (state === true ? 'running' : 'paused')}px;
//     animation-duration: 1s;
//     animation-timing-function: linear;
//     animation-direction: alternate;
//     animation-fill-mode: both;
// `;

const SlidingButton = (props) => {
    // Local State
    const [sliding, setSliding] = useState(false);
    const [showCongrats, setShowCongrats] = useState(false);

    const submit = () => {
        console.log('feygery')
        setShowCongrats(true)
    }

    return (
        <>
            <Slide 
                shouldSlide={props.shouldSlide}
                state={sliding}
                onMouseEnter={() => setSliding(!sliding)}
                onClick={() => submit()}
            >
                {props.label}
            </Slide>
            {showCongrats &&<div>Congrats, you've hit that button !</div>}
        </>
    );  
}

export default SlidingButton