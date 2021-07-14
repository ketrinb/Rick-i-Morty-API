fetch("https://rickandmortyapi.com/api/character")
.then(response => response.json())
.then(data => Cards(data.results))

function Cards(charactersArray){ 
 const cardContainer = document.querySelector('#card-container')
charactersArray.forEach(character => {
    cardContainer.innerHTML = cardContainer.innerHTML + 
   `<div class="card">
   <h2> ${character.name}</h2>
    <img src=${character.image}></img> 
    <p><span><b> Species:</b></span> ${character.species}</p>
    <p><span><b>Location:</b></span> ${character.location.name}</p>
    <p><span><b>Episode:</b></span> ${character.episode}</p>
    <p><span><b>Created:</b></span> ${character.created}</p>` 
})
}
