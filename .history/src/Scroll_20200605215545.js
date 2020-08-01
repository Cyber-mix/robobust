import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scr'}}>
            {props.children}
        </div>
    );
};

export default Scroll