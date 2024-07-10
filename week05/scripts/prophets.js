const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

// async function getProphetData(url) {
//     const response = await fetch(url);
//     const data = await response.json();
//     // console.table(data.prophets); // temporary testing of data retreival
//     displayProphets(data.prophets); 
// }
async function getProphetData(url) {
  try {
      const response = await fetch(url);
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      const data = await response.json();
      displayProphets(data.prophets); // Call displayProphets function with prophets data
  } catch (error) {
      console.error('Error fetching data:', error);
  }
}

getProphetData(url);
  
const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');

        // Build the h2 content to show the prophet's full name
        fullName.textContent = `${prophet.name} (${prophet.birthdate})`; 
        // Build the image portrait by setting all the relevant attributes
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        // Append the section(card) with the created elements
        card.appendChild(fullName); //fill in the blank
        card.appendChild(portrait);

        cards.appendChild(card);
    });
};
