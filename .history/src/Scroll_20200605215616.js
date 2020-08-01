import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '1px sol'}}>
            {props.children}
        </div>
    );
};

export default Scroll