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

// Generate password function
function generatePassword() {
  var symbol = "!@#$%^&*?";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var number = "0123456789";
  var options = [];
  options.push(symbol, upperCase, lowerCase, number);
  console.log(options);
  var length = window.prompt("Enter length of password 12-100");
  console.log(length);

  if (length < 101 || length > 11) {
    passwordText = length.value; 
  } else {

  }


  if (length < 12 || length > 100) {
    var length = window.prompt("Enter length of password 12-100");
  } else {
    console.log("it worked");
  }

  function options() {
    return options[Math.floor(Math.random() * options.length)];
  }

  //lowercase
  if (confirm("Include lowercase?") === true) {
    console.log(lowerCase());
  } else {
    //nothing
  }

  //UPPERCASE
  if (confirm("Include UPPERCASE?") === true) {
    console.log(randomUpperCase());
  } else {
    //nothing
  }

  //symbols
  if (confirm("Include symbols?") === true) {
    console.log(randomSymbol());
  } else {
    //nothing
  }

  //numbers
  if (confirm("Include numbers?") === true) {
    console.log(randomNumber());
  } else {
    //nothing
  }
}

// Random functions
function randomUpperCase() {
  return randomUpperCase[Math.floor(Math.random() * upperCase.length)];
}

function randomLowerCase() {
  return lowerCase[Math.floor(Math.random() * lowerCase.length)];
}

console.log(randomLowerCase());

function randomNumber() {
  return number[Math.floor(Math.random() * number.length)];
}

console.log(randomNumber());

function randomSymbol() {
  return symbol[Math.floor(Math.random() * symbol.length)];
}

console.log(randomSymbol());
