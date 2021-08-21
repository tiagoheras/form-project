const form = document.forms[0];

const emailInput = document.getElementById('email');
const zipCodeInput = document.getElementById('zip-code');
const passwordInput = document.getElementById('password');
const passwordConfirmInput = document.getElementById('password-confirm');

const inputs = [emailInput, zipCodeInput, passwordInput, passwordConfirmInput];

function showError(input, error) {
    const inputSpan = document.getElementById(input.id + '-error');
    inputSpan.innerText = error;
}

function handleInvalidFields() {
    inputs.forEach(input => {
        let error = null;
        if (input.validity.valueMissing) {
            error = "I'm missing 😬!";
        } else if (input.validity.typeMismatch) {
            error = "I need an email! 📧";
        } else if (input.validity.tooShort) {
            error = `I need to be at least ${input.minLength} characters long!`;
        }
        showError(input, error);
    });
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
        handleInvalidFields();
        console.log(form.checkValidity());
    } else if (passwordInput.value !== passwordConfirmInput.value) {
        showError(passwordConfirmInput, "I have to bee the same as him 👆");
    } else {
        alert('HIGH FIVE ✋')
    }
})