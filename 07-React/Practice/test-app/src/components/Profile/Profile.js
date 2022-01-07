import React, { Profile } from "react";
import AboutMe from '../AboutMe/AboutMe.js';
import Hobbies from '../Hobbies/Hobbies.js';
import Food from '../Food/Food.js';

function Profile(props){
    return (
        <div>
        <AboutMe fname = {name}/>
        <Hobbies hobby = {hobby}/>
        <Food food = {food}/>
        </div>
    );
}

export default Profile