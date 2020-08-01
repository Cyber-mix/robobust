import React from 'react';

const Card = () => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow'>
            <img alt='terra' src='https://robohash.org/terra?size=200x200' />
            <div>
                <h2>Terra</h2>
                <p className=''>Terra@gmail.com</p>
            </div>
        </div>
    );
}

export default Card;