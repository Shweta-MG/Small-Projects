const searchFrom = document.querySelector('form')
const searchResult = document.querySelector('.itemContainer')
const container = document.querySelector('.container')
let searchQuery = '';

// Listening the event for search
const searchOutput = (event) => {
    event.preventDefault();
    searchQuery = event.target.querySelector('input').value;
    fetchAPI();
}
searchFrom.addEventListener('submit', searchOutput);

//fetching drecipes
const fetchAPI = async () => {
    //local variables
    const appID = '87d194bc';
    const appKey = '7fba2e68ff8f6cfb5e60672c28866ef8';
    const url = `https://api.edamam.com/search?q=${searchQuery}&app_id=${appID}&app_key=${appKey}&from=0&to=20`;

  
    //fetch
    const response = await fetch(url);
    const data = await response.json();
    generateHTML(data.hits);
}

const generateHTML = (outPut) => {
    let generatedHTML = '';
    outPut.map(outPut => {
        generatedHTML += `
        <div class="item">
        <img src='${outPut.recipe.image}' alt='${searchQuery.value}'>
        <div class="flexContainer">
            <h3 class="title">${outPut.recipe.label}</h3>
            <a href="${outPut.recipe.url}" target="_blank"><button>View Recipe</button></a>
        </div>
        <p class="itemData">Calories: ${outPut.recipe.calories.toFixed(2)}</p>                
        </div>        
        ` 
        searchResult.innerHTML = generatedHTML;
        
        //Emptying the input field
        document.querySelector('input').value = '';
    })
}