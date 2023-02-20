const generateBtn = document.querySelector("#click");
// if you are reading this text...this has been the most frustrating project I have yet to worked on. Be well..
function writePassword() {
    const password = generatePassword();
    const passwordText = document.querySelector("#password");
    passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword);
console.log(generateBtn);

function generatePassword() {
    let allChars = "";
    let passwordLength = 0;

    const lengthCheckbox = document.querySelector("#length");
    if (lengthCheckbox.checked) {
        const passwordLengthInput = document.querySelector("#passwordlength");
        if (!isNaN(parseInt(passwordLengthInput.value))) {
            passwordLength = parseInt(passwordLengthInput.value);

        }

    }

    const uppercaseCheckbox = document.querySelector("#uppercase");
    if (uppercaseCheckbox.checked) {
        allChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    const lowercaseCheckbox = document.querySelector("#lowercase");
    if (lowercaseCheckbox.checked) {
        allChars += "abcdefghijklmnopqrstuvwxyz";
    }

    const numberCheckbox = document.querySelector("#number");
    if (numberCheckbox.checked) {
        allChars += "0123456789";
    }

    const specialCharCheckbox = document.querySelector("#special-characters");
    if (specialCharCheckbox.checked) {
        allChars += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    }

    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        password += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }

    return password;
}
//I spent hours upon hours working on this project