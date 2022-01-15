import React, { useState } from 'react';
import axios from "axios";

export default function Searchbar() {

    const [searchVal, setSearchVal] = useState('');
    const [result, setResult] = useState();

    async function searchRecipe() {
        const rawResponse = await axios.get('http://localhost:3001/api/recipe/' + searchVal)
        const end = await rawResponse.data;
        if (rawResponse.status==200){
          //window.location.replace("http://localhost:3000/Recipe/" + end.recipeName);
          console.log("whAT?? " + rawResponse.status + "+++++++++++++++++++++++++++++++++++==")
        }
        setSearchVal('');
        setResult('');
    }
  

  return (
    <>
        <input 
            id="searchbar" 
            class="placeholder:italic text-gray-400 placeholder:text-gray-400 block bg-white border border-gray-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="apple pie" 
            value={searchVal} 
            onChange={(e) => { // this event handler updates the value of newIngredient
            setSearchVal(e.target.value);
            }}
        />
        <button class="ml-2 rounded outline outline-offset-2 outline-1 ..." onClick={searchRecipe}>Search</button>
    </>
  );
} 