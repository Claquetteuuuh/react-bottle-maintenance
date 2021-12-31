import React, { useRef, useEffect } from 'react';
import "../styles/Home.sass"
import Navbar from './Navbar';

import {gsap} from 'gsap'
import PostAvis from './PostAvis';

const Title = () => {

    let title = useRef(null)
    let slogan = useRef(null)
    let nameInSlogan = useRef(null)

    useEffect(() => {
        gsap.from(title, {
            duration: 1,
            opacity: 0,
            y: -100,
            delay: 0.3,
        })

        gsap.from(slogan, {
            duration: 1,
            opacity: 0,
            y: 100,
            delay: 0.8,
        })

        gsap.to(nameInSlogan, {
            duration: 0.2,
            color: "#FA4D02",
            delay: 1.8,
        })

    }, []);

    return (
        <div className="container">
            <div className="collapsed">

            </div>
            <Navbar></Navbar>

            <div className="texts">
                <h1 className="project-name" ref={el => {title = el}}>Bottle maintenance</h1>
                <p className="slogan" ref={el => {slogan = el}}>Chouchoutez vos machines avec <span className="bold-maintenance" ref={el => {nameInSlogan = el}}>Bottle maintenance</span> !</p>
            </div>

            {/* <PostAvis/> */}
            

        </div>
    );
};

export default Title;