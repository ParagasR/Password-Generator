// create arrays with all the vaules for the values
//create prompts for pw criteria
//create text input field for the pw length
//combine arrays the use for loop to use random number gen to pull random index

var lowCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
var upCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];
var specChar = ['!', '@', '#', '$', '%', '^', '&', '*', '?', '/', '=', '+'];
var numChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var customPw = [];
  var finalPw = "";
  var pwLength = prompt("Choose the length of the password", "8-128. Anything outside of this range will generate a password that is of random length.");

  if (pwLength >= 8 && pwLength <= 128) {
    alert("Your password will be " + pwLength + " characters long.")
  } else {
    alert("The password generated will be a random length.");
    pwLength = Math.floor(Math.random() * 121) + 8;
  }

  console.log(pwLength);

  alert("The next set of questions will determine what characteristics will be implemented in the generated password. Use 'Ok' to accept the criteria, and 'Cancel' the deny it.");
  var choiceUp = confirm("Would you like to use upper case characters?");
  if (choiceUp) {
    customPw = customPw.concat(upCase);
  }

  var choiceLow = confirm("Would you like to use lower case characters?");
  if (choiceLow) {
    customPw = customPw.concat(lowCase);
  }

  if (!choiceUp && !choiceLow) {
    alert("Letters are required for a password. Please try again.")
    generatePassword();
  } 

  var choiceSpec = confirm("Would you like to use special characters?");
  if (choiceSpec) {
    customPw = customPw.concat(specChar);
  }

  var choiceNum = confirm("Would you like to use numbers?");  
  if (choiceNum) {
    customPw = customPw.concat(numChar);
  }

  for (var i = 0; i < pwLength; i++) {
    finalPw = finalPw + customPw[Math.floor(Math.random()*customPw.length)];
  }
  
  console.log(customPw);
  return finalPw;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
