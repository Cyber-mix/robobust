import React from 'react';

const Card = (props) => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='terra' src='https://robohash.org/terra?size=200x200' />
            <div>
                <h2>props.name</h2>
                <p className=''>Terra@gmail.com</p>
            </div>
        </div>
    );
}

export default Card;