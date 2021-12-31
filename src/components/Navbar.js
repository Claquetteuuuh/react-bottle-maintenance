import React, { useRef, useEffect } from 'react';

import {gsap} from 'gsap'

const Navbar = () => {

    let navbar = useRef()

    useEffect(() => {
        document.addEventListener("scroll", ()=>{
            if(window.scrollY > 869){
                navbar.style.background = "white"
            }
            else{
                navbar.style.background = "none"
            }
        })
    }, []);

    return (
        <div className="navbar" ref={el => {navbar = el}}>
            <div className="left">
                    <a href="#"><img src="https://media.discordapp.net/attachments/925488781262463066/925812012817219584/bouteille_2.png?width=675&height=675" alt="logo"/></a>
            </div>
            <div className="right">
                <ul>
                    <li className="nav-link"><a href="#presentation" >Presentation</a></li>
                    <li className="nav-link"><a href="#why-us" >Nous choisir</a></li>
                    <li className="nav-link"><a href="/avis" >Avis</a></li>
                    <li className="contact">
                        <div className="hovered">
                            <p>Contact</p> 
                            <img src="https://cdn.discordapp.com/attachments/785188133419221022/925680525602062396/arrow_1.png" alt="arrow"/>
                        </div>
                        <div className="hided">
                            <p><a href="">Discord</a></p>
                            <p><a href="">Phone</a></p>
                            <p><a href="">Instagram</a></p>
                            <p><a href="">Facebook</a></p>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default Navbar;