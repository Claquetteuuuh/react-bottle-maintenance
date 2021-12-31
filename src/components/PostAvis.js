import React, { useEffect, useRef } from 'react';

import {gsap} from "gsap"
const PostAvis = () => {
    let form = useRef()

    useEffect(() => {
        gsap.from(form, {
            width:0,
            duration: 1.5
        })
    }, []);

    return (
        <div className='post-avis' ref={el => {form = el}}>
            <form className='avis-form'>
                <input type="text" className='push-avis' placeholder='exemple: Bon service, je vous le recommande'/>
                <input type="text" className='push-pseudo' placeholder='exemple: Jean-luc'/>
                <input type="text" className='push-id' placeholder='exemple: 12DS9398'/>
                <input type="submit" className='sub'/>
            </form>
        </div>
    );
};

export default PostAvis;