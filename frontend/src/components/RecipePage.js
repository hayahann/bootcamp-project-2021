import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function RecipePage() {

    let { id } = useParams();
    const [newIngredient, setNewIngredient] = useState('');//add this
    const [newStep, setNewStep] = useState('');//add this
    const [recipe, setRecipe] = useState();
    const [buttonPressed, setButtonPressed] = useState(false);

    async function addIngredient() {
      setButtonPressed(true);
      let ingredient = document.getElementById("newIngredient").value;
      const rawResponse = await fetch('http://localhost:3001/api/recipe/' + id + '/ingredient', {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({newIngredient : ingredient})
      });
      setButtonPressed(false);
      setNewIngredient('');
    }

    async function removeIngredient(item) {
      setButtonPressed(true);
      let index = (recipe.ingredientList).indexOf(item);
      if (index !== -1) {
        (recipe.ingredientList).splice(index, 1);
      }
      const rawResponse = await fetch('http://localhost:3001/api/recipe/' + id + '/ingredient', {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({updatedRecipe : recipe})
      });
      setButtonPressed(false);
    }

    async function addStep() {
      setButtonPressed(true);
      let step = document.getElementById("newStep").value;
      const rawResponse = await fetch('http://localhost:3001/api/recipe/' + id + '/instruction', {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({newInstruction : step})
      });
      setButtonPressed(false);
      setNewStep('');
    }

    async function removeStep(item) {
      setButtonPressed(true);
      let index = (recipe.steps).indexOf(item);
      if (index !== -1) {
        (recipe.steps).splice(index, 1);
      }
      const rawResponse = await fetch('http://localhost:3001/api/recipe/' + id + '/instruction', {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({updatedRecipe : recipe})
      });
      setButtonPressed(false);
    }

  useEffect(() => {
    const loadRecipe = () => {
       fetch('http://localhost:3001/api/recipe/' + id)
      .then(res => res.json())
      .then(jsondata => setRecipe(jsondata));
    }
    loadRecipe();
  }, [id, buttonPressed])

  return (
    <>
    <div id="page">
    <div class="recipe-intro outline outline-2.25 outline-offset-5 outline-black">
    {/* {recipe ? (<h2 id="name" class="recipe-title pl-5 pt-5 font-bold text-8xl abc">{recipe.recipeName}</h2>) : (<p>Loading</p>)} */}
            <div class="p-8">
            {recipe ? (<h2 id="name" class="recipe-title font-bold text-8xl abc">{recipe.recipeName}</h2>) : (<p>Loading</p>)}
            {recipe ? (<p id="description" class="mt-2">{recipe.previewDesc}</p>) : (<p>Loading</p>)}
            {recipe ? (<img class="recipe-image h-full w-full object-cover md:h-full md:w-48" src={recipe.recipeImage} alt="recipe-image"></img>) : (<p>Loading</p>)}
            </div>
        <div id="ingredients">
        <h4 class="small-header text-3xl mb-3 pt-2">Ingredients</h4>
            <ul id="ingred-list" class="pl-10 py-1">
                {recipe ? (recipe.ingredientList).map(ing => <li class="list-disc">{ing} <button type="button" class="px-1 text-white bg-red-600 rounded text-red text-sm opacity-0 hover:opacity-100" onClick={() => removeIngredient(ing)}>x</button></li> ) : (<p>Loading</p>)}
            </ul>
          <div class="md:flex">
            <input 
              id="newIngredient" 
              className="form-element" 
              class="mt-4 ml-4 placeholder:italic placeholder:text-gray-400 block bg-white border border-gray-300 rounded-md py-1 pl-1 pr-10 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="2 cups of spinach" 
              value={newIngredient} // add newIngredient as the input's value
              onChange={(e) => { // this event handler updates the value of newIngredient
              setNewIngredient(e.target.value);
              }}
            />
            <button class="px-2 mt-4 ml-1 text-gray-500 bg-gray-400 rounded text-red text-xl border border-gray-500 add-button" onClick={addIngredient}>+</button>
          </div>
        </div>
        <div id="steps">
        <h4 class="small-header text-3xl mb-3 pt-2">Instructions</h4>
            <ol id="step-list" class="pl-10 py-1">
              {recipe ?  (recipe.steps).map(s => <li class="list-decimal">{s} <button type="button" class="px-1 text-white bg-red-600 rounded text-red text-sm opacity-0 hover:opacity-100" onClick={() => removeStep(s)}>x</button></li>) : (<p>Loading</p>)}
            </ol>

            <div class="md:flex mb-5">
            <input 
              id="newStep" 
              class="mt-4 ml-4 placeholder:italic placeholder:text-gray-400 block bg-white border border-gray-300 rounded-md py-1 pl-1 pr-10 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" 
              placeholder="Stir mixture thoroughly..." 
              value={newStep} // add newIngredient as the input's value
              onChange={(e) => { // this event handler updates the value of newIngredient
              setNewStep(e.target.value);
              }}
            />
             <button class="px-2 mt-4 ml-1 text-gray-500 bg-gray-400 rounded text-red text-xl border border-gray-500 add-button" onClick={addStep}>+</button>
            </div>
       </div>
    </div>
    </div>
    </>
  );
}

export default RecipePage;