import React from "react";
import './dogCard.css' 

export default function DogCard({dog}) {
    return (
        <div className="dogCard">
            <img src={dog} alt={dog} />
        </div>
    )
}