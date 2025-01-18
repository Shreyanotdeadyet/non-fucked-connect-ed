import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/Parallax.css';

// Import images
import backgroundImage from '../assets/parallax_background.png';
import introImageSrc from '../assets/parallax_intro.png';

export default function Index() {
    const background = useRef(null);
    const introImage = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: true,
                start: "top",
                end: "+=500px",
            },
        });

        timeline
            .from(background.current, { clipPath: `inset(15%)` })
            .to(introImage.current, { height: "200px" }, 0);
    }, []);

    return (
        <div className="homeHeader">
            <div className="backgroundImage" ref={background}>
                <img 
                    src={backgroundImage} 
                    alt="background image" 
                    className="image"
                />
            </div>
            <div className="intro">
                <div ref={introImage} className="introImage">
                    <img 
                        src={introImageSrc} 
                        alt="intro image" 
                        className="image"
                    />
                </div>
                <h1>SMOOTH SCROLL</h1>
            </div>
        </div>
    );
}
