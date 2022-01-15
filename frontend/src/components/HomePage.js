import React, { useEffect, useState } from 'react';
import Recipe from './recipe';
import './pages.css';
import '../dist/output.css';

function HomePage() {
  const [recipes, setRecipes] = useState();

  useEffect(() => {
    const loadRecipes = () => {
       fetch('http://localhost:3001/api/recipe')
      .then(res => res.json())
      .then(jsondata => setRecipes(jsondata));
    }
    loadRecipes();
  }, [])


  return (
    <>
      <div class="apple bg-fixed"><h1 id="title">Hannah's<br/>Survival<br/>Guide</h1></div>
      <div id="page">
      <h2 class="small-header text-5xl mt-10">Popular Recipes</h2>
      {recipes ? (recipes.map(recipe => 
        <Recipe 
          name={recipe.recipeName} 
          imgSrc={recipe.recipeImage} 
          desc={recipe.previewDesc}/>
      )) : <p>Loading ...</p>}
      
      </div>
    </>
  );
}

export default HomePage;