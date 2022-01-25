import react, {useState} from 'react';
import './search.css'

export default function Search(props) {
    return(
        <div className='search'>
            <select onChange={e => props.handleChange(e)}>
                {props.option.map(memeName =><option key={Math.random(1)*1000000} value={memeName}>{memeName}</option> )}
            </select>
        </div>
    )
}