const generateBtn = document.querySelector("#click");
generateBtn.addEventListener("click", writePassword);

function writePassword() {
    const password = generatePassword();
    const passwordText = document.querySelector("#password");
    passwordText.value = password;
}
// if you are reading this, i am sorry, this has been the most difficult project
function generatePassword() {
    let allChars = "";
    let passwordLength = document.querySelector("#length").value;

    if (passwordLength < 8) {
        passwordLength = 8;
    } else if (passwordLength > 128) {
        passwordLength = 128;
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