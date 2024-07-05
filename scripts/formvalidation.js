document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var email = document.getElementById('email').value;
    var emailPattern = /^[a-zA-Z0-9._%+-]+@byui\.edu$/;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var emailError = document.getElementById('emailError');
    var passwordPatternError = document.getElementById('passwordPatternError');
    var passwordError = document.getElementById('passwordError');

    var isValid = true;

    if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    var passwordPattern = /^[a-zA-Z0-9]{8,}$/;
    if (!passwordPattern.test(password)) {
        passwordPatternError.textContent = "Password must be at least 8 characters long and contain only letters and numbers.";
        isValid = false;
    } else {
        passwordPatternError.textContent = "";
    }

    if (password !== confirmPassword) {
        passwordError.textContent = "Passwords do not match. Please try again.";
        document.getElementById('password').value = '';
        document.getElementById('confirmPassword').value = '';
        document.getElementById('password').focus();
        isValid = false;
    } else {
        passwordError.textContent = '';
    }

    if (isValid) {
        this.submit();
    }
});

const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

// Add event listeners for change and input events on the range input
// range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    // rangevalue.innerHTML = range.value;
    rangevalue.textContent = range.value;
}