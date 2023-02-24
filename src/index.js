
let characters = [];
let next = "";

const getCharacters = async (endPoint="https://rickandmortyapi.com/api/character") => {
    console.log(endPoint);
    const response = await fetch(endPoint);
    const data = await response.json();
    // next = data.info.next;

    return data;
};

const createCard = (character) => {

    
    return ( `<arcticle  class="flex flex-col gap-4 bg-stone-50 py-5 px-6 border">
    <figure>
        <img src=${character.image} alt="">
    </figure>
    <div class="flex flex-col gap-2 ">
        <h1 class="text-stone-800 font-extrabold text-2xl truncate">${character.name}</h1>
        <div class="flex gap-2 items-center ">
            <span class="${`inline-block w-5 h-5 ${character.status === 'Alive' ?  'bg-green-500' : 'bg-red-500'} rounded-full`}"></span>
            <p class="text-stone-700 font-medium text-base"></span>
                <span>${character.species}</span>-
               <span>${character.status}</span></p>
        </div>
        <div class="flex flex-col justify-between  gap-5 mt-3">
        <div>
            <h4 class="text-stone-500 text-sm">last known location:</h4>
            <h2 class="text-stone-700 font-semibold">${character.location.name}</h2>
        </div>
        <div>
            <h4 class="text-stone-500 text-sm">last known location:</h4>
            <h2 class="text-stone-700 font-semibold">${character.origin.name}</h2>
        </div>
        </div>

        
    </div>
 </arcticle>`);
};

const CardsElement = document.getElementById("cards");
const buttonPlace = document.getElementById("btn-place");
 

 getCharacters().then((data) => {

data.results.map(element => {

CardsElement.innerHTML += createCard(element);
    
});

buttonPlace.innerHTML = `<button onclick='${getCharacters(data.info.next)}' id="btn" class="btn bg-neutral-800 px-6 py-3 rounded font-bold text-2xl text-stone-100">Next Page</button>`;

   
});


   







