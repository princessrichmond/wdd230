document.addEventListener('DOMContentLoaded', function(){
    var lastModifiedDate = document.lastModified;
    var lastModifiedElement = document.getElementById("lastModified");
    lastModifiedElement.textContent += " " + lastModifiedDate;
}); 

document.getElementById('hamburger').addEventListener('click', function () {
    document.getElementById('nav').classList.toggle('active');
});

document.getElementById('darkmode-toggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('nav').classList.toggle('dark-mode');
    document.querySelector('main').classList.toggle('dark-mode');
    document.querySelector('footer').classList.toggle('dark-mode');
});