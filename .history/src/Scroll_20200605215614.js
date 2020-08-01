import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '1p'}}>
            {props.children}
        </div>
    );
};

export default Scroll