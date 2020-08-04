import React from "react";
import useWebAnimations from '@wellyshen/use-web-animations';
import '../App.css';
import dog from '../images/dog.gif';
import cat from '../images/cat.gif';


const Animations = () => {

    const { ref, playState, getAnimation } = useWebAnimations({
        keyframes: {
            transform: ['translate(0,0)'],
            transform: ['translate(1000px,0)'],
        },
        timing: {
            duration: 2000,
            iterations: Infinity,
            easing: 'ease-in-out',
        },
        autoPlay: false,
        // playbackRate: 0.2,
    })


    const play = () => {
        getAnimation().play();
    };

    const pause = () => {
        getAnimation().pause();
    };

    const cancel = () => {
        getAnimation().cancel();
    };



    return (
        <div className='main-container'>
            <h1>Cat and Dog Animation</h1>
            <button className='button' onClick={play}>Play</button>
            <button className='button' onClick={pause}>Pause</button>
            <button className='button' onClick={cancel}>Reset</button>

            <div className='target' >
                <div className='animation' >
                    <div ref={ref} className='moving-container'>
                        <img className='dogImage' src={dog} alt="" />
                        <img className='catImage' src={cat} alt="" />
                    </div>
                </div>
            </div>
            <hr/>
            <h1>Made by : <a href="https://github.com/developer-junaid" target='_blank'> Junaid Qureshi</a>  </h1><br/><br/>
        </div>
    )
}

export default Animations;