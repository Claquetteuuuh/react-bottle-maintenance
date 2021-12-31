import React, { useRef, useEffect } from 'react';
import imageSvg from '../img/svg-fix.svg'

import {gsap} from 'gsap'

const Presentation = () => {

    let imgFix = useRef(null);
    let toggle1 = 0

    useEffect(() => {
        window.addEventListener('scroll', ()=>{
            if(window.scrollY > 169){
                if(toggle1 == 0){
                    gsap.from(imgFix, {
                        duration: 0.6,
                        x: 150,
                    })
                    gsap.to(imgFix, {
                        duration: 0.6,
                        opacity: 1,
                    })
                    toggle1 = 1
                }
            }else{
                gsap.to(imgFix, {
                    duration: 0.3,
                    opacity: 0,
                })
                toggle1 = 0
            }


        })
       
    }, []);
            
    return (
        <div id="presentation">
            <div className="presentation-container">
                <div className="presentation-left">
                    <h3>Voici une courte présentation de Bottle Maintenance !</h3>
                    <p>Bottle Maintenace est une entreprise guadeloupéenne spécialiser dans l'entretien de vos machines. Nous effectuons différents types de maintenances, <span className="bold">préventive</span>, <span className="bold">améliorative</span>, <span className="bold">corrective</span>, du simple moteur, à l'entièreté de votre chaine de production, notre équipe saura <span className="bold">réparer</span>, <span className="bold">prévoir</span>, <span className="bold">dépanner</span> ou encore <span className="bold">nettoyer</span> vos machines.</p>
                </div>
                <div className="presentation-right">
                    <img src={imageSvg} alt="boy need tool" ref={el => {imgFix = el}}/>
                </div>
            </div>
        </div>
    );
};

export default Presentation;