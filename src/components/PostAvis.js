import React from 'react';

const PostAvis = () => {
    return (
        <div className='post-avis'>
            <div className='avis-form'>
                <input type="text" className='push-pseudo'/>
                <input type="text" className='push-avis'/>
                <input type="submit" className='sub'/>
            </div>
        </div>
    );
};

export default PostAvis;