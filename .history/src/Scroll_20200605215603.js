import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', bo}}>
            {props.children}
        </div>
    );
};

export default Scroll