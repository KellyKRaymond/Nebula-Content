import react, { useState } from 'react';
import './search.css'

export default function Search({ placeholder, handleFilter }) {
    return (
        <div className='search'>
            <div className='searchInputs'>
                <input type='text' placeholder={placeholder} onChange={handleFilter} />
                <div className='results'>
                </div>
            </div>
        </div>
    )
}
