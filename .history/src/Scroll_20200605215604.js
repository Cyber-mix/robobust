import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', borde}}>
            {props.children}
        </div>
    );
};

export default Scroll