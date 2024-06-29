document.addEventListener('DOMContentLoaded', function(){
    var lastModifiedDate = document.lastModified;
    var lastModifiedElement = document.getElementById("lastModified");
    lastModifiedElement.textContent += " " + lastModifiedDate;
}); 


document.getElementById('darkmode-toggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('nav').classList.toggle('dark-mode');
    document.querySelector('main').classList.toggle('dark-mode');
    document.querySelector('footer').classList.toggle('dark-mode');
});


document.getElementById('hamburger').addEventListener('click', function () {
    document.getElementById('nav').classList.toggle('active');
    document.getElementById('close').style.display = 'block';
    document.getElementById('hamburger').style.display = 'none';
});

document.getElementById('close').addEventListener('click', function () {
    document.getElementById('nav').classList.toggle('active');
    document.getElementById('close').style.display = 'none';
    document.getElementById('hamburger').style.display = 'block';
});

document.addEventListener('DOMContentLoaded', function() {
    const temperature = 75;
    document.getElementById('temperature').textContent = temperature;
});

const visitsDisplay = document.querySelector(".visits");
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}
numVisits++;
localStorage.setItem("numVisits-ls", numVisits);

