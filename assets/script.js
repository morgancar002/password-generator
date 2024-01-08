// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var symbol = "!@#$%^&*?";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var number = "0123456789";
  var passwordLength = window.prompt("Enter length of password 12-100");
  console.log(passwordLength);
  var symbol = confirm("Would you like special characters?");
  var number = confirm("Would you like numbers?");
  if (confirm("Include UPPERCASE?") === true) {
    console.log(upperCase());
    passwordText.push(upperCase);
  } else {
    //nothing
  }
  if (confirm("Include lowercase?") === true) {
    console.log(lowerCase());
    passwordText.push(lowerCase);
  } else {
    //nothing
  }
  var password = "";
for (var i = 0; i <= passwordLength; i++) {
 var randomNumber = Math.floor(Math.random() * chars.length);
password += chars.substring(randomNumber, randomNumber +1);
}

if (length < 101 || length > 11) {
  passwordText = length.value; 
} else if (length < 12 || length > 100) {
  var length = window.prompt("Enter length of password 12-100");
} else {
  console.log("it worked");
}