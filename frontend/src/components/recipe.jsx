import React from 'react';
import {Link} from 'react-router-dom';
import './recipe.css';
import '../dist/output.css';

export default function Recipe(props){
    return(
        <>
        <div class="w-45 mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <Link to={"/Recipe/"+props.name} id="pudim">
        <div class="md:flex">
            <div class="md:shrink-0">
            <img class="h-full w-full object-cover md:h-full md:w-48" src={props.imgSrc} alt="recipe-image"></img>
            </div>
            <div class="p-8">
            <div class="uppercase tracking-wide text-2xl text-indigo-500 font-semibold">{props.name}</div>
            <p class="mt-2 text-gray-500">{props.desc}</p>
            </div>
        </div>
        </Link>
        </div>
        <br/>
        </>
    )
}