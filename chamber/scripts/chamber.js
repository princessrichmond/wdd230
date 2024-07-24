document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('darkmode-toggle').addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        document.querySelector('header').classList.toggle('dark-mode');
        document.querySelector('.navbar').classList.toggle('dark-mode');
        document.querySelector('main').classList.toggle('dark-mode');
        document.querySelector('footer').classList.toggle('dark-mode');
    });

    document.getElementById('hamburger').addEventListener('click', function () {
        document.querySelector('.navbar').classList.toggle('active');
        document.getElementById('close').style.display = 'block';
        document.getElementById('hamburger').style.display = 'none';
    });

    document.getElementById('close').addEventListener('click', function () {
        document.querySelector('.navbar').classList.toggle('active');
        document.getElementById('close').style.display = 'none';
        document.getElementById('hamburger').style.display = 'block';
    });

    // weather card chamber index
    const weatherIcon = document.querySelector('#weather-icon');
    const currentTemp = document.querySelector('#current-temp');
    const captionDesc = document.querySelector('figcaption');
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=40.05&lon=-86.00&units=imperial&appid=7e5dfb1d77e3e16bc5cd6b1fa8804995';


    async function apiFetch() {
    
        try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data); 
        } else {
            throw Error(await response.text());
        }
        } catch (error) {
        console.log('Fetch Error:', error);
        }
    }
    
    // Function to display weather data on the HTML page
    function displayResults(data) {
        // Display current temperature
        currentTemp.textContent = `${Math.round(data.main.temp)}°F`;

        const iconCode = data.weather[0].icon;
        const iconsrc = `https://openweathermap.org/img/w/${iconCode}.png`;

        // let desc = data.weather[0].description;
        weatherIcon.setAttribute('src', iconsrc);
        weatherIcon.setAttribute('alt', data.weather[0].description);
        captionDesc.textContent = data.weather[0].description;
    }
    apiFetch();
        const lastModifiedElement = document.getElementById('lastModified');
        lastModifiedElement.textContent = document.lastModified;
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

//visitor message
document.addEventListener('DOMContentLoaded', function() {
    // Function to calculate the difference in days between two dates
    function getDaysDifference(date1, date2) {
        const diffTime = Math.abs(date2 - date1);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    }

    // Function to display visitor message based on last visit
    function displayVisitorMessage() {
        const localStorageKey = 'lastVisitDate';
        const lastVisitDateString = localStorage.getItem(localStorageKey);
        const currentVisitDate = new Date();

        if (lastVisitDateString) {
            const lastVisitDate = new Date(lastVisitDateString);
            const daysDifference = getDaysDifference(lastVisitDate, currentVisitDate);

            let message;
            if (daysDifference < 1) {
                message = "Back so soon! Awesome!";
            } else {
                message = `You last visited ${daysDifference} day${daysDifference === 1 ? '' : 's'} ago.`;
            }

            document.getElementById('visitorMessage').textContent = message;
        } else {
            localStorage.setItem(localStorageKey, currentVisitDate.toISOString());
            document.getElementById('visitorMessage').textContent = "Welcome! Let us know if you have any questions.";
        }
    }

    // Call the function to display visitor message
    displayVisitorMessage();

    // Update localStorage with current visit date
    localStorage.setItem('lastVisitDate', new Date().toISOString());
});



//Join Page
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.wf1');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            // Validate form fields
            if (validateForm()) {
                form.submit(); // Submit the form if validation passes
            }
        });
    }

    function validateForm() {
        let isValid = true;

        clearErrors();

        // Form field values
        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const position = document.getElementById('position').value.trim();
        const email = document.getElementById('email').value.trim();
        const mobile = document.getElementById('mobile').value.trim();
        const businessName = document.getElementById('businessName').value.trim();
        const membershipLevel = document.getElementById('membershipLevel').value;
        const description = document.getElementById('description').value.trim();

        // Validation rules
        if (firstName === '') {
            setError('firstNameError', 'Please enter your first name.');
            isValid = false;
        }

        if (lastName === '') {
            setError('lastNameError', 'Please enter your last name.');
            isValid = false;
        }

        if (position === '') {
            setError('positionError', 'Please enter your position.');
            isValid = false;
        } else if (!/^[a-zA-Z\s\-]{7,}$/.test(position)) {
            setError('positionError', 'Position must contain at least seven alphabetical characters, hyphens, and spaces only.');
            isValid = false;
        }

        if (email === '') {
            setError('emailError', 'Please enter your email address.');
            isValid = false;
        } else if (!isValidEmail(email)) {
            setError('emailError', 'Please enter a valid email address.');
            isValid = false;
        }

        if (mobile === '') {
            setError('mobileError', 'Please enter your mobile number.');
            isValid = false;
        } else if (!isValidMobile(mobile)) {
            setError('mobileError', 'Please enter a valid mobile number.');
            isValid = false;
        }

        if (businessName === '') {
            setError('businessNameError', 'Please enter your business/organization name.');
            isValid = false;
        }

        if (membershipLevel === '') {
            setError('membershipLevelError', 'Please select a membership level.');
            isValid = false;
        }

        return isValid;
    }

    // Function to set error message for a field
    function setError(id, message) {
        const errorElement = document.getElementById(id);
        if (errorElement) {
            errorElement.textContent = message;
        }
    }

    // Function to clear all error messages
    function clearErrors() {
        const errorMessages = form.querySelectorAll('.error-message');
        errorMessages.forEach(function(errorMessage) {
            errorMessage.textContent = '';
        });
    }

    // Function to check if email is valid
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // Function to check if mobile number is valid
    function isValidMobile(mobile) {
        return /^[0-9]{10}$/.test(mobile);
    }
});

//Directory Page
document.addEventListener('DOMContentLoaded', function() {
    const gridButton = document.getElementById('grid');
    const listButton = document.getElementById('list');
    const memberList = document.getElementById('memberList');
    const lastModifiedElement = document.getElementById('lastModified');

    // Fetch members from JSON file
    fetch('data/members.json')
        .then(response => response.json())
        .then(data => {
            // Initialize member directory
            renderMembers(data.members);

            // Event listener for grid button
            gridButton.addEventListener('click', function() {
                memberList.classList.remove('list');
                memberList.classList.add('grid');
            });

            // Event listener for list button
            listButton.addEventListener('click', function() {
                memberList.classList.remove('grid');
                memberList.classList.add('list');
            });
        })
        .catch(error => console.error('Error fetching members:', error));

    // Function to render members
    function renderMembers(members) {
        memberList.innerHTML = ''; 

        members.forEach(member => {
            const memberCard = document.createElement('section');
            memberCard.classList.add('member-card');

            memberCard.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}" />
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">${member.website}</a>
                <p>Membership Level: ${member.membership_level}</p>
                <p>${member.other_info}</p>
            `;

            memberList.appendChild(memberCard);
        });
        if (lastModifiedElement) {
            lastModifiedElement.textContent = new Date().toLocaleDateString();
        } else {
            console.error('Element with id "lastModified" not found.');
        }
    }
});

