import React from 'react'

const SearchBox = ({searchChange}) => {
        return (
            <div className='pa2'>
                <input className="pa3 ba"
                style = {{backgroundColor: '#d4d4d4'}}
                type="search"
                 placeholder="Search Anime"
                     onChange={searchChange}
                 />
            </div>
        )
}

export default SearchBox;
