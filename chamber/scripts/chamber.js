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



//join
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.wf1'); // Select the form by its class name

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the form from submitting normally

            // Validate form fields
            if (validateForm()) {
                this.submit(); // Submit the form if validation passes
            }
        });
    }

    function validateForm() {
        let isValid = true;

        // Reset error messages
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
