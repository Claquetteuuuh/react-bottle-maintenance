import React from 'react';

const PostAvis = () => {
    return (
        <div className='post-avis'>
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