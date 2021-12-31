import React, { useRef, useEffect } from 'react';
import imageSvg from '../img/gwadamap.svg'

import {gsap} from 'gsap'

const WhyUs = () => {

    let imgMap = useRef()
    let toggle1 = 0

    useEffect(() => {
        window.addEventListener('scroll', ()=>{
            if(window.scrollY > 600){
                if(toggle1 == 0){
                    gsap.from(imgMap, {
                        duration: 0.6,
                        x: -100,
                    })
                    gsap.to(imgMap, {
                        duration: 0.6,
                        opacity: 1
                    })
                    toggle1 = 1
                }
            }else{
                gsap.to(imgMap, {
                    duration: 0.3,
                    opacity: 0,
                })
                toggle1 = 0
            }

        })
    }, []);


    return (
        <div id="why-us">
        <div className="why-us-container">
            <div className="why-us-left">
                <img src={imageSvg} alt="map guadeloupe" ref={el => {imgMap = el}}/>
            </div>
            <div className="why-us-right">
                <div className="left-bis">
                    <h4>Nous avons de l'experience !</h4>
                    <p>Bottle maintenance a ouvert ses portes en 2004, ce qui fait d'elle une entreprise qui à su s'adapter a ses clients et évoluer.</p>
                </div>
                <div className="right-bis">
                    <h4>Nous sommes proche de vous</h4>
                    <p>Bottle maintenance propose pas moins de 8 centres un peu partout en guadeloupe, de ce fait nous pourrons intervenir peu importe votre localisation.</p>
                </div>
                <div className="left-bis">
                    <h4>Nous sommes ouvert 6 jours sur 7</h4>
                    <p>Nos centres et nos lignes téléphoniques sont à votre écoute 6 jours sur 7, si un probleme apparait, nous serons la pour vous.</p>
                </div>
                <div className="right-bis">
                    <h4>Nous avons de multiples partenaires</h4>
                    <p>Bottle maintenance dispose de plusieurs partenaires nous permettant de nous fournir des pièces manquante rapidement et efficacement.</p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default WhyUs;