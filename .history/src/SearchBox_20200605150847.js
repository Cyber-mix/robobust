import React from 'react';

const SearchBox = (searchfield, searchCh) => {
    return (
        <div className='pa2'>
            <input 
            className='pa3 ba b--green bg-lightest-blue'
            type='search' 
            placeholder='Search Robots' 
            />
        </div>
    );
}

export default SearchBox;