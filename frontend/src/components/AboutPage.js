// import './pages.css';

function AboutPage() {
  return (
    <div class="bio">
    <div class="md:flex">
      <div class="md:shrink-0">
      <img class="h-48 w-50" src="./AVATAR.jpg" alt="recipe-image"></img>
      </div>
      <div class="p-8">
      <div class="ml-10 uppercase tracking-wide text-5xl text-indigo-500 font-bold">BIO</div>
      <a href="#" class="ml-10 block mt-1 text-lg leading-tight font-medium text-black">"Cozinheira de <strike>mão</strike> barriga cheia"</a>
      <p class="ml-10 mt-2 text-gray-500">Hannah was born and raised in Sao Paulo, Brazil. She is not the greatest cook,
             but Hannah is very enthusiastic about sharing her favorite recipes from home.
              Join her in this gastronomical adventure and learn a little about Brazil on the way.</p>
      </div>
    </div>

    </div>
  );
}

export default AboutPage;