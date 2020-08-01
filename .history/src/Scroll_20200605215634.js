import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '1px solid black', heght: '500x'}}>
            {props.children}
        </div>
    );
};

export default Scroll