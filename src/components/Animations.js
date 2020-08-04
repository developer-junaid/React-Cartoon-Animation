import React from "react";
import useWebAnimations, { bounce } from '@wellyshen/use-web-animations';
import '../App.css';

const Animations = () => {

    const { ref, playState, getAnimation } = useWebAnimations({...bounce})

    return (
        <div>
            <div className='target' ref={ref}>
                Hello Junaid
            </div>
            <h3>Current State: {playState}</h3>
            <button className='button' onClick={() => getAnimation().play()}>Play</button>
            <button className='button' onClick={() => getAnimation().pause()}>Pause</button>
        </div>
    )
}

export default Animations;