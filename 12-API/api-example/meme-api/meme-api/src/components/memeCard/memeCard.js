import React from "react";
import './memeCard.css';

export default function MemeCard(props) {
    return (
        <div className="memeCard">
            <img src={props.meme} alt={props.meme}/>
        </div>

    )
}