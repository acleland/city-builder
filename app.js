// import functions and grab DOM elements
import { makeStatsString } from './utils.js';

const climateSelect = document.getElementById('climate-selector');
const landscapeSelect = document.getElementById('landscape-selector');
const landscapeImg = document.getElementById('landscapeImg');
const architectureSelect = document.getElementById('architecture-selector');
const climateImg = document.getElementById('climateImg');
const architectureImg = document.getElementById('architectureImg');
const sloganInput = document.getElementById('sloganInput');
const sloganButton = document.getElementById('sloganButton');
const sloganList = document.getElementById('sloganList');
const statDisplay = document.getElementById('statDisplay');

// let state
let climateCount = 0;
let landscapeCount = 0;
let architectureCount = 0;
let slogans = [];


// set event listeners 

climateSelect.addEventListener('change', () => {
    climateImg.src = `./assets/climate-${climateSelect.value}.jpeg`;
    climateCount++;
    displayStats();
});

landscapeSelect.addEventListener('change', () => {
    landscapeImg.src = `./assets/landscape-${landscapeSelect.value}.jpeg`;
    landscapeCount++;
    displayStats();
});

architectureSelect.addEventListener('change', () => {
    architectureImg.src = `./assets/architecture-${architectureSelect.value}.jpeg`;
    architectureCount++;
    displayStats();
});

// if user presses enter key trigger button press
sloganInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        sloganButton.click();
    } 
});

sloganButton.addEventListener('click', () => {
    // get the value of the slogan input
    const slogan = sloganInput.value;
    // push the new slogan to the slogan array in state
    slogans.push(slogan);
    // clear out the form input's value so it's empty to the user
    sloganInput.value = '';
    // update the dom to show the new slogans (refactor to/call display slogans to do this work)
    displaySlogans();

});



function displayStats() {
    statDisplay.innerText = makeStatsString(climateCount, landscapeCount, architectureCount);
}

function displaySlogans() {
    // clear out the DOM for the currently displayed catchphrases
    sloganList.innerHTML = '';
    sloganList.classList.add('catchphrase');
    // loop through each slogan in state
    for (let slogan of slogans) {
        // create an HTML element with the slogan as its text content
        let li = document.createElement('li');
        li.innerText = slogan;
        // and append that HTML element to the cleared-out DOM
        sloganList.appendChild(li);
    }  
}