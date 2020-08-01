import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '1'}}>
            {props.children}
        </div>
    );
};

export default Scroll