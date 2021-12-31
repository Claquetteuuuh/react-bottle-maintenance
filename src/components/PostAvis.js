import React, { useEffect, useRef } from 'react';

import {gsap} from "gsap"
const PostAvis = () => {
    let form = useRef()
    let state = {
        avis : '',
        pseudo: '',
        id: '',
    }

    const handleAvisChange = (e) =>{
        state.avis = e.target.value
    }

    const handlePseudoChange = (e) =>{
        state.pseudo = e.target.value
    }

    const handleIdChange = (e) =>{
        state.id = e.target.value
    }

    const handleSubmit = (e) => {
        alert(`${state.avis} ${state.pseudo} ${state.id}`)
    }

    useEffect(() => {
        gsap.from(form, {
            width:0,
            duration: 1.5
        })
    }, []);

    return (
        <div className='post-avis' ref={el => {form = el}}>
            <form className='avis-form' onSubmit={handleSubmit}>
                <input type="text" onChange={handleAvisChange} name='avis' className='push-avis' placeholder='exemple: Bon service, je vous le recommande'/>
                <input type="text" onChange={handlePseudoChange} name='pseudo' className='push-pseudo' placeholder='exemple: Jean-luc'/>
                <input type="text" onChange={handleIdChange} name='id' className='push-id' placeholder='exemple: 12DS9398'/>
                <input type="submit" className='sub'/>
            </form>
        </div>
    );
};

export default PostAvis;