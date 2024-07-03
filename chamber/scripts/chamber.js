// document.addEventListener('DOMContentLoaded', function(){
//     var lastModifiedDate = document.lastModified;
//     var lastModifiedElement = document.getElementById("lastModified");
//     lastModifiedElement.textContent += " " + lastModifiedDate;
// }); 
document.addEventListener('DOMContentLoaded', function() {
    var lastModifiedDate = document.lastModified;
    var lastModifiedElement = document.getElementById("lastModified");
    lastModifiedElement.textContent += " " + lastModifiedDate;

    document.querySelector('.hamburger').addEventListener('click', function() {
        document.querySelector('.navbar').classList.toggle('active');
    });
});


// Discover Page
document.addEventListener("DOMContentLoaded", function() {
    var lazyImages = [].slice.call(document.querySelectorAll("img[data-src]"));

    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.removeAttribute("data-src");
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    } else {
        lazyImages.forEach(function(lazyImage) {
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.removeAttribute("data-src");
        });
    }
});

// // today's date
// const theDateToday = new Date();
// todayElement.textContent = today;

document.addEventListener("DOMContentLoaded", function() {
// Function to format the visit message
function formatVisitMessage(daysDifference) {
    if (isNaN(daysDifference)) {
        return "Welcome! Let us know if you have any questions.";
    } else if (daysDifference < 1) {
        return "Back so soon! Awesome!";
    } else {
        if (daysDifference === 1) {
            return "You last visited 1 day ago.";
        } else {
            return `You last visited ${daysDifference} days ago.`;
        }
    }
}

// Retrieve last visit date from localStorage
let lastVisitDate = localStorage.getItem("lastVisitDate");
if (lastVisitDate) {
    lastVisitDate = new Date(lastVisitDate);
}

// Current date
const currentDate = new Date();

// Calculate days difference between visits
let daysDifference;
if (lastVisitDate) {
    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    daysDifference = Math.floor((currentDate - lastVisitDate) / millisecondsPerDay);
}

// Format and display the visit message
const visitMessageElement = document.getElementById("visitMessage");
visitMessageElement.textContent = formatVisitMessage(daysDifference);

// Update localStorage with current visit date
localStorage.setItem("lastVisitDate", currentDate.toISOString());

// Display last modified date in footer
const lastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.textContent = document.lastModified;
});